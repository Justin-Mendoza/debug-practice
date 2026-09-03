import type { PageNode } from "./types";

/** Three levels deep on purpose — depth 3 is where traversal bugs show up. */
export const TREE: PageNode[] = [
  {
    id: "eng",
    title: "Engineering",
    icon: "⚙️",
    children: [
      {
        id: "eng-onboarding",
        title: "Onboarding",
        icon: "🧭",
        children: [
          { id: "eng-onboarding-env", title: "Dev environment", icon: "💻", children: [] },
          { id: "eng-onboarding-week", title: "Your first week", icon: "📅", children: [] },
        ],
      },
      {
        id: "eng-architecture",
        title: "Architecture",
        icon: "🏗️",
        children: [
          { id: "eng-architecture-data", title: "Data model", icon: "🗃️", children: [] },
          { id: "eng-architecture-sync", title: "Sync protocol", icon: "🔄", children: [] },
        ],
      },
    ],
  },
  {
    id: "product",
    title: "Product",
    icon: "🚀",
    children: [
      {
        id: "product-roadmap",
        title: "Roadmap",
        icon: "🗺️",
        children: [{ id: "product-roadmap-q3", title: "Q3 bets", icon: "🎯", children: [] }],
      },
      { id: "product-research", title: "User research", icon: "🔍", children: [] },
    ],
  },
  {
    id: "design",
    title: "Design",
    icon: "🎨",
    children: [
      {
        id: "design-system",
        title: "Design system",
        icon: "🧩",
        children: [{ id: "design-system-color", title: "Color tokens", icon: "🌈", children: [] }],
      },
    ],
  },
];
