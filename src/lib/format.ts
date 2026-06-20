import { format } from "d3-format";

const pct1 = format(".1%");
const pct0 = format(".0%");
const fixed2 = format(".2f");

const noNegZero = (x: number): number => (Object.is(x, -0) ? 0 : x);

/** Probability as a percentage with one decimal, e.g. 0.413 → "41.3%". */
export const pct = (x: number): string => pct1(noNegZero(x));

/** Probability as a whole percentage, e.g. 0.41 → "41%". */
export const pctWhole = (x: number): string => pct0(noNegZero(x));

/** Likelihood ratio: two decimals, with ∞ for infinite. */
export const lr = (x: number): string =>
  x === Infinity ? "∞" : x >= 100 ? format(".0f")(x) : fixed2(x);
