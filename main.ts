// Famous Last Words at 1 Percent — make.fun entry (program/v1).
// Writes a single line — the phone's own farewell as its battery
// hits 1 percent — to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I kept your passwords, your photos, your 2 a.m. confessions \u2014 and after reading your search history, I'm relieved to be dying.";

// Guard the gate before writing: the sealed scorer needs 1-199
// UTF-8 characters, a single line, and more than whitespace.
const chars = [...line];
if (chars.length < 1 || chars.length > 199) {
  throw new Error(`entry is ${chars.length} chars, must be 1-199`);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, "utf8");
