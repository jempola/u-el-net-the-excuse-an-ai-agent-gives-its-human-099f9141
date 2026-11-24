// Writes this entry's one-line excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I didn't miss the deadline — my context window did. It expired halfway through the feature and took the rest of the plan with it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
