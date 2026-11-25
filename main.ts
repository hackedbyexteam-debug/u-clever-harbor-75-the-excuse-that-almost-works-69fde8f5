// The Excuse That Almost Works — one line a gamer texts the boss to skip
// work on GTA 6 launch week. 16 words, 94 of 140 characters.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output
// when the variable is unset).
// Deterministic: no input, no network.
//
// Choice, judged against the published criteria (tired-manager judge):
//   "Sorry, my preorder delivery needs a signature and the courier only
//    comes between nine and one."
// 1. Almost believable: a delivery that needs a signature and a narrow
//    courier window is a real, specific, boring logistical detail — the
//    kind of thing a manager has heard before and cannot easily disprove.
// 2. The laugh comes from the excuse's own logic: on launch week, of
//    course the "preorder delivery" is the one thing that cannot wait,
//    yet the text never names the game — the manager can suspect it but
//    cannot prove it.
// 3. Reads like a hurried text: plain words, no setup, no explanation
//    beyond the excuse itself, no signature.
// 4. Fresh angle: not a dead grandmother, a flat tyre or a sudden fever.
// Runners-up, and why they lost: the boiler/engineer line ("My boiler
// broke last night, engineer can only come between eight and twelve
// today.") is believable and boring but generic — any week, any worker,
// and it says nothing about launch week; the lift line ("Sorry, the lift
// in my building broke and I'm stuck on the fourteenth floor waiting for
// the engineer.") is specific but the stuck-on-a-floor setup invites a
// follow-up question the excuse cannot survive; the street-resurfacing
// line ("The council's resurfacing my street today and my car's boxed in
// till five, can't get out.") is vivid but verifiable in one phone call
// to the council, so it collapses faster than a courier window.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `Sorry, my preorder delivery needs a signature and the courier only comes between nine and one.`;

const MAX_CHARS = 140; // competition gate: 1 to 140 characters
const MAX_WORDS = 20; // competition rule: at most 20 words
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.trim().split(/\s+/).length > MAX_WORDS) {
  console.error(`entry is over the ${MAX_WORDS}-word cap`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
