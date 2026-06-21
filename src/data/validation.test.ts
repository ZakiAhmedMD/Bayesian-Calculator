import { describe, it, expect } from "vitest";
import { TestEntry, DataFile } from "./schema";

const validEntry = {
  id: "x",
  diagnosis: "Disease",
  testName: "Test",
  sensitivity: 0.9,
  specificity: 0.8,
  verified: false,
  citation: { reference: "r", sourceQuote: "q", context: "c" },
};

describe("TestEntry validation", () => {
  it("accepts a well-formed entry", () => {
    expect(TestEntry.safeParse(validEntry).success).toBe(true);
  });

  it("rejects a percent typed instead of a fraction (95 not 0.95)", () => {
    expect(TestEntry.safeParse({ ...validEntry, sensitivity: 95 }).success).toBe(false);
  });

  it("rejects sensitivity of exactly 1 (would give an infinite LR)", () => {
    expect(TestEntry.safeParse({ ...validEntry, sensitivity: 1 }).success).toBe(false);
  });

  it("requires the verified flag", () => {
    const noVerified = {
      id: "x",
      diagnosis: "D",
      testName: "T",
      sensitivity: 0.9,
      specificity: 0.8,
      citation: { reference: "r", sourceQuote: "q", context: "c" },
    };
    expect(TestEntry.safeParse(noVerified).success).toBe(false);
  });

  it("requires a citation with a verbatim source quote", () => {
    const badCitation = {
      ...validEntry,
      citation: { reference: "r", context: "c" }, // missing sourceQuote
    };
    expect(TestEntry.safeParse(badCitation).success).toBe(false);
  });
});

describe("DataFile sequence integrity", () => {
  it("rejects a sequence step that references a missing test id", () => {
    const file = {
      version: 1,
      lastUpdated: "2026-01-01",
      tests: [validEntry],
      sequences: [
        { id: "s", name: "S", diagnosis: "D", steps: ["x", "does-not-exist"] },
      ],
    };
    expect(DataFile.safeParse(file).success).toBe(false);
  });
});
