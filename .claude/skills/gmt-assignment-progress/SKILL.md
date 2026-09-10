---
name: gmt-assignment-progress
description: "Lightweight current-status snapshot for the Grow My Therapy internship assignment: which phase is done, what's next, open decisions/blockers. Check this FIRST when resuming work on the assignment, before loading the full brief."
---

# gmt-assignment-progress

Quick status check for the Grow My Therapy Stage 2 assignment. **Read this before anything else** when resuming the project — it tells you exactly where things stand without reloading the full brief. For full requirement detail, load `gmt-assignment-full` (or read `docs/01-ASSIGNMENT-BRIEF.md` / `docs/02-PHASE-PLAN.md` directly). For the full history of what's been done, read `docs/03-PROGRESS-LOG.md`.

## Current Status (keep this block in sync — it's the whole point of this skill)

- **Last completed phase:** Phase -1 — Docs & planning setup (brief fetched from Notion, phase plan written, progress log started, both skills created)
- **Next phase to start:** Phase 0 — Setup & Reconnaissance (scaffold Next.js + Tailwind, deploy blank site to Vercel/Netlify, publicly push GitHub repo, map every section of https://www.conejovalleycounseling.com/home, decide the design-token strategy for the Phase 2 theme swap)
- **Deadline:** NOT YET SET — the 6-day window starts from the Internshala receipt date, which hasn't been recorded yet. Fill it into `docs/01-ASSIGNMENT-BRIEF.md` §8 as soon as known, and update this line.
- **Open decisions / blockers:** none yet — Phase 0 hasn't started.

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
