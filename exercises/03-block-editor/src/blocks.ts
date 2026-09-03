import type { Block, FilterValue } from "./types";

/** Not every block has text (a divider has nothing to say). */
export function textOf(block: Block): string {
  return block.type === "divider" ? "" : block.text;
}

export function matchesFilter(block: Block, filter: FilterValue): boolean {
  return filter === "all" || block.type === filter;
}

/** How many todos are ticked, and how many exist. Drives the header counter. */
export function todoProgress(blocks: Block[]): { done: number; total: number } {
  const todos = blocks.filter((block) => block.type === "todo");
  return {
    done: todos.filter((todo) => todo.checked).length,
    total: todos.length,
  };
}

export interface DocumentStats {
  blockCount: number;
  wordCount: number;
  longestBlockId: string;
}

/**
 * Summary shown in the right rail. Recomputed against whatever the filter is
 * currently showing, so the numbers describe what you can actually see.
 */
export function documentStats(blocks: Block[]): DocumentStats {
  const wordCount = blocks.reduce((total, block) => {
    const words = textOf(block).split(/\s+/).filter(Boolean);
    return total + words.length;
  }, 0);
  const longest = blocks.reduce((champion, block) =>
    textOf(block).length > textOf(champion).length ? block : champion,
  );

  return {
    blockCount: blocks.length,
    wordCount,
    longestBlockId: longest.id,
  };
}
