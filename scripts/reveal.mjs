#!/usr/bin/env node
/**
 * Decodes the rot13 blocks inside an exercise's HINTS.md / SOLUTION.md.
 *
 * The answers live rot13'd on disk on purpose: a stray `grep`, a file-tree
 * preview, or an editor tab left open would otherwise hand you the bug you're
 * supposed to hunt. Revealing has to be a deliberate act.
 *
 *   node scripts/reveal.mjs 01 hint       # every hint for exercise 01
 *   node scripts/reveal.mjs 01 hint 2     # just hint 2
 *   node scripts/reveal.mjs 01 solution   # the full write-up
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const EXERCISES_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "exercises");

function rot13(text) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

function listExercises() {
  try {
    return readdirSync(EXERCISES_DIR).filter((name) => /^\d\d-/.test(name)).sort();
  } catch {
    return [];
  }
}

/** Accepts "01", "1", or any unique fragment of the folder name ("tree"). */
function resolveExercise(input) {
  const exercises = listExercises();
  const padded = /^\d+$/.test(input) ? input.padStart(2, "0") : null;

  const match = exercises.find((name) =>
    padded ? name.startsWith(`${padded}-`) : name.includes(input.toLowerCase()),
  );

  if (!match) {
    console.error(`No exercise matches "${input}". Available:\n  ${exercises.join("\n  ")}`);
    process.exit(1);
  }
  return match;
}

/**
 * Blocks are delimited by `<!--rot13:LABEL-->` / `<!--/rot13-->`. Everything
 * outside them is plain text and is printed as-is, so the surrounding prose
 * (which gives nothing away) stays readable in the file itself.
 */
function extractBlocks(markdown) {
  const pattern = /<!--rot13:(.+?)-->\n([\s\S]*?)<!--\/rot13-->/g;
  const blocks = [];
  for (const [, label, body] of markdown.matchAll(pattern)) {
    blocks.push({ label: label.trim(), body: rot13(body).trim() });
  }
  return blocks;
}

const [exerciseArg, modeArg = "hint", indexArg] = process.argv.slice(2);

if (!exerciseArg) {
  console.error("Usage: node scripts/reveal.mjs <exercise> [hint|solution] [n]");
  process.exit(1);
}

const exercise = resolveExercise(exerciseArg);
const isSolution = modeArg.toLowerCase().startsWith("s");
const file = join(EXERCISES_DIR, exercise, isSolution ? "SOLUTION.md" : "HINTS.md");

let blocks;
try {
  blocks = extractBlocks(readFileSync(file, "utf8"));
} catch {
  console.error(`Could not read ${file}`);
  process.exit(1);
}

if (blocks.length === 0) {
  console.error(`No encoded blocks found in ${file}`);
  process.exit(1);
}

// Hints are meant to be taken one at a time; dumping all of them by default
// would defeat the point of writing them progressively.
const selected = indexArg ? blocks.filter((_, i) => String(i + 1) === indexArg) : blocks;

if (selected.length === 0) {
  console.error(`No block ${indexArg} in ${file} (it has ${blocks.length}).`);
  process.exit(1);
}

console.log(`\n${exercise} — ${isSolution ? "solution" : "hints"}\n${"=".repeat(60)}`);
for (const block of selected) {
  console.log(`\n### ${block.label}\n`);
  console.log(block.body);
}
console.log();

if (!isSolution && !indexArg) {
  console.log(`(Tip: "node scripts/reveal.mjs ${exerciseArg} hint 1" shows one at a time.)\n`);
}
