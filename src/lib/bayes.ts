/**
 * Pure Bayesian math for diagnostic reasoning.
 *
 * Conventions:
 *  - All probabilities are FRACTIONS in [0, 1] (e.g. 0.95, never 95).
 *  - Odds are non-negative and may be `Infinity` (handled explicitly).
 *  - This module has no dependencies and no UI concerns; formatting and
 *    rounding-for-display live in the component layer.
 *
 * The central teaching identity this file encodes:
 *   PPV         = P(disease | test POSITIVE) = postTestProb(pretest, LR+)
 *   1 - NPV     = P(disease | test NEGATIVE) = postTestProb(pretest, LR-)
 * so a single pre-test probability drives BOTH branches of a test.
 */

export type TestResult = "pos" | "neg";

export interface LikelihoodRatioPair {
  lrPos: number;
  lrNeg: number;
}

/** Pre-test odds from a pre-test probability. p = 1 → Infinity. */
export const oddsFromProb = (p: number): number =>
  p >= 1 ? Infinity : p / (1 - p);

/** Probability from odds. Infinite odds → certainty (1). */
export const probFromOdds = (o: number): number =>
  o === Infinity ? 1 : o / (1 + o);

/**
 * Likelihood ratios from sensitivity and specificity.
 *   LR+ = sens / (1 - spec)   (how much a POSITIVE result raises the odds)
 *   LR- = (1 - sens) / spec   (how much a NEGATIVE result lowers the odds)
 * spec = 1 → LR+ = Infinity; spec = 0 → LR- = Infinity (guarded).
 */
export function likelihoodRatios(sens: number, spec: number): LikelihoodRatioPair {
  return {
    lrPos: spec >= 1 ? Infinity : sens / (1 - spec),
    lrNeg: spec <= 0 ? Infinity : (1 - sens) / spec,
  };
}

/** Apply Bayes' rule in odds form: post-test prob from a pre-test prob and an LR. */
export function postTestProb(pretest: number, lr: number): number {
  if (lr === Infinity) return 1;
  if (lr === 0) return 0;
  return probFromOdds(oddsFromProb(pretest) * lr);
}

/**
 * Positive predictive value = P(disease | test+), using the pre-test
 * probability as the prior (i.e. as the "prevalence" for this patient).
 */
export function ppv(pretest: number, sens: number, spec: number): number {
  const num = pretest * sens;
  const den = num + (1 - pretest) * (1 - spec);
  return den === 0 ? 0 : num / den;
}

/** Negative predictive value = P(no disease | test-). */
export function npv(pretest: number, sens: number, spec: number): number {
  const num = (1 - pretest) * spec;
  const den = num + pretest * (1 - sens);
  return den === 0 ? 1 : num / den;
}

/** Post-test probability of disease after a NEGATIVE result (= 1 - NPV). */
export const probDiseaseGivenNeg = (
  pretest: number,
  sens: number,
  spec: number,
): number => 1 - npv(pretest, sens, spec);

export interface NaturalFrequencies {
  N: number;
  diseased: number;
  healthy: number;
  truePos: number;
  falseNeg: number;
  falsePos: number;
  trueNeg: number;
}

/**
 * Gigerenzer-style natural frequencies for a hypothetical cohort of N patients.
 * Returns FRACTIONAL counts on purpose — round only at render time (with
 * `largestRemainderRound`) so the four cells still sum to N exactly.
 */
export function naturalFrequencies(
  pretest: number,
  sens: number,
  spec: number,
  N = 1000,
): NaturalFrequencies {
  const diseased = pretest * N;
  const healthy = N - diseased;
  return {
    N,
    diseased,
    healthy,
    truePos: diseased * sens,
    falseNeg: diseased * (1 - sens),
    falsePos: healthy * (1 - spec),
    trueNeg: healthy * spec,
  };
}

export interface SequenceStep {
  sensitivity: number;
  specificity: number;
  result: TestResult;
}

/**
 * Sequential testing: the post-test probability after one test becomes the
 * pre-test probability (prior) for the next. Returns the trajectory of
 * probabilities — the value before any test, then after each step — which
 * drives the probability-staircase visualization.
 *
 * Assumes conditional independence of the tests given disease status; this is
 * a teaching approximation and overstates certainty for correlated tests.
 */
export function sequentialUpdate(start: number, steps: SequenceStep[]): number[] {
  const trajectory = [start];
  let p = start;
  for (const step of steps) {
    const { lrPos, lrNeg } = likelihoodRatios(step.sensitivity, step.specificity);
    p = postTestProb(p, step.result === "pos" ? lrPos : lrNeg);
    trajectory.push(p);
  }
  return trajectory;
}

/** Clamp a number into [min, max]. */
export const clamp = (x: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, x));

/**
 * Round an array of fractional counts to integers that sum to `total` exactly,
 * using the largest-remainder (Hamilton) method. Prevents a 1000-patient grid
 * from rendering 999 or 1001 icons.
 */
export function largestRemainderRound(values: number[], total: number): number[] {
  const floors = values.map((v) => Math.floor(v));
  const used = floors.reduce((a, b) => a + b, 0);
  let remaining = Math.round(total) - used;

  const byFraction = values
    .map((v, i) => ({ i, frac: v - Math.floor(v) }))
    .sort((a, b) => b.frac - a.frac);

  const result = [...floors];
  for (let k = 0; k < byFraction.length && remaining > 0; k++) {
    result[byFraction[k].i] += 1;
    remaining -= 1;
  }
  return result;
}
