import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

// A render smoke test: exercises the whole component tree (slider, results,
// all four visuals, citation footer) and catches render-time crashes that the
// type checker cannot.
describe("App", () => {
  it("renders the core UI without crashing", () => {
    const html = renderToStaticMarkup(<App />);
    expect(html).toContain("Bayesian Calculator");
    expect(html).toContain("Pre-test probability");
    expect(html).toContain("PPV");
    expect(html).toContain("Fagan nomogram");
    // first seeded test is PE D-dimer
    expect(html).toContain("D-dimer");
    // seed data is unverified → the gate badge must be visible
    expect(html).toContain("Unverified");
  });

  it("wires the math through to the UI for the default state", () => {
    // Default = PE D-dimer (sens 0.97, spec 0.41) at its typicalPretest of 15%.
    // Positive → PPV ≈ 22.5%; negative → 1 − NPV ≈ 1.3% (a strong rule-out).
    const html = renderToStaticMarkup(<App />);
    expect(html).toContain("22.5%");
    expect(html).toContain("1.3%");
  });
});
