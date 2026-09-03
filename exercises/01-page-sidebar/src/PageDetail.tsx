import { formatEditedAt } from "./format";
import type { Page } from "./types";

interface PageDetailProps {
  page: Page | null;
}

/** The right-hand pane. Renders a placeholder until something is selected. */
export function PageDetail({ page }: PageDetailProps) {
  if (page === null) {
    return (
      <section className="detail detail--empty">
        <p>Select a page to read it.</p>
      </section>
    );
  }

  return (
    <section className="detail">
      <h1 className="detail__title">
        <span className="detail__icon">{page.icon}</span>
        {page.title}
      </h1>

      <p className="detail__meta">
        Edited by {page.lastEditedBy} · {formatEditedAt(page.lastEditedAt)}
      </p>

      <p className="detail__tags">
        Tags: {page.tags.join(", ")}
      </p>

      {page.archived && (
        <p className="detail__notice">This page is archived and read-only.</p>
      )}

      <p className="detail__body">{page.body}</p>
    </section>
  );
}
