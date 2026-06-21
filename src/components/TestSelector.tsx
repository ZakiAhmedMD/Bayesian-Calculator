import { useMemo } from "react";
import { testsByDiagnosis, type TestEntry } from "../data/schema";

interface Props {
  selectedId: string;
  onSelect: (test: TestEntry) => void;
}

export default function TestSelector({ selectedId, onSelect }: Props) {
  const grouped = useMemo(() => testsByDiagnosis(), []);

  return (
    <div className="selector">
      <label htmlFor="test" className="selector__label">
        Diagnosis &amp; test
      </label>
      <select
        id="test"
        className="selector__select"
        value={selectedId}
        onChange={(e) => {
          for (const list of grouped.values()) {
            const found = list.find((t) => t.id === e.target.value);
            if (found) onSelect(found);
          }
        }}
      >
        {[...grouped.entries()].map(([diagnosis, list]) => (
          <optgroup key={diagnosis} label={diagnosis}>
            {list.map((t) => (
              <option key={t.id} value={t.id}>
                {t.testName}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
