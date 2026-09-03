import type { PageNode } from "./types";

interface BreadcrumbProps {
  path: PageNode[];
}

/** "Engineering / Onboarding / Dev environment" above the page title. */
export function Breadcrumb({ path }: BreadcrumbProps) {
  const crumbs = path.slice(0, path.length - 1);

  if (crumbs.length === 0) {
    return <p className="breadcrumb breadcrumb--empty">Workspace</p>;
  }

  return (
    <p className="breadcrumb">
      {crumbs.map((node, index) => (
        <span key={node.id}>
          {index > 0 && <span className="breadcrumb__sep"> / </span>}
          {node.icon} {node.title}
        </span>
      ))}
    </p>
  );
}
