import type { Derived } from "../lib/compute";
import { pct } from "../lib/format";

function Bar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="pbar">
      <div className="pbar__label">{label}</div>
      <div className="pbar__track">
        <div
          className="pbar__fill"
          style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%`, background: color }}
        />
      </div>
      <div className="pbar__val">{pct(value)}</div>
    </div>
  );
}

export default function ProbabilityBars({ d }: { d: Derived }) {
  return (
    <figure className="viz">
      <figcaption className="viz__title">Probability shift</figcaption>
      <Bar label="Pre-test" value={d.pretest} color="var(--muted)" />
      <Bar label="If positive" value={d.ppv} color="var(--disease)" />
      <Bar label="If negative" value={d.postNeg} color="var(--healthy)" />
      <p className="viz__note">
        A positive result moves the probability from {pct(d.pretest)} to{" "}
        <strong>{pct(d.ppv)}</strong>; a negative result moves it to{" "}
        <strong>{pct(d.postNeg)}</strong>.
      </p>
    </figure>
  );
}
