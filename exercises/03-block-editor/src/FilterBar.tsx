import { BLOCK_TYPES } from "./types";
import type { FilterValue } from "./types";

interface FilterBarProps {
  value: FilterValue;
  onChange: (next: FilterValue) => void;
}

/** Chips across the top of the document. "All" is always first. */
export function FilterBar({ value, onChange }: FilterBarProps) {
  const options: FilterValue[] = ["all", ...BLOCK_TYPES];

  return (
    <div className="filter-bar">
      {options.map((option) => (
        <button
          className={option === value ? "chip chip--active" : "chip"}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
