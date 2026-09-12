---
name: gmt-assignment-progress
description: "Lightweight current-status snapshot for the Grow My Therapy internship assignment: which phase is done, what's next, open decisions/blockers. Check this FIRST when resuming work on the assignment, before loading the full brief."
---

# gmt-assignment-progress

Quick status check for the Grow My Therapy Stage 2 assignment. **Read this before anything else** when resuming the project — it tells you exactly where things stand without reloading the full brief. For full requirement detail, load `gmt-assignment-full` (or read `docs/01-ASSIGNMENT-BRIEF.md` / `docs/02-PHASE-PLAN.md` directly). For the full history of what's been done, read `docs/03-PROGRESS-LOG.md`.

## Current Status (keep this block in sync — it's the whole point of this skill)

- **Last completed phase:** Phase 7 — Deploy & Repo Finalization (the parts Claude can do alone). Deleted `public/images/candidates/` (40 reference-only photos). README already met the checklist (what/tech-stack/links, placeholders left as placeholders). Confirmed via `gh repo view` the GitHub repo is genuinely `PUBLIC`. Confirmed zero `.env*` files and zero secret/token/key patterns anywhere in `src/`. `npm run build`/`npm run lint` pass.
- **⚠️ The one real outstanding item in the ENTIRE assignment:** the actual Vercel/Netlify deploy — needs the user's own account login, Claude genuinely cannot do this alone. Walk through it together or have the user do it and report the live URL.
- **⚠️ Nothing from Phase 1 through Phase 7 has been committed to git this whole session.** The GitHub repo currently still only reflects the Phase 0 state. A commit (and push) needs to happen before a Vercel/Netlify deploy would pull anything current — ask the user before committing, per standing git-safety rules, even though at this point in the project it's clearly expected.
- **Next phase to start:** Phase 8 — Video Walkthrough (30%, the single highest-weighted item — do not treat as an afterthought). This is fundamentally the user's task to record in Loom; Claude can draft a loose talking outline (desktop walkthrough, mobile walkthrough, non-technical benefit-focused framing per the brief) but cannot record it. **Should happen after the deploy**, so the video demos the live site, not localhost.
- **Deadline:** NOT YET SET — the 6-day window starts from the Internshala receipt date, which hasn't been recorded yet. Fill it into `docs/01-ASSIGNMENT-BRIEF.md` §8 as soon as known, and update this line.
- **Open decisions / blockers:**
  - Vercel/Netlify deploy — needs the user's own account login, cannot be completed by Claude alone. **User confirmed: handle this at the end, not a current blocker.**
  - Nothing from this session has been committed to git yet — pending explicit go-ahead.
  - **Standing rule for the rest of this project**: any color-palette, image, or other subjective/creative choice must be presented as visual options for the user to pick from, and no file should be edited to apply a specific choice until the user actually replies — see the `feedback_creative_decisions_need_visual_choice` memory (it records a real process miss from Phase 4: options were shown *after* a choice was already applied once, which the user caught). Phase 5's office photos didn't need this flow since they were already fixed, real assets reserved earlier — no new subjective choice was made.
  - **Environment gotcha, discovered mid-Phase-4**: the dev server Claude starts via its own tools runs in Claude's own sandboxed environment. It is reachable from Claude's in-tool Browser (used for all the verification above) but **not** from the user's actual browser on their own machine, even at the identical port number. If the user says they don't see a change, the fix is to have them run `npm run dev` themselves in their own terminal and open that URL — it's very likely not a code problem.

## Where everything lives

```
GrowMyTherapy/
├── docs/
│   ├── 01-ASSIGNMENT-BRIEF.md   ← full requirements, checklists, Maya's profile, deadline, grading weights
│   ├── 02-PHASE-PLAN.md         ← Phase 0 → Phase 9 execution order, each with its own checklist
│   └── 03-PROGRESS-LOG.md       ← full history, one dated entry per completed phase
└── .claude/skills/
    ├── gmt-assignment-full/      ← full context skill
    └── gmt-assignment-progress/  ← this skill
```

(Once Phase 0 starts, the Next.js app code will live at the project root alongside `docs/`.)

## Maintenance rule (read this every time you finish a phase)

The moment a phase from `docs/02-PHASE-PLAN.md` is completed, in the same session:
1. Append a new dated entry to `docs/03-PROGRESS-LOG.md` (what was done, files/folders changed and why, decisions made, next phase) — never delete prior entries.
2. Update the **Current Status** block above in this file — last completed phase, next phase, any new blockers/decisions.
3. If anything scope-changing happened (new requirement understood, a design decision that affects later phases), also touch `gmt-assignment-full` if it changes the reference summary.

This is the whole mechanism that prevents work from being "forgotten" between sessions — always trust this file's Current Status block over memory, and always update it before moving on.
