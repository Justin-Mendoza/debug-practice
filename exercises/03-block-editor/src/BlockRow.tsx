import { memo } from "react";
import type { Block } from "./types";

interface BlockRowProps {
  block: Block;
  onToggle: (id: string) => void;
}

/**
 * Memoized because a document can run to thousands of blocks and re-rendering
 * every row on every keystroke was showing up in profiles. A row only needs to
 * re-render when its own block changes.
 */
export const BlockRow = memo(function BlockRow({
  block,
  onToggle,
}: BlockRowProps) {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as "h1" | "h2" | "h3";
      return <Tag className="block block--heading">{block.text}</Tag>;
    }

    case "paragraph":
      return <p className="block block--paragraph">{block.text}</p>;

    case "todo":
      return (
        <label className="block block--todo">
          <input
            type="checkbox"
            checked={block.checked}
            onChange={() => onToggle(block.id)}
          />
          <span
            className={
              block.checked ? "todo__text todo__text--done" : "todo__text"
            }
          >
            {block.text}
          </span>
        </label>
      );

    case "callout":
      return (
        <aside className="block block--callout">
          <span className="callout__emoji">{block.emoji}</span>
          <span>{block.text}</span>
        </aside>
      );

    case "divider":
      return <hr className="block block--divider" />;

    default:
      return null;
  }
});
