import { STATUS_LABELS, STATUSES } from "./types";
import type { FilterValue } from "./types";

interface FilterChipsProps {
  value: FilterValue;
  onChange: (next: FilterValue) => void;
}

/** Status chips across the top. "All" is always first. */
export function FilterChips({ value, onChange }: FilterChipsProps) {
  const options: FilterValue[] = ["all", ...STATUSES];

  return (
    <div className="chips">
      {options.map((option) => (
        <button
          key={option}
          className={option === value ? "chip chip--active" : "chip"}
          onClick={() => onChange(option)}
        >
          {option === "all" ? "All" : STATUS_LABELS[option]}
        </button>
      ))}
    </div>
  );
}
