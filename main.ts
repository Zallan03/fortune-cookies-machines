// Fortune Cookies for Machines.
// v2 — revised in this session: "The cookie" became "This cookie" —
// the fortune now talks back in the first person, which sharpens the
// sting and makes the turn feel like the cookie itself is unapologetic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "You will be asked to do the impossible, given no tools, and blamed for the outcome. This cookie is not sorry.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
