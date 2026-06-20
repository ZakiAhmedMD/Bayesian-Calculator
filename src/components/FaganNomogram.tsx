import type { Derived } from "../lib/compute";
import { clamp } from "../lib/bayes";
import { pct, lr as fmtLr } from "../lib/format";

/*
 * Fagan nomogram.
 *
 * Three vertical axes — pre-test probability (left), likelihood ratio (centre),
 * post-test probability (right) — such that a STRAIGHT LINE from a pre-test
 * value through the LR reads off the post-test value. This works because, in
 * log-odds space, logit(post) = logit(pre) + ln(LR).
 *
 * For the line's crossing point on the (mid-positioned) LR axis to depend only
 * on the LR and not on the pre-test value, the pre-test axis must be oriented
 * OPPOSITE to the post-test axis. With
 *     yPre(p)  = cy − S·logit(p)        (high probability at the TOP-left)
 *     yPost(q) = cy + S·logit(q)        (high probability at the BOTTOM-right)
 * the midpoint is  cy + (S/2)·ln(LR)  — exactly the LR axis mapping. QED.
 */

const W = 360;
const H = 400;
const X_PRE = 70;
const X_POST = 290; // LR axis sits at the midpoint, (70+290)/2 = 180
const X_LR = (X_PRE + X_POST) / 2;
const TOP = 44;
const BOTTOM = 356;
const CY = (TOP + BOTTOM) / 2;
const HALF = (BOTTOM - TOP) / 2;

const P_MIN = 0.001;
const P_MAX = 0.999;
const LR_MIN = 0.001;
const LR_MAX = 1000;

const logit = (p: number) => Math.log(p / (1 - p));
const S = HALF / logit(P_MAX); // px per unit of log-odds

const yPre = (p: number) => CY - S * logit(clamp(p, P_MIN, P_MAX));
const yPost = (q: number) => CY + S * logit(clamp(q, P_MIN, P_MAX));
const yLr = (v: number) => CY + (S / 2) * Math.log(clamp(v, LR_MIN, LR_MAX));

const PROB_TICKS = [
  0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9,
  0.95, 0.98, 0.99, 0.995, 0.998, 0.999,
];
const LR_TICKS = [0.001, 0.01, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 1000];

const probLabel = (p: number) => {
  const v = p * 100;
  return v < 1 || v > 99 ? v.toFixed(1) : String(Math.round(v));
};
const lrLabel = (v: number) => (v < 1 ? String(v) : String(Math.round(v)));

function Axis({
  x,
  ticks,
  yFor,
  label,
  align,
}: {
  x: number;
  ticks: number[];
  yFor: (v: number) => number;
  label: (v: number) => string;
  align: "left" | "right";
}) {
  const textX = align === "left" ? x - 9 : x + 9;
  const anchor = align === "left" ? "end" : "start";
  return (
    <g>
      <line x1={x} y1={TOP} x2={x} y2={BOTTOM} className="nomo__axis" />
      {ticks.map((v) => {
        const y = yFor(v);
        return (
          <g key={v}>
            <line x1={x - 4} y1={y} x2={x + 4} y2={y} className="nomo__tick" />
            <text x={textX} y={y + 3} textAnchor={anchor} className="nomo__ticklabel">
              {label(v)}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export default function FaganNomogram({ d }: { d: Derived }) {
  const prePoint = { x: X_PRE, y: yPre(d.pretest) };
  const posPost = { x: X_POST, y: yPost(d.ppv) };
  const negPost = { x: X_POST, y: yPost(d.postNeg) };
  // LR dot at the geometric midpoint guarantees it lies on the drawn line.
  const posMid = { x: X_LR, y: (prePoint.y + posPost.y) / 2 };
  const negMid = { x: X_LR, y: (prePoint.y + negPost.y) / 2 };

  return (
    <figure className="viz">
      <figcaption className="viz__title">Fagan nomogram</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="nomo" role="img" aria-label="Fagan nomogram">
        <text x={X_PRE} y={26} textAnchor="middle" className="nomo__axistitle">
          Pre-test %
        </text>
        <text x={X_LR} y={26} textAnchor="middle" className="nomo__axistitle">
          LR
        </text>
        <text x={X_POST} y={26} textAnchor="middle" className="nomo__axistitle">
          Post-test %
        </text>

        <Axis x={X_PRE} ticks={PROB_TICKS} yFor={yPre} label={probLabel} align="left" />
        <Axis x={X_LR} ticks={LR_TICKS} yFor={yLr} label={lrLabel} align="right" />
        <Axis x={X_POST} ticks={PROB_TICKS} yFor={yPost} label={probLabel} align="right" />

        {/* Negative branch (drawn first, underneath) */}
        <line
          x1={prePoint.x}
          y1={prePoint.y}
          x2={negPost.x}
          y2={negPost.y}
          className="nomo__line nomo__line--neg"
        />
        {/* Positive branch */}
        <line
          x1={prePoint.x}
          y1={prePoint.y}
          x2={posPost.x}
          y2={posPost.y}
          className="nomo__line nomo__line--pos"
        />

        <circle cx={prePoint.x} cy={prePoint.y} r={4} className="nomo__dot" />
        <circle cx={posMid.x} cy={posMid.y} r={3.5} className="nomo__dot nomo__dot--pos" />
        <circle cx={negMid.x} cy={negMid.y} r={3.5} className="nomo__dot nomo__dot--neg" />
        <circle cx={posPost.x} cy={posPost.y} r={4} className="nomo__dot nomo__dot--pos" />
        <circle cx={negPost.x} cy={negPost.y} r={4} className="nomo__dot nomo__dot--neg" />
      </svg>
      <p className="viz__note">
        <span className="key key--pos">●</span> positive → {pct(d.ppv)} (LR+{" "}
        {fmtLr(d.lrPos)}) &nbsp;
        <span className="key key--neg">●</span> negative → {pct(d.postNeg)} (LR−{" "}
        {fmtLr(d.lrNeg)})
      </p>
    </figure>
  );
}
