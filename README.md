# Bayesian Calculator

An interactive **diagnostic-reasoning teaching tool** for internal medicine
residents and interns. Pick a diagnosis and test, set your **pre-test
probability** on a slider with verbal confidence anchors, and watch the Bayesian
update unfold — post-test probability, **PPV**, and **NPV** — across four
complementary visualizations. Supports **sequential testing** (chaining tests so
one result's post-test probability becomes the next's prior).

> ⚠️ **Educational tool only.** Sensitivity and specificity depend on the assay,
> population, threshold, and reference standard used. Every value must be
> verified against its cited source by faculty before teaching use, and nothing
> here should drive direct patient-care decisions.

## What it teaches

- **One slider drives both branches.** PPV is just the post-test probability if
  the test is _positive_; `1 − NPV` is the post-test probability if it's
  _negative_. The same pre-test probability produces both.
- **Likelihood ratios** turn sensitivity/specificity into how much a result
  moves the odds.
- **Natural frequencies** (a 2×2 table and a 100-patient icon array) make the
  probabilities concrete.
- **The Fagan nomogram** — the classic evidence-based-medicine construction.
- **Sequential testing** — how repeated tests march the probability toward 0 or
  1, and the conditional-independence assumption behind naive chaining.

## Tech stack

React 19 + Vite 8 + TypeScript, with a tiny dependency-free math core
(`src/lib/bayes.ts`) and Zod-validated data. Bespoke SVG/HTML visualizations
(no charting library). Deployed as a static site on GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173/Bayesian-Calculator/
npm test           # Vitest unit + render tests
npm run typecheck
npm run build      # type-check + production build to dist/
```

Requires Node ≥ 22.12 (or ≥ 20.19).

## Project layout

```
src/
  lib/bayes.ts          Pure Bayesian math (the correctness core) + tests
  lib/compute.ts        Derives all display values from (pre-test, test)
  lib/confidenceBands.ts Verbal slider anchors
  data/diagnoses.json   The cited test dataset  <- clinicians edit this
  data/schema.ts        Zod schema + startup validation
  components/           Slider, results, the four visuals, sequence panel, footer
```

## Editing the test data (for clinicians)

All test data lives in [`src/data/diagnoses.json`](src/data/diagnoses.json). To
add or correct an entry, copy an existing block and fill it in:

```json
{
  "id": "unique-id",
  "diagnosis": "Heart failure",
  "testName": "BNP",
  "setting": "Emergency department",
  "sensitivity": 0.95,
  "specificity": 0.63,
  "ci": { "sensLow": 0.93, "sensHigh": 0.96, "specLow": 0.6, "specHigh": 0.66 },
  "condition": "Acute dyspnea in the emergency department",
  "typicalPretest": 0.4,
  "verified": false,
  "citation": {
    "reference": "Author A, et al. Journal. Year;vol:pages.",
    "doi": "10.xxxx/xxxxx",
    "pmid": "12345678",
    "url": "https://doi.org/10.xxxx/xxxxx",
    "sourceQuote": "Paste the exact sentence reporting the numbers.",
    "context": "Assay, population, threshold, reference standard.",
    "notes": "Anything a learner or verifier should know."
  }
}
```

Notes:

- `sensitivity` / `specificity` are **fractions strictly between 0 and 1** (use
  `0.95`, never the percent `95`).
- `setting` is the care setting the accuracy data came from, one of
  `"Emergency department"`, `"Inpatient/ICU"`, `"Outpatient"`, or `"Screening"`.
  The app defaults to **acute only** (ED + inpatient/ICU) for admitting teams;
  pick the setting that matches the **source study population**, not where the
  test could theoretically be used.
- `verified` defaults to `false`; flip it to `true` only after faculty
  verification.

Rules enforced automatically (the app refuses to start otherwise): sens/spec in
`(0, 1)`; a valid `setting`; a `citation` with `reference`, `sourceQuote`, and
`context`; and a `verified` boolean.

### Sequence presets

Named diagnostic pathways live in the `sequences` array. Each lists test `id`s in
order (every id must exist in `tests`):

```json
{
  "id": "pe-workup",
  "name": "PE: D-dimer -> CTPA",
  "diagnosis": "Pulmonary embolism",
  "steps": ["pe-ddimer", "pe-cta"],
  "stopNote": "When the real-world algorithm would stop.",
  "independenceNote": "Whether treating the tests as independent is reasonable."
}
```

### The verification workflow

Every shipped entry is `verified: false` and shows an amber **"Unverified"**
badge in the app. Faculty review each entry against its linked source, then flip
`verified` to `true` (optionally appending verifier initials + date to
`notes`). Commit the change — GitHub Pages redeploys automatically.

## Deploy (GitHub Pages)

A GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
builds and publishes on every push to `main`.

One-time setup: **Settings -> Pages -> Build and deployment -> Source = "GitHub
Actions."** The site then publishes to
`https://zakiahmedmd.github.io/Bayesian-Calculator/`.

The Vite `base` in [`vite.config.ts`](vite.config.ts) must match the repository
name exactly (`/Bayesian-Calculator/`); otherwise assets 404 and the page is
blank.

## Data provenance

Seed entries were sourced from the literature using PubMed/Consensus, preferring
systematic reviews and meta-analyses. Each entry carries a verbatim source quote
and DOI/PMID so any number can be checked in seconds. **The numbers are
illustrative until faculty-verified.**
