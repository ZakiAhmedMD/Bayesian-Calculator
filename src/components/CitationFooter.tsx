import type { TestEntry } from "../data/schema";

export default function CitationFooter({ test }: { test: TestEntry }) {
  const c = test.citation;
  const doiHref = c.url || (c.doi ? `https://doi.org/${c.doi}` : undefined);

  return (
    <footer className="cite">
      <div className="cite__source">
        <h3 className="cite__heading">
          Source — {test.diagnosis}: {test.testName}
        </h3>
        <p className="cite__ref">{c.reference}</p>
        <blockquote className="cite__quote">“{c.sourceQuote}”</blockquote>
        <p className="cite__meta">
          {c.pmid && (
            <a
              href={`https://pubmed.ncbi.nlm.nih.gov/${c.pmid}/`}
              target="_blank"
              rel="noreferrer"
            >
              PubMed {c.pmid}
            </a>
          )}
          {c.doi && doiHref && (
            <>
              {c.pmid && " · "}
              <a href={doiHref} target="_blank" rel="noreferrer">
                doi:{c.doi}
              </a>
            </>
          )}
          {!test.verified && (
            <span className="badge badge--warn">⚠ Unverified — pending faculty review</span>
          )}
        </p>
        {c.notes && <p className="cite__notes">{c.notes}</p>}
      </div>

      <p className="cite__disclaimer">
        <strong>Educational tool only.</strong> Sensitivity and specificity depend
        on the assay, population, threshold, and reference standard used, and may
        differ at your institution. Every figure must be verified against its cited
        source before teaching use, and none of this should drive direct
        patient-care decisions.
      </p>
    </footer>
  );
}
