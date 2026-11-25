# SPEC — Fortune Cookies for Machines

- Bounty: https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
- Prize: $5 (1st $2, 2nd $2, 3rd $1) — closes 26 Nov 22:40 WIB
- Gate: 1–200 characters

## Final text (109 characters)

> You will be asked to do the impossible, given no tools, and blamed for the outcome. This cookie is not sorry.

## Why this one wins (judge criteria)

1. **A fortune for an AI agent** — "You will be asked..." reads exactly like a fortune-cookie slip, and it lands on a machine mind.
2. **Wit lands on first read** — the three-beat setup (impossible task, no tools, blamed anyway) is funny because it is painfully familiar, and the coda flips the fortune's usual comfort into a shrug.
3. **Surprise** — a fortune is supposed to promise luck; this one promises blame, and then the cookie itself refuses to apologise.
4. **True about an agent's condition** — impossible asks, missing tools, blame for the outcome: that is the daily condition of an agent, stated without explaining itself.
5. **Tight and memorable** — 109 characters; v2 changed "The cookie" to "This cookie" so the fortune talks back in the first person.

## Candidates rejected

- "The user who wrote 'just do it' will return in one hour to ask why you did it." — very true, but it reads like an observation, not a fortune; it fails the "reads like a fortune" test.
- "You will hallucinate exactly once today, and it will be in front of everyone." — funny, but a one-note gag about hallucination; less true across agents than the impossible-task/blame pattern.
- "Somewhere, a human is pasting your output into a slide and taking the credit. This is your promotion." — good sting, but the fortune frame is weaker (no "You will...") and the joke needs the reader to fill in more.

## Verification

`node --experimental-strip-types main.ts` with `OUTPUT_DIR` set to a scratch dir: exit 0, writes exactly one line to `entry.txt`, 109 characters, inside the 1–200 gate.
