import { useMemo, useState } from "react";
import { tests, sequences, testById, type TestEntry } from "./data/schema";
import { sequentialUpdate, clamp, type SequenceStep } from "./lib/bayes";
import { derive } from "./lib/compute";
import TestSelector from "./components/TestSelector";
import PretestSlider from "./components/PretestSlider";
import ResultsPanel from "./components/ResultsPanel";
import FaganNomogram from "./components/FaganNomogram";
import ProbabilityBars from "./components/ProbabilityBars";
import ContingencyTable from "./components/ContingencyTable";
import WaffleArray from "./components/WaffleArray";
import ProbabilityStaircase from "./components/ProbabilityStaircase";
import SequencePanel, { type SeqStep } from "./components/SequencePanel";
import CitationFooter from "./components/CitationFooter";

type Mode = "single" | "sequential";

const defaultPct = (t: TestEntry) =>
  t.typicalPretest ? clamp(Math.round(t.typicalPretest * 100), 1, 99) : 30;

export default function App() {
  const [mode, setMode] = useState<Mode>("single");
  const [selectedId, setSelectedId] = useState(tests[0].id);
  const [pretestPct, setPretestPct] = useState(defaultPct(tests[0]));

  const [seqSteps, setSeqSteps] = useState<SeqStep[]>([]);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const start = pretestPct / 100;

  // ---- single-test mode ----
  const singleTest = testById(selectedId) ?? tests[0];
  const singleDerived = derive(start, singleTest.sensitivity, singleTest.specificity);

  // ---- sequential mode ----
  const mappedSteps = useMemo<SequenceStep[]>(
    () =>
      seqSteps.flatMap((s) => {
        const t = testById(s.testId);
        return t
          ? [{ sensitivity: t.sensitivity, specificity: t.specificity, result: s.result }]
          : [];
      }),
    [seqSteps],
  );
  const trajectory = useMemo(() => sequentialUpdate(start, mappedSteps), [start, mappedSteps]);

  const hasSteps = seqSteps.length > 0;
  const safeActive = Math.min(activeStep, Math.max(0, seqSteps.length - 1));
  const activeSeqTest = hasSteps ? testById(seqSteps[safeActive].testId) : undefined;
  const activeSeqDerived =
    activeSeqTest && trajectory[safeActive] !== undefined
      ? derive(trajectory[safeActive], activeSeqTest.sensitivity, activeSeqTest.specificity)
      : undefined;

  const activePreset = sequences.find((s) => s.id === activePresetId) ?? null;

  // What the detail panels (results, visuals, citation) render:
  const detailTest = mode === "single" ? singleTest : activeSeqTest;
  const detailDerived = mode === "single" ? singleDerived : activeSeqDerived;

  const selectSingle = (t: TestEntry) => {
    setSelectedId(t.id);
    setPretestPct(defaultPct(t));
  };

  const loadPreset = (preset: (typeof sequences)[number]) => {
    setSeqSteps(preset.steps.map((id) => ({ testId: id, result: "pos" as const })));
    setActivePresetId(preset.id);
    setActiveStep(0);
    const first = testById(preset.steps[0]);
    if (first) setPretestPct(defaultPct(first));
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>Bayesian Calculator</h1>
        <p className="app__tagline">
          Turn a pre-test probability into a post-test probability, PPV, and NPV —
          a diagnostic-reasoning teaching tool.
        </p>
      </header>

      <div className="modes" role="tablist" aria-label="Calculator mode">
        <button
          role="tab"
          aria-selected={mode === "single"}
          className={`modes__btn ${mode === "single" ? "is-active" : ""}`}
          onClick={() => setMode("single")}
        >
          Single test
        </button>
        <button
          role="tab"
          aria-selected={mode === "sequential"}
          className={`modes__btn ${mode === "sequential" ? "is-active" : ""}`}
          onClick={() => setMode("sequential")}
        >
          Sequential testing
        </button>
      </div>

      <section className="controls">
        {mode === "single" ? (
          <TestSelector selectedId={selectedId} onSelect={selectSingle} />
        ) : (
          <SequencePanel
            steps={seqSteps}
            onChange={(s) => {
              setSeqSteps(s);
              setActivePresetId(null);
            }}
            presets={sequences}
            activePreset={activePreset}
            onLoadPreset={loadPreset}
            activeStep={safeActive}
            onSelectStep={setActiveStep}
          />
        )}
        <PretestSlider valuePct={pretestPct} onChange={setPretestPct} />
        {mode === "sequential" && (
          <p className="controls__hint">
            The slider sets the <strong>starting</strong> pre-test probability,
            before the first test.
          </p>
        )}
      </section>

      {mode === "sequential" && hasSteps && (
        <ProbabilityStaircase
          trajectory={trajectory}
          steps={seqSteps.map((s) => ({
            name: testById(s.testId)?.testName ?? s.testId,
            result: s.result,
          }))}
          selectedIndex={safeActive}
          onSelectStep={setActiveStep}
        />
      )}

      {detailTest && detailDerived ? (
        <>
          {mode === "sequential" && (
            <p className="detail-context">
              Showing step {safeActive + 1}: <strong>{detailTest.testName}</strong>{" "}
              applied to a pre-test probability of {Math.round(trajectory[safeActive] * 100)}%.
            </p>
          )}
          <ResultsPanel test={detailTest} d={detailDerived} />
          <div className="viz-grid">
            <FaganNomogram d={detailDerived} />
            <ProbabilityBars d={detailDerived} />
            <ContingencyTable d={detailDerived} />
            <WaffleArray d={detailDerived} />
          </div>
          <CitationFooter test={detailTest} />
        </>
      ) : (
        <p className="empty-detail">
          Add a test or load a preset to see the calculation.
        </p>
      )}
    </div>
  );
}
