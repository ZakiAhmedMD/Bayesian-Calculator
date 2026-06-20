import { describe, it, expect } from "vitest";
import { tests, sequences, testById, testsByDiagnosis } from "./schema";

// schema.ts runs DataFile.parse() at import time, so a malformed dataset would
// throw before these tests even run. They lock the invariants the UI relies on.
describe("diagnoses dataset", () => {
  it("loads and validates at least one test", () => {
    expect(tests.length).toBeGreaterThan(0);
  });

  it("stores every sens/spec as a fraction in (0, 1)", () => {
    for (const t of tests) {
      expect(t.sensitivity).toBeGreaterThan(0);
      expect(t.sensitivity).toBeLessThan(1);
      expect(t.specificity).toBeGreaterThan(0);
      expect(t.specificity).toBeLessThan(1);
    }
  });

  it("gives every entry a verifiable citation (source quote + reference)", () => {
    for (const t of tests) {
      expect(t.citation.reference.length).toBeGreaterThan(0);
      expect(t.citation.sourceQuote.length).toBeGreaterThan(0);
    }
  });

  it("resolves every sequence step to an existing test", () => {
    for (const seq of sequences) {
      for (const id of seq.steps) {
        expect(testById(id)).toBeDefined();
      }
    }
  });

  it("groups tests by diagnosis", () => {
    expect(testsByDiagnosis().size).toBeGreaterThan(0);
  });
});
