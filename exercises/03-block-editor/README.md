# Exercise 02 — Block Editor

**Difficulty: 2/10** · Bug modalities: 2 silent, 1 console, 1 crash · Target time: 25–35 min

```bash
npm run dev:03      # http://localhost:5103
```

---

## The ticket

> **[BUG] Release checklist doc is misbehaving in four different ways**
> Reported by: Tom (Eng) · Priority: P1
>
> I opened the release checklist this morning and it's a mess. In rough order of how much it
> annoyed me:
>
> 1. **Code blocks render as nothing.** The doc has two of them — the `notion-cli` rollback command
>    and a SQL query. Neither appears. There's no error, no empty box, no placeholder; the document
>    just skips straight from the heading to the next paragraph. The blocks are definitely still in
>    the document, because the "Blocks" count in the right rail includes them.
> 2. **Ticking a todo doesn't tick the checkbox.** But — and this is the strange part — the
>    "N of M done" counter at the top _does_ go up. So the click is registering somewhere. Clicking
>    a second time increments it again. The checkbox itself never changes.
> 3. **The console is throwing a React error on every load.** Might be unrelated to the rest, but
>    it's been there a while and nobody's looked at it.
> 4. **Filtering by "Callout" white-screens the whole app.** We don't have any callout blocks in
>    this doc, so the filter should just show an empty document. Instead everything disappears and
>    I have to reload.
>
> `npm run typecheck:03` and `npm run build:03` both pass, for what it's worth.

## Expected behavior — your checklist

- [ ] Both code blocks render, in a monospace box (there is already a `.block--code` style waiting
      for them in `styles.css`)
- [ ] Clicking a todo checkbox ticks it immediately, strikes through the text, and increments the
      counter — and clicking again reverses all three
- [ ] The counter and the checkboxes never disagree
- [ ] The browser console is completely clean on load and after interacting
- [ ] Filtering by **Callout** shows an empty document and sensible stats, with no crash
- [ ] Every other filter still shows exactly the blocks of that type
- [ ] `npm run typecheck:03` and `npm run build:03` still pass

## Ground rules

- Four symptoms is not one mystery. Split them, then chase **one at a time**.
- Read the console before you read any code. One of these bugs announces its own fix.
- When a symptom seems self-contradictory ("the click works but the checkbox doesn't"), that
  contradiction is the most valuable clue on the page. Say it out loud precisely.

## Stuck?

```bash
node scripts/reveal.mjs 03 hint 1     # 4 hints, one per bug
node scripts/reveal.mjs 03 solution
```

## After you finish

Read `SOLUTION.md` even if you solved everything. Each bug's entry ends with "how to find it fast",
and the debrief at the end names the transferable habits — which is the part that actually shows up
in the interview.

```bash
node scripts/reveal.mjs 03 solution
```
