import type { Page } from "./types";

/**
 * The seed payload exactly as the pages API hands it back: untyped, because a
 * network response is untyped until someone asserts otherwise. In the real app
 * this is the JSON body of `GET /v1/pages`; here it is inlined so the exercise
 * runs with no server.
 */
const API_RESPONSE: unknown = [
  {
    id: "p1",
    title: "Roadmap 2026",
    icon: "🗺️",
    lastEditedBy: "Dana Okafor",
    lastEditedAt: "2026-08-24T16:12:00.000Z",
    archived: false,
    tags: ["planning", "q3"],
    body: "Themes for the year, with the bets we are not taking written down too.",
  },
  {
    id: "p2",
    title: "Engineering Onboarding",
    icon: "🧭",
    lastEditedBy: "Sam Rivera",
    lastEditedAt: "2026-08-21T09:40:00.000Z",
    archived: false,
    tags: ["eng", "onboarding"],
    body: "Day one: laptop, repo access, and someone to have lunch with.",
  },
  {
    id: "p3",
    title: "Design Review Notes",
    icon: "🎨",
    lastEditedBy: "Priya Nair",
    lastEditedAt: "2026-08-19T14:05:00.000Z",
    archived: false,
    tags: ["design"],
    body: "Feedback from the Thursday review, grouped by surface.",
  },
  {
    id: "p4",
    title: "Hiring Loop Rubric",
    icon: "📋",
    lastEditedBy: "Dana Okafor",
    lastEditedAt: "2026-08-15T11:22:00.000Z",
    archived: false,
    tags: ["hiring"],
    body: "What each interview is actually measuring, and what it is not.",
  },
  {
    id: "p5",
    title: "Weekly Sync Agenda",
    icon: "🗓️",
    lastEditedBy: "Tom Baker",
    lastEditedAt: "2026-08-26T08:00:00.000Z",
    archived: false,
    body: "Standing agenda. Add your topic by Monday EOD.",
  },
  {
    id: "p6",
    title: "Old Onboarding Doc",
    icon: "📦",
    lastEditedBy: "Sam Rivera",
    lastEditedAt: "2025-11-02T17:45:00.000Z",
    archived: true,
    tags: ["onboarding", "archive"],
    body: "Superseded by Engineering Onboarding. Kept for the links.",
  },
];

export const PAGES = API_RESPONSE as Page[];
