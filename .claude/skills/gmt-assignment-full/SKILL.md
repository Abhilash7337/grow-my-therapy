---
name: gmt-assignment-full
description: "Complete reference for the Grow My Therapy internship Stage 2 assignment: full brief, tech stack, the reference site to clone, Dr. Maya Reynolds' fictional therapist profile (bio, specializations, office details), all 4 assignment parts with checklists, deliverables, deadline rule, and evaluation weights. Use for full context; for a quick 'where are we now' check gmt-assignment-progress first."
---

# gmt-assignment-full

Full context for the **Grow My Therapy Front-End Developer Internship — Stage 2 Practical Assignment**. Load this whenever deep detail is needed about the assignment itself (requirements, the therapist profile, checklists, grading weights). For "what's done / what's next", check `gmt-assignment-progress` first — it's cheaper and points back here or into the docs as needed.

The full, authoritative breakdown lives in three files at the project root — **read them, don't just rely on this summary**:

- [`docs/01-ASSIGNMENT-BRIEF.md`](../../../docs/01-ASSIGNMENT-BRIEF.md) — the complete assignment, verbatim requirements, the Dr. Maya Reynolds profile, all checklists, deliverables, deadline, evaluation weights.
- [`docs/02-PHASE-PLAN.md`](../../../docs/02-PHASE-PLAN.md) — Phase 0 through Phase 9, in the order to execute them, each with its own checklist and exit criteria.
- [`docs/03-PROGRESS-LOG.md`](../../../docs/03-PROGRESS-LOG.md) — the running log of what's actually been done, updated after every phase.

## One-paragraph summary

Clone the homepage of https://www.conejovalleycounseling.com/home in Next.js + Tailwind CSS, preserving its exact layout/structure/responsiveness (Part 1, 25%). Then redesign it — new color theme (Part 2A, 25%), new copy and images (Part 2B/C, 10% combined) — entirely sourced from a fictional therapist profile for **Dr. Maya Reynolds, PsyD** (Santa Monica, CA — anxiety/panic/trauma/burnout specialist for high-achieving adults, CBT/EMDR/mindfulness approach). Add one brand-new "Our Office" section not in the original (Part 3, 10%). Record a ~5-minute Loom video demoing the site to Maya as if she's the client, non-technical language (Part 4, **30% — the single highest-weighted item**). Deliver: live URL, public GitHub repo, Loom link. Deadline: **6 days from the Internshala receipt date** — strict, automated late-penalty.

## Key facts worth remembering without opening the full doc

- **Tech stack is fixed**: Next.js + Tailwind CSS, required. AI-assisted is fine, blind copy-paste is explicitly penalized.
- **The therapist profile is the ONLY source of truth for content** — never invent facts about Maya not in the profile doc (https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit). Office images: https://drive.google.com/drive/folders/1fbAMSdqGF_ltNc0Jiltkplr_C26kRvLs
- **Video walkthrough (30%) outweighs everything else** — don't treat it as an afterthought tacked on at the end.
- **"Our Office" section must not exist in the original template** and must blend seamlessly with the rest of the site's design (explicitly flagged `[IMP]` in the brief).
- Services section needs exactly **3 services**, each described, chosen from the profile (anxiety/panic, trauma/EMDR, burnout — natural picks).
- SEO matters in copy: specialty + "Santa Monica" location keywords in headings naturally, not stuffed.

## Maintenance rule

After completing any phase or making any decision that changes scope, the data model of the content, or file layout, update `docs/03-PROGRESS-LOG.md` (new entry) AND `gmt-assignment-progress`'s status snapshot in the same session. If the assignment brief itself changes (re-check the Notion link), update `docs/01-ASSIGNMENT-BRIEF.md` and this file's summary together.
