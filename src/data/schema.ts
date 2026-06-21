import { z } from "zod";
import raw from "./diagnoses.json";

/**
 * Schema, types, and startup validation for the diagnostic-test dataset.
 *
 * Sensitivity/specificity are stored as FRACTIONS in the open interval (0, 1).
 * The `.gt(0).lt(1)` bound both enforces the fraction convention (catching the
 * #1 data-entry bug: typing 95 instead of 0.95) and, by excluding exactly 0/1,
 * keeps likelihood ratios finite at the data layer.
 */

export const ConfidenceInterval = z.object({
  sensLow: z.number().gt(0).lte(1),
  sensHigh: z.number().gt(0).lte(1),
  specLow: z.number().gt(0).lte(1),
  specHigh: z.number().gt(0).lte(1),
});

export const Citation = z.object({
  reference: z.string().min(1),
  doi: z.string().optional(),
  pmid: z.string().optional(),
  url: z.string().optional(),
  /** Verbatim sentence from the source containing the numbers — for fast verification. */
  sourceQuote: z.string().min(1),
  /** Assay / population / threshold / reference-standard context. */
  context: z.string().min(1),
  notes: z.string().optional(),
});

export const TestEntry = z.object({
  id: z.string().min(1),
  diagnosis: z.string().min(1),
  testName: z.string().min(1),
  sensitivity: z.number().gt(0).lt(1),
  specificity: z.number().gt(0).lt(1),
  ci: ConfidenceInterval.optional(),
  condition: z.string().optional(),
  /** A sensible default pre-test probability to anchor the slider when selected. */
  typicalPretest: z.number().gte(0).lte(1).optional(),
  /** False until a clinician verifies the value against the cited source. */
  verified: z.boolean(),
  citation: Citation,
});

export const SequencePreset = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  diagnosis: z.string().min(1),
  /** Ordered list of test ids, referencing entries in `tests`. */
  steps: z.array(z.string().min(1)).min(2),
  stopNote: z.string().optional(),
  independenceNote: z.string().optional(),
});

export const DataFile = z
  .object({
    version: z.number(),
    lastUpdated: z.string(),
    tests: z.array(TestEntry).min(1),
    sequences: z.array(SequencePreset).default([]),
  })
  .superRefine((file, ctx) => {
    const ids = new Set<string>();
    file.tests.forEach((t, i) => {
      if (ids.has(t.id)) {
        ctx.addIssue({
          code: "custom",
          message: `duplicate test id "${t.id}"`,
          path: ["tests", i, "id"],
        });
      }
      ids.add(t.id);
    });
    file.sequences.forEach((seq, si) => {
      seq.steps.forEach((stepId, k) => {
        if (!ids.has(stepId)) {
          ctx.addIssue({
            code: "custom",
            message: `sequence "${seq.id}" references unknown test id "${stepId}"`,
            path: ["sequences", si, "steps", k],
          });
        }
      });
    });
  });

export type ConfidenceInterval = z.infer<typeof ConfidenceInterval>;
export type Citation = z.infer<typeof Citation>;
export type TestEntry = z.infer<typeof TestEntry>;
export type SequencePreset = z.infer<typeof SequencePreset>;
export type DiagnosesData = z.infer<typeof DataFile>;

/**
 * Validate the data file at module load. A malformed hand-edit throws a clear,
 * path-prefixed error here rather than silently producing NaN in the UI.
 */
export const data: DiagnosesData = DataFile.parse(raw);
export const tests = data.tests;
export const sequences = data.sequences;

/** Whether every shipped test entry has been clinician-verified. */
export const allVerified = tests.every((t) => t.verified);

/** Tests grouped by diagnosis (insertion order preserved), for the picker. */
export function testsByDiagnosis(): Map<string, TestEntry[]> {
  const map = new Map<string, TestEntry[]>();
  for (const t of tests) {
    const list = map.get(t.diagnosis) ?? [];
    list.push(t);
    map.set(t.diagnosis, list);
  }
  return map;
}

export const testById = (id: string): TestEntry | undefined =>
  tests.find((t) => t.id === id);
