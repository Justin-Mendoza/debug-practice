# Exercise 03 — Kanban Board

**Difficulty: 3/10** · Bug modalities: 3 silent, 1 crash, 1 type · Target time: 35–45 min

```bash
npm run dev:06      # http://localhost:5106
```

---

## The ticket

> **[BUG] The platform board is broken in five different ways**
> Reported by: Priya (EM) · Priority: P1
>
> We started using this for standup and it did not survive the week.
>
> 1. **The activity log only ever shows one move.** Move a card, and the log shows it. Move a
>    second card, and the first entry disappears — the log shows the new move and nothing else. The
>    "N moves this session" counter in the header is stuck at 1 forever, no matter how many cards I
>    move. The board itself keeps every move correctly; it's only the log that forgets.
> 2. **Undo can't reach the starting board.** Make one move and Undo is greyed out immediately.
>    Make two moves and Undo works exactly once, then greys out again. There's always one move I
>    can't take back, and it's always the first one.
> 3. **The due badges are all wrong.** Every card says "due in 30-something days". "Draft the
>    incident review" is due today and "Rewrite the retry policy" was due two days ago, and neither
>    of them says so. Nothing is ever marked due today or overdue.
> 4. **Putting a fourth card in "In progress" white-screens the whole app.** The column is limited
>    to 3. Going over it should show the over-limit banner, and instead the page goes blank and I
>    have to reload. Three cards is fine; the fourth kills it.
> 5. **`npm run typecheck:06` has been failing on main** since Tuesday. `npm run build:06` passes,
>    which is presumably why it got merged. One error, in a file you'll be in anyway.
>
> Some of these may share a cause and some definitely don't. I couldn't tell you which.

## Expected behavior — your checklist

- [ ] The activity log lists **every** move made this session, newest first, and the header counter
      matches the number of entries
- [ ] Undo steps back through every move including the first, all the way to the board you started
      with; Redo replays them in order; both buttons grey out only at their actual ends
- [ ] "Draft the incident review" reads **due today**; "Rewrite the retry policy" reads
      **2 days overdue**; "Migrate the block index" reads **due tomorrow**; "Split the sync worker"
      reads **due in 6 days**
- [ ] Moving a fourth card into **In progress** shows the over-limit banner and the red count, with
      no crash — and moving one back out clears the banner
- [ ] Columns still render left to right as Todo, In progress, Done
- [ ] `npm run typecheck:06` passes
- [ ] `npm run build:06` passes

## Ground rules

This one is closest to the real interview: five symptoms, unfamiliar state management, and a
dependency between the bugs — one of them stops you exploring the others.

- **Deal with the blocker first.** You cannot investigate undo or the banner while a white screen is
  one click away. Say that out loud, then go fix it.
- **Check the cheap signals before you read anything.** The console and `npm run typecheck:06` take
  seconds and one of them hands you a bug outright.
- Symptoms 1 and 2 both sound like "state isn't keeping up". Check whether they share a code path
  before you fix either. The answer is worth as much as the fix, whichever way it goes.
- A date that is wrong by a constant amount is telling you which unit is wrong. Read the number
  before you read the code.

## Stuck?

```bash
node scripts/reveal.mjs 06 hint 1     # 5 hints, one per bug
node scripts/reveal.mjs 06 solution
```

## After you finish

Read `SOLUTION.md` even if you solved everything. Each bug's entry ends with "how to find it fast",
and the debrief at the end names the transferable habits — which is the part that actually shows up
in the interview.

```bash
node scripts/reveal.mjs 06 solution
```
