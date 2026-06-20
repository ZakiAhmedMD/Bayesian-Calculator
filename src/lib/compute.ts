import {
  likelihoodRatios,
  ppv,
  npv,
  probDiseaseGivenNeg,
  naturalFrequencies,
  type NaturalFrequencies,
} from "./bayes";

/** All values derived from a single (pre-test probability, test) pair. */
export interface Derived {
  pretest: number;
  sens: number;
  spec: number;
  lrPos: number;
  lrNeg: number;
  /** Post-test probability of disease if the test is POSITIVE (= PPV). */
  ppv: number;
  /** Negative predictive value. */
  npv: number;
  /** Post-test probability of disease if the test is NEGATIVE (= 1 − NPV). */
  postNeg: number;
  freq: NaturalFrequencies;
}

export function derive(
  pretest: number,
  sens: number,
  spec: number,
  N = 1000,
): Derived {
  const { lrPos, lrNeg } = likelihoodRatios(sens, spec);
  return {
    pretest,
    sens,
    spec,
    lrPos,
    lrNeg,
    ppv: ppv(pretest, sens, spec),
    npv: npv(pretest, sens, spec),
    postNeg: probDiseaseGivenNeg(pretest, sens, spec),
    freq: naturalFrequencies(pretest, sens, spec, N),
  };
}
