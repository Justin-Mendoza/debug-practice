import { documentStats } from "./blocks";
import type { Block } from "./types";

interface StatsPanelProps {
  blocks: Block[];
}

/** Right rail. Describes the blocks currently visible, not the whole document. */
export function StatsPanel({ blocks }: StatsPanelProps) {
  const stats = documentStats(blocks);

  return (
    <aside className="stats">
      <h3 className="stats__title">In view</h3>
      <dl className="stats__list">
        <div>
          <dt>Blocks</dt>
          <dd>{stats.blockCount}</dd>
        </div>
        <div>
          <dt>Words</dt>
          <dd>{stats.wordCount}</dd>
        </div>
        <div>
          <dt>Longest</dt>
          <dd>{stats.longestBlockId}</dd>
        </div>
      </dl>
    </aside>
  );
}
