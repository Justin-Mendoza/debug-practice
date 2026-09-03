import { useState } from "react";
import { PageDetail } from "./PageDetail";
import { TreeRow } from "./TreeRow";
import { TREE } from "./data";
import { findNode, flattenTree, searchTree } from "./tree";

export function App() {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(["eng"]));
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const isSearching = query.trim() !== "";

  // While searching, every branch is forced open — otherwise a match inside a
  // collapsed page would be invisible.
  const rows = isSearching
    ? searchTree(TREE, query)
    : flattenTree(TREE, expanded);

  const selectedNode =
    selectedId === null ? undefined : findNode(TREE, selectedId);

  function handleToggleExpand(id: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <input
          className="sidebar__search"
          placeholder="Search all pages…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="tree">
          {rows.map((row) => (
            <TreeRow
              key={row.node.id}
              row={row}
              isExpanded={isSearching || expanded.has(row.node.id)}
              isSelected={row.node.id === selectedId}
              onToggleExpand={handleToggleExpand}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        {rows.length === 0 && (
          <p className="empty">Nothing matches “{query}”.</p>
        )}
      </aside>

      <main className="main">
        {selectedId !== null ? (
          <PageDetail node={selectedNode} />
        ) : (
          <section className="detail detail--empty">
            <p>Select a page from the tree.</p>
          </section>
        )}
      </main>
    </div>
  );
}
