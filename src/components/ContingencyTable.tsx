import type { Derived } from "../lib/compute";
import { largestRemainderRound } from "../lib/bayes";

export default function ContingencyTable({ d }: { d: Derived }) {
  const { truePos, falseNeg, falsePos, trueNeg, N } = d.freq;
  const [tp, fn, fp, tn] = largestRemainderRound(
    [truePos, falseNeg, falsePos, trueNeg],
    N,
  );
  const testPos = tp + fp;
  const testNeg = fn + tn;

  return (
    <figure className="viz">
      <figcaption className="viz__title">
        Out of {N} patients with this pre-test probability
      </figcaption>
      <table className="ctable">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Disease +</th>
            <th scope="col">Disease −</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Test +</th>
            <td className="cell cell--tp">
              {tp}
              <small>true +</small>
            </td>
            <td className="cell cell--fp">
              {fp}
              <small>false +</small>
            </td>
            <td className="cell cell--tot">{testPos}</td>
          </tr>
          <tr>
            <th scope="row">Test −</th>
            <td className="cell cell--fn">
              {fn}
              <small>false −</small>
            </td>
            <td className="cell cell--tn">
              {tn}
              <small>true −</small>
            </td>
            <td className="cell cell--tot">{testNeg}</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td className="cell cell--tot">{tp + fn}</td>
            <td className="cell cell--tot">{fp + tn}</td>
            <td className="cell cell--tot">{N}</td>
          </tr>
        </tbody>
      </table>
      <p className="viz__note">
        Of <strong>{testPos}</strong> with a positive test, <strong>{tp}</strong>{" "}
        truly have disease (PPV). Of <strong>{testNeg}</strong> with a negative
        test, <strong>{tn}</strong> are truly disease-free (NPV).
      </p>
    </figure>
  );
}
