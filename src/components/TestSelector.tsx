import { useEffect, useMemo, useState } from "react";
import {
  testsByDiagnosis,
  isAcute,
  settingShort,
  type TestEntry,
} from "../data/schema";

interface Props {
  selectedId: string;
  onSelect: (test: TestEntry) => void;
}

export default function TestSelector({ selectedId, onSelect }: Props) {
  // Admitting teams are the primary audience → default to acute-care tests.
  const [acuteOnly, setAcuteOnly] = useState(true);

  const grouped = useMemo(
    () => testsByDiagnosis(acuteOnly ? isAcute : undefined),
    [acuteOnly],
  );
  const visible = useMemo(() => [...grouped.values()].flat(), [grouped]);

  // If the current selection is filtered out, fall back to the first visible test.
  useEffect(() => {
    if (visible.length && !visible.some((t) => t.id === selectedId)) {
      onSelect(visible[0]);
    }
  }, [visible, selectedId, onSelect]);

  return (
    <div className="selector">
      <div className="selector__head">
        <label htmlFor="test" className="selector__label">
          Diagnosis &amp; test
        </label>
        <label className="selector__toggle">
          <input
            type="checkbox"
            checked={acuteOnly}
            onChange={(e) => setAcuteOnly(e.target.checked)}
          />
          Acute care only <span className="muted">(ED / inpatient·ICU)</span>
        </label>
      </div>
      <select
        id="test"
        className="selector__select"
        value={selectedId}
        onChange={(e) => {
          const found = visible.find((t) => t.id === e.target.value);
          if (found) onSelect(found);
        }}
      >
        {[...grouped.entries()].map(([diagnosis, list]) => (
          <optgroup key={diagnosis} label={diagnosis}>
            {list.map((t) => (
              <option key={t.id} value={t.id}>
                {t.testName} · {settingShort(t.setting)}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
