# Debug Practice — React/TypeScript

Practice for the **Notion debugging interview**: 45 minutes finding and fixing bugs in an
unfamiliar React/TypeScript app, judged on how you investigate and how you collaborate — not on
how much TypeScript you have memorized.

Each exercise is a small, runnable app with planted bugs. You start it, see it misbehave, and hunt.
There are no test suites on purpose: a failing test would point you straight at the broken function,
and the real interview won't.

## Setup

```bash
nvm use          # Node 22, per the interview instructions
npm install
```

## The ladder

| # | App | Difficulty | Bugs | Modalities | Time |
| --- | --- | --- | --- | --- | --- |
| 01 | [Page sidebar](exercises/01-page-sidebar) | 1/10 | 3 | 2 silent, 1 crash | 15–20 min |
| 02 | [Task inbox](exercises/02-task-inbox) | 1/10 | 3 | 2 silent, 1 crash | 15–20 min |
| 03 | [Block editor](exercises/03-block-editor) | 2/10 | 4 | 2 silent, 1 console, 1 crash | 25–35 min |
| 04 | [Task table](exercises/04-task-table) | 2/10 | 4 | 2 silent, 1 console, 1 crash | 25–35 min |
| 05 | [Page tree](exercises/05-page-tree) | 3/10 | 5 | 3 silent, 1 crash, 1 type | 35–45 min |
| 06 | [Kanban board](exercises/06-kanban-board) | 3/10 | 5 | 3 silent, 1 crash, 1 type | 35–45 min |

Two exercises share each difficulty tier — they were written as independent sets, so the second of
each pair is a fresh set of bugs at the same level rather than a harder one.

```bash
npm run dev:01        # http://localhost:5101 … dev:06 → :5106

npm run typecheck:01  # per-exercise; `npm run typecheck` runs all six
npm run build:01
```

Start with 01 and read its `README.md` — it's written as a bug ticket, the way a real one arrives.

## The four ways a bug announces itself

Every exercise mixes these, because each one is found by a different reflex. Most planted bugs are
silent, which is what the real round emphasizes — but if you don't check the cheap signals first,
you'll burn interview minutes finding by hand what the console would have told you in three seconds.

| Modality | How it shows up | What to do |
| --- | --- | --- |
| **Silent** | Compiles, runs, no errors — just wrong output | Find the contradiction; instrument the data path |
| **Crash** | White screen or Vite error overlay | Read the stack to the first frame in `src/` |
| **Console** | App "works" but DevTools is red | Read the message — React usually names the fix |
| **Type** | `npm run typecheck` fails | Read the error inside-out; it's describing a real runtime bug |

A clean typecheck proves nothing about behavior. Exercises 01 and 02 typecheck perfectly and are
each broken in three places.

## The playbook

Rehearse this out loud. In the interview, the narration *is* the deliverable.

**1. Reproduce it yourself.** Don't debug from the ticket. Click the thing. Confirm you can make it
happen on demand, and note exactly what you did.

**2. State the symptom in one precise sentence.** "Sorting is broken" is a category. "P10 sorts
between P1 and P2" is a lead — it says *alphabetical*, and points at one line. The difference is
usually five minutes of your clock.

**3. Check the cheap signals.** Console. Then `npm run typecheck`. Both take seconds and either one
may hand you the answer. (`npm run typecheck` runs all six and stops at the first failure, which is
05 — exercises 05 and 06 each have a planted type bug. That failure is the exercise, not a broken
repo.)

**4. Find the contradiction.** Ask what the symptom proves is *working*. "The counter went up, so
the click handler ran and the data changed" eliminates half the codebase before you open a file.

**5. Form ONE hypothesis and test it.** Not three. Say it out loud — "I think the row's open/closed
state is keyed to its position rather than its id; let me sort the table and watch the instances in
DevTools" — then go prove or kill it.

**6. Localize before you read.** Pick the cheapest tool:
- React DevTools → what props did the component actually receive?
- A `console.log` at the boundary between two suspects
- A breakpoint in the handler to prove it fires
- Comment out half the render and binary-search the blank area
- For a value that's wrong by a constant, log it next to the input and read the *size* of the gap

**7. Fix the root cause, and say which one you chose.** Guarding one `.join()` call is a patch;
normalizing the data at the boundary is a fix. Both are legitimate — naming the tradeoff out loud is
what a senior engineer does.

**8. Re-verify the whole checklist.** Every exercise has one. Confirm you didn't regress something
while fixing something else — that is a real thing interviewers watch for.

**9. Say what you'd improve.** Notion explicitly asks for this. Missing tests on pure functions, a
`default:` branch hiding a missing case, an `as` cast at a data boundary, no error boundary around a
panel that can throw. Offer two or three at the end, unprompted.

## Interview notes

- **Narrate constantly.** Silence reads as being stuck. "I'm going to check the console first" costs
  nothing and shows method.
- **Ask questions.** "Is this the intended behavior, or should it wrap?" is collaboration, not
  weakness. They said the interviewer is happy to help with syntax — use that.
- **Fix the blocker first.** If a crash stops you seeing other symptoms, say so and go fix it first.
- **Google is allowed. AI tooling is not.** Practice that way: MDN and StackOverflow, no assistant.
- **Don't fix the same bug twice.** When two symptoms share a code path, find that out before you
  edit anything.

## Hints and solutions

Each exercise has `HINTS.md` and `SOLUTION.md`, stored rot13-encoded so you can't spoil yourself by
opening a file or grepping the folder. Decode them deliberately:

```bash
node scripts/reveal.mjs 01 hint        # all hints for exercise 01
node scripts/reveal.mjs 01 hint 2      # just the second one
node scripts/reveal.mjs 03 solution    # full write-up
```

Read the solution even when you solved it — the "how you'd find it fast" and debrief sections are
where the transferable technique lives.

## Layout

```
exercises/<nn>-<name>/
  README.md      the ticket + your expected-behavior checklist
  HINTS.md       progressive hints (encoded)
  SOLUTION.md    bugs, fixes, concepts, debrief (encoded)
  src/           the app
```

Nothing outside `exercises/` needs to change while you work.

Worth doing before you start, so you can reset an exercise and redo it later — and so you can diff
your own fixes against the originals:

```bash
git init && git add -A && git commit -m "exercises with bugs planted"
# later, to reset exercise 04:
git checkout -- exercises/04-task-table
```
