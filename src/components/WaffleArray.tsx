import type { Derived } from "../lib/compute";
import { largestRemainderRound } from "../lib/bayes";

const CATEGORIES = [
  { key: "tp", label: "True positive (disease, test +)", cls: "wcell--tp" },
  { key: "fn", label: "False negative (disease, test −)", cls: "wcell--fn" },
  { key: "fp", label: "False positive (healthy, test +)", cls: "wcell--fp" },
  { key: "tn", label: "True negative (healthy, test −)", cls: "wcell--tn" },
] as const;

export default function WaffleArray({ d }: { d: Derived }) {
  const total = 100;
  const counts = largestRemainderRound(
    [
      (d.freq.truePos / d.freq.N) * total,
      (d.freq.falseNeg / d.freq.N) * total,
      (d.freq.falsePos / d.freq.N) * total,
      (d.freq.trueNeg / d.freq.N) * total,
    ],
    total,
  );

  // Build the 100 cells grouped by category so colors cluster.
  const cells: string[] = [];
  CATEGORIES.forEach((c, i) => {
    for (let k = 0; k < counts[i]; k++) cells.push(c.cls);
  });

  return (
    <figure className="viz">
      <figcaption className="viz__title">100 representative patients</figcaption>
      <div className="waffle" role="img" aria-label="Icon array of 100 patients by test outcome">
        {cells.map((cls, i) => (
          <span key={i} className={`wcell ${cls}`} />
        ))}
      </div>
      <ul className="waffle__legend">
        {CATEGORIES.map((c, i) => (
          <li key={c.key}>
            <span className={`swatch ${c.cls}`} />
            {c.label}: <strong>{counts[i]}</strong>
          </li>
        ))}
      </ul>
    </figure>
  );
}
