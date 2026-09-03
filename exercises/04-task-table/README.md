# Exercise 02 — Task Table

**Difficulty: 2/10** · Bug modalities: 2 silent, 1 console, 1 crash · Target time: 25–35 min

```bash
npm run dev:04      # http://localhost:5104
```

---

## The ticket

> **[BUG] The sprint table is misbehaving in four different ways**
> Reported by: Sam (Eng) · Priority: P1
>
> I've been living in this table all week. In rough order of how much it annoyed me:
>
> 1. **Expanding a row's notes, then sorting, opens the wrong row.** Click the ▸ next to "Rewrite
>    the sync queue" to read its notes, then sort by Points. The rows reorder, but the open notes
>    panel stays where it was and now hangs off whatever task landed in that position. The notes
>    text is right for the row it's attached to — it's the _open_ state that ends up on the wrong
>    task. Same thing if I'm halfway through editing a points cell: the half-typed number jumps to
>    a different row.
> 2. **"Clear sort" doesn't restore the original order.** Sort by Title, hit Clear sort, and the
>    header arrow disappears but the rows stay alphabetical. The planned order is just gone until I
>    reload. Oddly, if I pick a status chip _first_ and then sort, Clear sort works fine — it's only
>    broken on **All**.
> 3. **The console has a React error on every load.** It's been there a while and nobody's looked.
>    Nothing on screen seems wrong because of it.
> 4. **Moving any task to "In review" white-screens the app.** Not the row — the whole page. Every
>    other status change is fine. We don't have anything in review right now, which is presumably
>    why this survived.
>
> `npm run typecheck:04` and `npm run build:04` both pass, for what it's worth.

## Expected behavior — your checklist

- [ ] Expand a row's notes, then sort or filter — the notes stay attached to the task you opened,
      and an in-progress points edit stays on its own row
- [ ] "Clear sort" restores the seeded order (Rewrite the sync queue → … → Ship the changelog page)
      from **any** filter, including All
- [ ] Sorting by Title and by Points both work, ascending and descending, and never permanently
      reorder the underlying data
- [ ] The browser console is completely clean on load and after interacting
- [ ] Changing any task's status to **In review** works, and the footer grows an "In review" entry
      with the right count and points
- [ ] Every filter chip shows exactly the rows with that status, and the footer describes what's on
      screen
- [ ] `npm run typecheck:04` and `npm run build:04` still pass

## Ground rules

- Four symptoms is not one mystery. Split them, then chase **one at a time**.
- Read the console before you read any code. One of these bugs announces its own fix.
- Symptoms 1 and 2 both appear when you click a column header. That does **not** make them the same
  bug — check before you assume either way. Getting that question right, in either direction, is
  worth as much as the fix.
- When a symptom has a qualifier attached ("only on All", "only In review"), that qualifier is the
  most valuable thing in the ticket. Chase it first.

## Stuck?

```bash
node scripts/reveal.mjs 04 hint 1     # 4 hints, one per bug
node scripts/reveal.mjs 04 solution
```

## After you finish

Read `SOLUTION.md` even if you solved everything. Each bug's entry ends with "how to find it fast",
and the debrief at the end names the transferable habits — which is the part that actually shows up
in the interview.

```bash
node scripts/reveal.mjs 04 solution
```
