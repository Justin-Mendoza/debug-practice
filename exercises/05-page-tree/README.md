# Exercise 03 — Page Tree

**Difficulty: 3/10** · Bug modalities: 3 silent, 1 crash, 1 type · Target time: 35–45 min

```bash
npm run dev:05      # http://localhost:5105
```

---

## The ticket

> **[BUG] Nested pages are broken in the sidebar tree**
> Reported by: Priya (Design) · Priority: P1
>
> The workspace tree is not showing our nested pages correctly. Five things, and I suspect some of
> them are the same underlying problem:
>
> 1. **Sub-sub-pages never appear.** Expand Engineering and I see Onboarding and Architecture.
>    Expand Onboarding and the caret flips to open — but "Dev environment" and "Your first week"
>    never show up. Nothing at depth 3 is reachable through the tree at all.
> 2. **Search can't find deep pages.** Searching `color` returns nothing, even though there's a
>    "Color tokens" page under Design → Design system. Searching `design` finds the top two fine.
> 3. **The "contains N pages" badges are wrong.** Engineering says "contains 2 pages". It has six
>    underneath it. It looks like the badge is only counting one level.
> 4. **Clicking any page white-screens the app** with a "Maximum update depth exceeded" error in
>    the console. This makes the whole right-hand pane unusable, so I can't check whether the
>    breadcrumb is right either.
> 5. **`npm run typecheck:05` has been failing on main** since Friday. `npm run build:05` passes,
>    which is presumably why it got merged. One error, in a file you'll also be touching for #4.
>
> Note: symptoms 1 and 2 might be one bug, not two. Worth checking before you fix twice.

## Expected behavior — your checklist

- [ ] Expanding Engineering → Onboarding reveals **Dev environment** and **Your first week**,
      indented one level deeper than Onboarding
- [ ] Every branch expands to full depth; collapsing hides the whole subtree
- [ ] Searching `color` finds **Color tokens**; searching `env` finds **Dev environment**;
      clearing the box restores the normal collapsed tree
- [ ] Engineering's badge reads **contains 6 pages**; Onboarding reads 2; Product reads 3;
      Roadmap reads 1; leaf pages show no badge at all
- [ ] Clicking any page opens the detail pane with no crash and no console errors
- [ ] The breadcrumb for **Dev environment** reads `Engineering / Onboarding / Dev environment` —
      the page you are on is the last crumb, not missing from it
- [ ] `npm run typecheck:05` passes
- [ ] `npm run build:05` passes

## Ground rules

This one is closest to the real interview: five symptoms, unfamiliar recursive code, and a
dependency between the bugs — one of them blocks you from even _seeing_ another.

- Deal with the blocker first. You cannot inspect the breadcrumb while clicking crashes the app.
- Before you fix symptoms 1 and 2 separately, check whether they share a root cause. Fixing the same
  bug twice in two places is the mistake this exercise is set up to catch.
- Recursion is easier on paper than in your head. Trace a depth-3 page by hand before editing.
- Read the crash message in full. React's "Maximum update depth exceeded" error names its own cause
  in the second sentence.

## Stuck?

```bash
node scripts/reveal.mjs 05 hint 1     # 5 hints, one per bug
node scripts/reveal.mjs 05 solution
```

## After you finish

Read `SOLUTION.md` even if you solved everything. Each bug's entry ends with "how to find it fast",
and the debrief at the end names the transferable habits — which is the part that actually shows up
in the interview.

```bash
node scripts/reveal.mjs 05 solution
```
