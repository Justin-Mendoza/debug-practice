import { countDescendants } from "./tree";
import type { FlatRow } from "./types";

interface TreeRowProps {
  row: FlatRow;
  isExpanded: boolean;
  isSelected: boolean;
  onToggleExpand: (id: string) => void;
  onSelect: (id: string) => void;
}

export function TreeRow({ row, isExpanded, isSelected, onToggleExpand, onSelect }: TreeRowProps) {
  const { node, depth } = row;
  const hasChildren = node.children.length > 0;
  const descendants = countDescendants(node);

  return (
    <div
      className={isSelected ? "tree-row tree-row--selected" : "tree-row"}
      style={{ paddingLeft: 8 + depth * 16 }}
    >
      <button
        className="tree-row__caret"
        onClick={() => onToggleExpand(node.id)}
        disabled={!hasChildren}
        aria-label={isExpanded ? "Collapse" : "Expand"}
      >
        {hasChildren ? (isExpanded ? "▾" : "▸") : "·"}
      </button>

      <button className="tree-row__label" onClick={() => onSelect(node.id)}>
        <span className="tree-row__icon">{node.icon}</span>
        <span className="tree-row__title">{node.title}</span>
      </button>

      {descendants > 0 && <span className="tree-row__badge">contains {descendants} pages</span>}
    </div>
  );
}
