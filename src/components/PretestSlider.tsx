import { confidenceBands, bandFor } from "../lib/confidenceBands";
import { pctWhole } from "../lib/format";

interface Props {
  /** Current pre-test probability as a whole percent, 1–99. */
  valuePct: number;
  onChange: (pct: number) => void;
}

// Native range track position (0–1) for a whole-percent value on a 1–99 slider.
const trackPos = (pct: number) => (pct - 1) / 98;

export default function PretestSlider({ valuePct, onChange }: Props) {
  const fraction = valuePct / 100;
  const band = bandFor(fraction);

  return (
    <div className="slider">
      <div className="slider__head">
        <label htmlFor="pretest" className="slider__label">
          Pre-test probability
        </label>
        <div className="slider__readout">
          <span className="slider__value">{pctWhole(fraction)}</span>
          <span className="slider__band">{band.label}</span>
        </div>
      </div>

      <input
        id="pretest"
        type="range"
        min={1}
        max={99}
        step={1}
        value={valuePct}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-describedby="pretest-help"
      />

      <div className="slider__ticks" aria-hidden="true">
        {confidenceBands.map((b) => (
          <button
            key={b.prob}
            type="button"
            className="slider__tick"
            style={{ left: `${trackPos(b.prob * 100) * 100}%` }}
            onClick={() => onChange(Math.round(b.prob * 100))}
            title={`Set to ${b.short} (${pctWhole(b.prob)})`}
          >
            <span className="slider__tick-mark" />
            <span className="slider__tick-text">{b.short}</span>
          </button>
        ))}
      </div>

      <p id="pretest-help" className="slider__help">
        How likely is this diagnosis <em>before</em> the test result? Drag the
        slider, or click a label to anchor your gut feeling to a number.
      </p>
    </div>
  );
}
