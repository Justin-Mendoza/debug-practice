import { useEffect, useState } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { describeNode, findPath } from "./tree";
import { TREE } from "./data";
import type { PageNode } from "./types";

interface PageDetailProps {
  node: PageNode;
}

export function PageDetail({ node }: PageDetailProps) {
  const [summary, setSummary] = useState<{ text: string } | null>(null);

  const path = findPath(TREE, node.id) ?? [];
  const options = { includeCounts: true };

  // Recompute the summary whenever the page (or the summary options) change.
  useEffect(() => {
    setSummary({ text: describeNode(node, options) });
  }, [node, options]);

  return (
    <section className="detail">
      <Breadcrumb path={path} />

      <h1 className="detail__title">
        <span className="detail__icon">{node.icon}</span>
        {node.title}
      </h1>

      <p className="detail__summary">{summary?.text ?? "…"}</p>

      <p className="detail__body">
        This page has {node.children.length} direct sub-page
        {node.children.length === 1 ? "" : "s"}.
      </p>
    </section>
  );
}
