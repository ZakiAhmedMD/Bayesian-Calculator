/**
 * Verbal confidence anchors for the pre-test probability slider.
 *
 * The point of the tool is to help a clinician translate a gut feeling
 * ("I doubt it", "could go either way", "almost certain") into a number.
 * These bands are deliberately spaced to mirror how clinicians talk, not
 * evenly across 0–100%.
 */
export interface ConfidenceBand {
  /** Representative probability for this band (fraction). */
  prob: number;
  /** Full description shown in the readout. */
  label: string;
  /** Short label for the slider tick. */
  short: string;
}

export const confidenceBands: ConfidenceBand[] = [
  { prob: 0.03, label: "Very unlikely — essentially excluded", short: "Very unlikely" },
  { prob: 0.1, label: "Unlikely", short: "Unlikely" },
  { prob: 0.25, label: "Possible", short: "Possible" },
  { prob: 0.5, label: "Uncertain — a coin flip", short: "Coin flip" },
  { prob: 0.75, label: "Probable", short: "Probable" },
  { prob: 0.9, label: "Likely", short: "Likely" },
  { prob: 0.97, label: "Very likely — near certain", short: "Very likely" },
];

/** The verbal band whose representative probability is closest to `prob`. */
export function bandFor(prob: number): ConfidenceBand {
  return confidenceBands.reduce((best, b) =>
    Math.abs(b.prob - prob) < Math.abs(best.prob - prob) ? b : best,
  );
}
