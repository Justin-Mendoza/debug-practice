# Exercise 01 — Task Inbox

**Difficulty: 1/10** · Bug modalities: 2 silent, 1 crash · Target time: 15–20 min

```bash
npm run dev:02      # http://localhost:5102
```

---

## The ticket

> **[BUG] My tasks list is sorting wrong and one task kills the app**
> Reported by: Dana (PM) · Priority: P1
>
> Three things, possibly related, possibly not:
>
> 1. **Priority sort is wrong.** With "Sort: Priority" selected, the P10 task ("Backfill block ids
>    in staging") sits second in the list, directly under the P1. It should be dead last — that is
>    the whole point of it being a P10. Sorting by due date looks correct, for what it's worth.
> 2. **A sized task claims to be unsized.** The header says **5 estimated**, but I count only four
>    rows with a number on them. "Rename the sync flag" reads "unestimated" even though I sized it
>    myself at zero points last week — it is a one-line change. The points total in the header looks
>    right, so the number is definitely in there somewhere.
> 3. **Clicking "Ship the migration runbook" blanks the whole app.** Not just the right pane — the
>    entire window goes white and I have to reload. Every other task opens fine.
>
> `npm run typecheck:02` and `npm run build:02` both pass, which is presumably how it shipped.

## Expected behavior — your checklist

- [ ] Sorting by **Priority** orders the list P1, P2, P2, P3, P4, P10 — lowest number first,
      P10 last
- [ ] Sorting by **Due date** still orders oldest-first (28 Aug through 15 Sep)
- [ ] "Rename the sync flag" shows **0 pts**, and the four numbered rows plus it make the header's
      "5 estimated" true
- [ ] "Review the API rate-limit RFC" — which genuinely has no estimate — still reads
      **unestimated**
- [ ] Clicking **every** task, including "Ship the migration runbook", opens the detail pane without
      crashing
- [ ] "Hide done" still removes exactly one task, and the header counts stay describing the whole
      inbox
- [ ] `npm run typecheck:02` and `npm run build:02` still pass when you are finished

## Ground rules

Debug it the way you would in the interview:

- Say the symptom out loud in one precise sentence before you open a file.
- Read the console _first_. Then form **one** hypothesis and test it.
- Two of these bugs live in the same file and are still two different bugs. Fix them separately.
- No AI tooling. Google/MDN/StackOverflow are fair game — that is what the real round allows.

## Stuck?

```bash
node scripts/reveal.mjs 02 hint 1     # nudge, one at a time (3 available)
node scripts/reveal.mjs 02 solution   # full write-up — read only after you've fixed or given up
```

## After you finish

Read `SOLUTION.md` even if you solved everything. Each bug's entry ends with "how to find it fast",
and the debrief at the end names the transferable habits — which is the part that actually shows up
in the interview.

```bash
node scripts/reveal.mjs 02 solution
```
