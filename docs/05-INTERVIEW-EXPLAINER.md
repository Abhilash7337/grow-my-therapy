# Explain This Project — Your Reference for Understanding & the Live Interview

This file is **for you**, not for the submission. It's written in plain language, no jargon dumps — read it to (a) understand what's actually happening in the project at any point, and (b) have ready answers when Stage 3 (the live interview) asks you to walk through what you built and why.

Updated after every phase, same as `03-PROGRESS-LOG.md` — but where that file is a technical changelog, **this file teaches**. If you only have 5 minutes before an interview, read this file, not the whole codebase.

---

## The 30-second pitch (memorize this)

"I cloned a real therapy-practice website's homepage in Next.js and Tailwind, matching its exact layout and structure. Then I completely redesigned it — new colors, new copy, new images — for a fictional therapist persona, using her profile as the only source of content, and added a brand-new 'Our Office' section that wasn't in the original. I recorded a video presenting it as if I were showing the client their first draft."

## Why this assignment is structured this way (the "why" behind each part)

- **Part 1 (clone) exists to test**: can you read someone else's UI and reproduce it precisely? This is the daily reality of an agency job — you're often matching an existing brand or a client-approved mockup, not inventing from scratch.
- **Part 2 (redesign) exists to test**: design taste + content discipline. Can you take messy source material (a profile doc) and turn it into clean, on-brand copy and a cohesive palette — without inventing facts that aren't there?
- **Part 3 (new section) exists to test**: creative initiative within constraints — can you add something that feels like it always belonged, not bolted on?
- **Part 4 (video) exists to test**: can you communicate technical work to a non-technical client confidently? This is graded highest (30%) because agency work lives or dies on client communication, not just code quality.

## Key terms, explained simply (in case you're asked or need a refresher)

- **Next.js**: a React framework that handles routing, rendering, and build tooling for you. "App Router" (what this project uses) means pages are folders under `src/app/` — a folder named `about` with a `page.tsx` inside becomes the `/about` route.
- **Tailwind CSS**: a utility-class CSS framework — instead of writing custom CSS files, you compose styles directly in your markup with classes like `text-lg font-bold text-teal-700`. Fast to build with, and it's what keeps the "reusable theme" requirement easy — colors/spacing live in one config, not scattered across files.
- **Design tokens**: the small set of named values (colors, fonts, spacing) that everything else in the design references, instead of hardcoding a color in 20 different places. This project uses Tailwind's theme config (or CSS variables) as its tokens — so Phase 2's "swap the whole color theme" becomes editing one file, not hunting through every component.
- **Turbopack**: Next.js's newer, faster build engine (this project uses it — it's the default in this Next.js version). You don't need to explain this unless asked; it's just what's compiling the code fast during `npm run dev`.
- **SEO (in this assignment's context)**: making sure headings and copy naturally include what a real client would search for — the specialty ("anxiety therapy", "trauma therapy") plus the location ("Santa Monica"). Not stuffing keywords — just being specific and geographically honest in the copy.

## The story of the build, in order (fill this in as phases complete)

### Phase 0 — Setup & Reconnaissance (done 2026-09-10)
Before writing any redesign code, two things had to happen: a working project skeleton, and a real understanding of what's being cloned.

- **Scaffolded** a Next.js + TypeScript + Tailwind CSS project (via `create-next-app`) directly in this folder. Chose TypeScript because catching typos in props/data early beats debugging them in the browser later — and it's a stronger signal of professionalism in a code review.
- **Verified it builds and runs** (`npm run build`, `npm run dev`) before doing anything else — no point designing on top of a broken foundation.
- **Studied the reference site** (conejovalleycounseling.com/home) directly in a browser — not just glancing at it, but reading computed CSS (fonts, colors, spacing), scrolling through the whole page, and capturing full-page reference screenshots (`docs/reference-screenshots/`) for both desktop and mobile. Found the site is built on Squarespace, uses a 3-tone neutral palette (cream/white/tan) that alternates section by section, a light-weight serif heading font paired with one cursive accent word per heading (a nice recurring signature detail), and sharp-cornered underlined-text buttons everywhere except one pill-shaped nav button.
- **Documented the exact section order** (12 sections, hero to footer) in `docs/04-SITE-RECON.md` — this becomes the literal build checklist for Phase 1.

**If asked "how did you approach starting this?"**: *"Before writing any code, I actually studied the reference site properly — read its computed styles, mapped every section top to bottom, and took full-page reference screenshots so I'd have something concrete to compare my clone against as I built it, rather than eyeballing it from memory."*

### Phase 1 — Clone the Homepage
_Fill in once done: what components you built, how you structured sections, any tricky responsive/layout decisions._

### Phase 2 — Theme & Color Palette
_Fill in once done: what palette you chose and why, how the token system made the swap clean._

### Phase 3 — Copywriting
_Fill in once done: how you translated Maya's profile into headlines/services/FAQs, your SEO approach._

### Phase 4 — Images
_Fill in once done: where images came from, how you picked them to match the theme._

### Phase 5 — "Our Office" Section
_Fill in once done: where you placed it and why, what makes it feel native to the page._

### Phase 6–9 — QA, Deploy, Video, Submission
_Fill in once done._

## Anticipated interview questions — draft your own answers here as you go

- "Walk me through your process." → use the 30-second pitch above, then expand phase by phase using this file.
- "Why did you choose this color palette?" → answer once Phase 2 is done, from your own reasoning (the palette choice will be yours — see the memory note in this project about visual choices being yours to make, not pre-decided).
- "What was the hardest part?" → keep a running note here as you hit real friction — don't invent an answer cold in the interview.
- "How did you use AI tools, and how did you make sure it wasn't just copy-paste?" → be ready to point at specific places you rewrote/refined AI output — this is explicitly evaluated in the brief, so a concrete example matters more than a vague claim.

## Folder structure, explained (so you can point at anything and know what it is)

```
GrowMyTherapy/
├── docs/                          ← everything about the assignment itself, not code
│   ├── 01-ASSIGNMENT-BRIEF.md     ← the requirements (what to build)
│   ├── 02-PHASE-PLAN.md           ← the build order (how/when)
│   ├── 03-PROGRESS-LOG.md         ← technical changelog, one entry per phase
│   ├── 04-SITE-RECON.md           ← notes on the site being cloned
│   ├── 05-INTERVIEW-EXPLAINER.md  ← this file
│   └── reference-screenshots/     ← full-page images of the original site, for comparison
├── src/app/                       ← the actual Next.js pages/components (App Router)
├── public/                        ← static assets (images, icons) served as-is
├── .claude/skills/                ← Claude Code skill files that auto-load project context
├── package.json                   ← dependencies + npm scripts (dev/build/start/lint)
├── tailwind.config / postcss.config → Tailwind CSS setup
└── tsconfig.json                  ← TypeScript compiler settings
```

If someone asks "why is it organized this way" — the honest answer is: it separates *planning/reference material* (`docs/`) from *actual shipped code* (`src/`, `public/`), so the docs never get mistaken for something that needs to be deployed, and so a fresh look at the project (yours or an interviewer's) can find "what was decided and why" in one place instead of digging through commit history.
