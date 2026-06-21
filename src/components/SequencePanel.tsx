import { tests, testById, type SequencePreset } from "../data/schema";
import type { TestResult } from "../lib/bayes";

export interface SeqStep {
  testId: string;
  result: TestResult;
}

interface Props {
  steps: SeqStep[];
  onChange: (steps: SeqStep[]) => void;
  presets: SequencePreset[];
  activePreset: SequencePreset | null;
  onLoadPreset: (preset: SequencePreset) => void;
  activeStep: number;
  onSelectStep: (i: number) => void;
}

export default function SequencePanel({
  steps,
  onChange,
  presets,
  activePreset,
  onLoadPreset,
  activeStep,
  onSelectStep,
}: Props) {
  const setResult = (i: number, result: TestResult) => {
    const next = steps.slice();
    next[i] = { ...next[i], result };
    onChange(next);
  };

  return (
    <div className="seq">
      <div className="seq__presets">
        <span className="seq__presets-label">Presets:</span>
        {presets.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`chip ${activePreset?.id === p.id ? "chip--active" : ""}`}
            onClick={() => onLoadPreset(p)}
          >
            {p.name}
          </button>
        ))}
        {steps.length > 0 && (
          <button type="button" className="chip chip--clear" onClick={() => onChange([])}>
            Clear
          </button>
        )}
      </div>

      {steps.length === 0 && (
        <p className="seq__empty">
          Load a preset above, or add tests below, to chain them. The post-test
          probability of each test carries over as the pre-test probability of the
          next.
        </p>
      )}

      <ol className="seq__steps">
        {steps.map((s, i) => {
          const test = testById(s.testId);
          return (
            <li
              key={i}
              className={`seq__step ${i === activeStep ? "is-active" : ""}`}
              onClick={() => onSelectStep(i)}
            >
              <span className="seq__num">{i + 1}</span>
              <span className="seq__name">
                {test ? `${test.diagnosis} — ${test.testName}` : s.testId}
              </span>
              <span className="seq__toggle" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={`seg ${s.result === "pos" ? "seg--on seg--pos" : ""}`}
                  onClick={() => setResult(i, "pos")}
                >
                  + positive
                </button>
                <button
                  type="button"
                  className={`seg ${s.result === "neg" ? "seg--on seg--neg" : ""}`}
                  onClick={() => setResult(i, "neg")}
                >
                  − negative
                </button>
              </span>
              <button
                type="button"
                className="seq__remove"
                aria-label="Remove test"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(steps.filter((_, k) => k !== i));
                }}
              >
                ×
              </button>
            </li>
          );
        })}
      </ol>

      <div className="seq__add">
        <label htmlFor="addtest">Add a test:</label>
        <select
          id="addtest"
          value=""
          onChange={(e) => {
            if (e.target.value) onChange([...steps, { testId: e.target.value, result: "pos" }]);
          }}
        >
          <option value="">Choose…</option>
          {tests.map((t) => (
            <option key={t.id} value={t.id}>
              {t.diagnosis} — {t.testName}
            </option>
          ))}
        </select>
      </div>

      {activePreset && (activePreset.stopNote || activePreset.independenceNote) && (
        <div className="seq__notes">
          {activePreset.stopNote && (
            <p>
              <strong>When to stop:</strong> {activePreset.stopNote}
            </p>
          )}
          {activePreset.independenceNote && (
            <p>
              <strong>Independence caveat:</strong> {activePreset.independenceNote}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
