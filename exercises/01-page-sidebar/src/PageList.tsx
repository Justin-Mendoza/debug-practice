import type { Page } from "./types";

interface PageListProps {
  pages: Page[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/**
 * The sidebar list. Archived pages get their own muted row: they are still
 * selectable, but we drop the icon emphasis so live work reads first.
 */
export function PageList({ pages, selectedId, onSelect }: PageListProps) {
  if (pages.length === 0) {
    return <p className="empty">No pages match that search.</p>;
  }

  return (
    <ul className="page-list">
      {pages.map((page) => {
        const isSelected = page.id === selectedId;
        const className = isSelected
          ? "page-row page-row--selected"
          : "page-row";

        if (page.archived) {
          return (
            <li key={page.id}>
              <button
                className={`${className} page-row--archived`}
                onClick={() => onSelect(page.id)}
              >
                <span className="page-row__icon">{page.icon}</span>
                <span className="page-row__title">{page.title}</span>
                <span className="page-row__badge">archived</span>
              </button>
            </li>
          );
        }

        (
          <li key={page.id}>
            <button className={className} onClick={() => onSelect(page.id)}>
              <span className="page-row__icon">{page.icon}</span>
              <span className="page-row__title">{page.title}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
