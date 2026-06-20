import { describe, it, expect } from "vitest";
import {
  oddsFromProb,
  probFromOdds,
  likelihoodRatios,
  postTestProb,
  ppv,
  probDiseaseGivenNeg,
  naturalFrequencies,
  sequentialUpdate,
  largestRemainderRound,
} from "./bayes";

describe("odds <-> probability", () => {
  it("round-trips", () => {
    for (const p of [0.01, 0.1, 0.25, 0.5, 0.75, 0.9, 0.99]) {
      expect(probFromOdds(oddsFromProb(p))).toBeCloseTo(p, 10);
    }
  });
  it("handles certainty", () => {
    expect(oddsFromProb(1)).toBe(Infinity);
    expect(probFromOdds(Infinity)).toBe(1);
    expect(oddsFromProb(0)).toBe(0);
    expect(probFromOdds(0)).toBe(0);
  });
});

describe("likelihood ratios", () => {
  it("computes LR+ and LR-", () => {
    const { lrPos, lrNeg } = likelihoodRatios(0.9, 0.8);
    expect(lrPos).toBeCloseTo(0.9 / 0.2, 10); // 4.5
    expect(lrNeg).toBeCloseTo(0.1 / 0.8, 10); // 0.125
  });
  it("perfect specificity → infinite LR+", () => {
    expect(likelihoodRatios(0.9, 1).lrPos).toBe(Infinity);
  });
  it("perfect sensitivity → LR- of 0", () => {
    expect(likelihoodRatios(1, 0.8).lrNeg).toBe(0);
  });
});

describe("the core teaching identity", () => {
  // PPV must equal the post-test probability after a POSITIVE result,
  // and 1 - NPV must equal the post-test probability after a NEGATIVE result.
  const cases = [
    { p: 0.1, sens: 0.95, spec: 0.41 },
    { p: 0.5, sens: 0.8, spec: 0.9 },
    { p: 0.3, sens: 0.99, spec: 0.6 },
    { p: 0.02, sens: 0.9, spec: 0.91 },
  ];
  for (const { p, sens, spec } of cases) {
    it(`PPV == postTestProb(p, LR+) for p=${p}, sens=${sens}, spec=${spec}`, () => {
      const { lrPos, lrNeg } = likelihoodRatios(sens, spec);
      expect(ppv(p, sens, spec)).toBeCloseTo(postTestProb(p, lrPos), 10);
      expect(probDiseaseGivenNeg(p, sens, spec)).toBeCloseTo(
        postTestProb(p, lrNeg),
        10,
      );
    });
  }
});

describe("PPV / NPV edge values", () => {
  it("pre-test 0 → PPV 0", () => {
    expect(ppv(0, 0.9, 0.9)).toBe(0);
  });
  it("perfect specificity → PPV 1 (no false positives)", () => {
    expect(ppv(0.2, 0.9, 1)).toBeCloseTo(1, 10);
  });
  it("perfect sensitivity → P(disease | negative) 0 (no false negatives)", () => {
    expect(probDiseaseGivenNeg(0.2, 1, 0.9)).toBeCloseTo(0, 10);
  });
});

describe("Gigerenzer mammography worked example", () => {
  // prevalence 1%, sensitivity 90%, specificity 91% → PPV ~9.2%
  it("matches the hand calculation", () => {
    const result = ppv(0.01, 0.9, 0.91);
    // 0.009 / (0.009 + 0.0891) = 0.09174...
    expect(result).toBeCloseTo(0.09174, 4);
  });
});

describe("natural frequencies", () => {
  it("cells sum to N and split correctly", () => {
    const f = naturalFrequencies(0.1, 0.95, 0.41, 1000);
    expect(f.diseased).toBeCloseTo(100, 10);
    expect(f.healthy).toBeCloseTo(900, 10);
    expect(f.truePos + f.falseNeg).toBeCloseTo(f.diseased, 10);
    expect(f.falsePos + f.trueNeg).toBeCloseTo(f.healthy, 10);
    expect(f.truePos + f.falseNeg + f.falsePos + f.trueNeg).toBeCloseTo(1000, 10);
  });
  it("TP/(TP+FP) reproduces PPV", () => {
    const f = naturalFrequencies(0.1, 0.95, 0.41, 1000);
    expect(f.truePos / (f.truePos + f.falsePos)).toBeCloseTo(
      ppv(0.1, 0.95, 0.41),
      10,
    );
  });
});

describe("sequential testing", () => {
  const a = { sensitivity: 0.9, specificity: 0.8, result: "pos" as const };
  const b = { sensitivity: 0.85, specificity: 0.95, result: "pos" as const };

  it("equals applying postTestProb step by step", () => {
    const traj = sequentialUpdate(0.2, [a, b]);
    const lrA = likelihoodRatios(a.sensitivity, a.specificity).lrPos;
    const lrB = likelihoodRatios(b.sensitivity, b.specificity).lrPos;
    const afterA = postTestProb(0.2, lrA);
    const afterB = postTestProb(afterA, lrB);
    expect(traj).toHaveLength(3);
    expect(traj[0]).toBe(0.2);
    expect(traj[1]).toBeCloseTo(afterA, 10);
    expect(traj[2]).toBeCloseTo(afterB, 10);
  });

  it("is order-independent under conditional independence", () => {
    const forward = sequentialUpdate(0.2, [a, b]);
    const backward = sequentialUpdate(0.2, [b, a]);
    expect(forward.at(-1)).toBeCloseTo(backward.at(-1)!, 10);
  });

  it("a negative then positive can return toward the start", () => {
    const traj = sequentialUpdate(0.3, [
      { sensitivity: 0.9, specificity: 0.9, result: "neg" },
      { sensitivity: 0.9, specificity: 0.9, result: "pos" },
    ]);
    // down then back up
    expect(traj[1]).toBeLessThan(traj[0]);
    expect(traj[2]).toBeGreaterThan(traj[1]);
  });
});

describe("largestRemainderRound", () => {
  it("rounds to integers that sum to the total", () => {
    const values = [95.4, 40.6, 5.5, 3.5]; // sums to 145
    const r = largestRemainderRound(values, 145);
    expect(r.reduce((a, b) => a + b, 0)).toBe(145);
    r.forEach((n) => expect(Number.isInteger(n)).toBe(true));
  });
  it("keeps a 1000-patient 2x2 summing to exactly 1000", () => {
    const f = naturalFrequencies(0.137, 0.912, 0.488, 1000);
    const rounded = largestRemainderRound(
      [f.truePos, f.falseNeg, f.falsePos, f.trueNeg],
      1000,
    );
    expect(rounded.reduce((a, b) => a + b, 0)).toBe(1000);
  });
});
