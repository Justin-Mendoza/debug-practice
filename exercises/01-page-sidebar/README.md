# Exercise 01 — Page Sidebar

**Difficulty: 1/10** · Bug modalities: 2 silent, 1 crash · Target time: 15–20 min

```bash
npm run dev:01      # http://localhost:5101
```

---

## The ticket

> **[BUG] Sidebar is empty and one page white-screens the app**
> Reported by: Dana (Support) · Priority: P1
>
> Three things came in this morning, possibly related, possibly not:
>
> 1. The workspace sidebar shows **only "Old Onboarding Doc"**, which is archived. The other five
>    pages are missing from the list — but the header right above it still says "6 pages", so the
>    data is clearly loading.
> 2. Search is case-sensitive. Typing `roadmap` finds the roadmap page; typing `Roadmap` finds
>    nothing. Users type the capitalized name because that is how the page is titled.
> 3. Older report from last week, before the list broke: clicking **Weekly Sync Agenda** blanks the
>    entire app — not just the right pane, the whole thing goes white. Other pages open fine.
>    (You will not be able to reproduce this one until the list renders again.)
>
> Nothing here throws a build error and `npm run typecheck:01` passes, which is why it got through.

## Expected behavior — your checklist

Work through these in the browser. When all six pass, you are done.

- [ ] All **6 pages** appear in the sidebar, with "Old Onboarding Doc" last and marked `archived`
- [ ] Live pages are sorted newest-edited first: Weekly Sync Agenda, Roadmap 2026, Engineering
      Onboarding, Design Review Notes, Hiring Loop Rubric
- [ ] Clicking any row opens it in the right pane and highlights that row
- [ ] Searching `Roadmap`, `roadmap`, and `ROADMAP` all return the same one result
- [ ] Clicking **every** page — including Weekly Sync Agenda — renders the detail pane without
      crashing, and the tags line reads sensibly for a page that has no tags
- [ ] `npm run typecheck:01` and `npm run build:01` still pass when you are finished

## Ground rules

Debug it the way you would in the interview:

- Say the symptom out loud in one precise sentence before you open a file.
- Read the console _first_. Then form **one** hypothesis and test it.
- No AI tooling. Google/MDN/StackOverflow are fair game — that is what the real round allows.

## Stuck?

```bash
node scripts/reveal.mjs 01 hint 1     # nudge, one at a time (3 available)
node scripts/reveal.mjs 01 solution   # full write-up — read only after you've fixed or given up
```

## After you finish

Read `SOLUTION.md` even if you solved everything. Each bug's entry ends with "how to find it fast",
and the debrief at the end names the transferable habits — which is the part that actually shows up
in the interview.

```bash
node scripts/reveal.mjs 01 solution
```
