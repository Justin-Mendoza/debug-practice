import { useMemo, useState } from "react";
import { PageDetail } from "./PageDetail";
import { PageList } from "./PageList";
import { PAGES } from "./data";
import { filterPages, sortPages } from "./search";

export function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Sorting is stable across keystrokes, so filter the sorted list rather than
  // re-sorting whatever the filter happens to return.
  const sorted = useMemo(() => sortPages(PAGES), []);
  const visible = useMemo(() => filterPages(sorted, query), [sorted, query]);

  const selected = PAGES.find((page) => page.id === selectedId) ?? null;

  return (
    <div className="app">
      <aside className="sidebar">
        <header className="sidebar__header">
          <h2>Workspace</h2>
          <p className="sidebar__count">{PAGES.length} pages</p>
        </header>

        <input
          className="sidebar__search"
          placeholder="Search pages…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <PageList pages={visible} selectedId={selectedId} onSelect={setSelectedId} />
      </aside>

      <main className="main">
        <PageDetail page={selected} />
      </main>
    </div>
  );
}
