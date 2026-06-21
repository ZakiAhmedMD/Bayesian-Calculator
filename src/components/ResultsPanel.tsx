import type { TestEntry } from "../data/schema";
import type { Derived } from "../lib/compute";
import { pct, lr } from "../lib/format";

interface Props {
  test: TestEntry;
  d: Derived;
}

function ciText(
  lowHigh: { low: number; high: number } | undefined,
): string | null {
  if (!lowHigh) return null;
  return `95% CI ${pct(lowHigh.low)}–${pct(lowHigh.high)}`;
}

export default function ResultsPanel({ test, d }: Props) {
  const sensCi = test.ci
    ? { low: test.ci.sensLow, high: test.ci.sensHigh }
    : undefined;
  const specCi = test.ci
    ? { low: test.ci.specLow, high: test.ci.specHigh }
    : undefined;

  return (
    <section className="results" aria-label="Results">
      <div className="results__branches">
        <div className="branch branch--pos">
          <div className="branch__tag">If test POSITIVE</div>
          <div className="branch__big">{pct(d.ppv)}</div>
          <div className="branch__sub">
            post-test probability of disease
            <br />
            <strong>PPV</strong> = {pct(d.ppv)} · LR+ {lr(d.lrPos)}
          </div>
        </div>
        <div className="branch branch--neg">
          <div className="branch__tag">If test NEGATIVE</div>
          <div className="branch__big">{pct(d.postNeg)}</div>
          <div className="branch__sub">
            post-test probability of disease
            <br />
            <strong>NPV</strong> = {pct(d.npv)} · LR− {lr(d.lrNeg)}
          </div>
        </div>
      </div>

      <div className="results__chars">
        <div className="char">
          <span className="char__key">Sensitivity</span>
          <span className="char__val">{pct(d.sens)}</span>
          {sensCi && <span className="char__ci">{ciText(sensCi)}</span>}
        </div>
        <div className="char">
          <span className="char__key">Specificity</span>
          <span className="char__val">{pct(d.spec)}</span>
          {specCi && <span className="char__ci">{ciText(specCi)}</span>}
        </div>
        {!test.verified && (
          <span className="badge badge--warn" title="This value has not yet been verified by faculty against the cited source.">
            ⚠ Unverified — pending faculty review
          </span>
        )}
      </div>

      {test.citation.context && (
        <p className="results__context">{test.citation.context}</p>
      )}
    </section>
  );
}
