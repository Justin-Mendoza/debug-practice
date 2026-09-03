import { useCallback, useMemo, useState } from "react";
import { BlockRow } from "./BlockRow";
import { FilterBar } from "./FilterBar";
import { StatsPanel } from "./StatsPanel";
import { DOCUMENT } from "./data";
import { matchesFilter, todoProgress } from "./blocks";
import type { FilterValue } from "./types";

export function App() {
  const [blocks, setBlocks] = useState(DOCUMENT);
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo(
    () => blocks.filter((block) => matchesFilter(block, filter)),
    [blocks, filter],
  );

  // Progress is over the whole document, not the filtered view — hiding a todo
  // behind a filter shouldn't make it look like the work went away.
  const progress = todoProgress(blocks);

  // Stable identity so the memoized rows aren't re-rendered by a new function
  // on every keystroke. The functional update means we never need `blocks` in
  // the dependency array.
  const handleToggle = useCallback((id: string) => {
    setBlocks((current) => {
      const index = current.findIndex((block) => block.id === id);

      if (index === -1) {
        return current;
      }
      const target = current[index];

      if (target.type !== "todo") {
        return current;
      }

      const next = [...current];
      target.checked = !target.checked;

      return next;
    });
  }, []);

  return (
    <div className="app">
      <header className="doc-header">
        <h1 className="doc-header__title">Release checklist</h1>
        <p className="doc-header__progress">
          {progress.done} of {progress.total} done
        </p>
      </header>

      <FilterBar value={filter} onChange={setFilter} />

      <div className="doc-layout">
        <main className="doc">
          {visible.map((block) => (
            <BlockRow key={block.id} block={block} onToggle={handleToggle} />
          ))}
        </main>

        <StatsPanel blocks={visible} />
      </div>
    </div>
  );
}
