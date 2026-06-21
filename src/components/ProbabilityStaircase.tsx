import type { TestResult } from "../lib/bayes";
import { pct } from "../lib/format";

export interface StaircaseStep {
  name: string;
  result: TestResult;
}

interface Props {
  /** Probabilities: index 0 is the starting prior, then one per test. */
  trajectory: number[];
  steps: StaircaseStep[];
  selectedIndex: number;
  onSelectStep: (i: number) => void;
}

const W = 480;
const H = 240;
const PAD = { left: 42, right: 16, top: 20, bottom: 46 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

export default function ProbabilityStaircase({
  trajectory,
  steps,
  selectedIndex,
  onSelectStep,
}: Props) {
  const n = trajectory.length - 1;
  const xFor = (i: number) => PAD.left + (n === 0 ? 0 : (i / n) * PLOT_W);
  const yFor = (p: number) => PAD.top + (1 - p) * PLOT_H;

  const gridLines = [0, 0.25, 0.5, 0.75, 1];

  return (
    <figure className="viz viz--wide">
      <figcaption className="viz__title">Probability across the sequence</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="stair" role="img" aria-label="Probability staircase">
        {/* horizontal gridlines + y labels */}
        {gridLines.map((g) => (
          <g key={g}>
            <line
              x1={PAD.left}
              y1={yFor(g)}
              x2={W - PAD.right}
              y2={yFor(g)}
              className="stair__grid"
            />
            <text x={PAD.left - 8} y={yFor(g) + 3} textAnchor="end" className="stair__ylabel">
              {Math.round(g * 100)}
            </text>
          </g>
        ))}

        {/* connecting segments, colored by the result that produced them */}
        {trajectory.slice(1).map((p, i) => (
          <line
            key={i}
            x1={xFor(i)}
            y1={yFor(trajectory[i])}
            x2={xFor(i + 1)}
            y2={yFor(p)}
            className={`stair__seg ${steps[i].result === "pos" ? "stair__seg--pos" : "stair__seg--neg"}`}
          />
        ))}

        {/* points */}
        {trajectory.map((p, i) => (
          <g
            key={i}
            className={`stair__pt ${i === selectedIndex ? "is-selected" : ""}`}
            onClick={() => onSelectStep(i)}
          >
            <circle cx={xFor(i)} cy={yFor(p)} r={i === selectedIndex ? 6 : 4} className="stair__dot" />
            <text x={xFor(i)} y={yFor(p) - 10} textAnchor="middle" className="stair__plabel">
              {pct(p)}
            </text>
            <text x={xFor(i)} y={H - PAD.bottom + 18} textAnchor="middle" className="stair__xlabel">
              {i === 0 ? "Pre-test" : steps[i - 1].name}
            </text>
            {i > 0 && (
              <text
                x={xFor(i)}
                y={H - PAD.bottom + 32}
                textAnchor="middle"
                className={`stair__xresult ${steps[i - 1].result === "pos" ? "is-pos" : "is-neg"}`}
              >
                {steps[i - 1].result === "pos" ? "positive" : "negative"}
              </text>
            )}
          </g>
        ))}
      </svg>
      <p className="viz__note">
        Each test's post-test probability becomes the pre-test probability for the
        next. Click a point to inspect that step below.
      </p>
    </figure>
  );
}
