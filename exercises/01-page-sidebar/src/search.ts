import type { Page } from "./types";

/**
 * Substring match on the title. Deliberately loose: the sidebar is a filter,
 * not a search engine, so partial words should keep matching as you type.
 */
export function filterPages(pages: Page[], query: string): Page[] {
  const trimmed = query.trim();

  // An empty box means "no filter", not "no results".
  if (trimmed === "") {
    return pages;
  }

  return pages.filter((page) => page.title.toLowerCase().includes(trimmed));
}

/**
 * Newest first. Archived pages sink to the bottom regardless of date, since
 * they are reference material rather than live work.
 */
export function sortPages(pages: Page[]): Page[] {
  return [...pages].sort((a, b) => {
    if (a.archived !== b.archived) {
      return a.archived ? 1 : -1;
    }
    return b.lastEditedAt.localeCompare(a.lastEditedAt);
  });
}
