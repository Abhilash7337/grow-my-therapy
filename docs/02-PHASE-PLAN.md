# Grow My Therapy — Phased Execution Plan

Read [01-ASSIGNMENT-BRIEF.md](01-ASSIGNMENT-BRIEF.md) first — that has the *what*. This file is the *how/when*, broken into phases in the order to actually execute them. Do them **in order** — later phases depend on earlier ones.

After finishing each phase: update [03-PROGRESS-LOG.md](03-PROGRESS-LOG.md) with what was done, and mark the phase checkbox below as done.

---

## Phase 0 — Setup & Reconnaissance
**Goal:** project skeleton exists, deploys, and you deeply understand what you're cloning before touching redesign.

- [ ] Create GitHub repo (public) for this project
- [ ] Scaffold Next.js app with Tailwind CSS (`create-next-app`, App Router, TypeScript recommended)
- [ ] Push initial commit, connect to Vercel (or Netlify) for continuous deploy — confirm the blank app deploys live
- [ ] Visit https://www.conejovalleycounseling.com/home yourself:
  - List every homepage section top-to-bottom (hero, nav, services, about, testimonials, footer, etc.)
  - Note fonts, spacing rhythm, breakpoints, color usage (of the *original*, before redesign)
  - Screenshot desktop + mobile views for reference
- [ ] Read the Dr. Maya Reynolds profile doc + office images folder fully (already summarized in the brief, but look at the actual images yourself)
- [ ] Decide on a design token strategy (Tailwind `theme.extend.colors` or CSS variables) so the theme swap in Phase 3 is a config change, not a find-and-replace

**Exit criteria:** empty-but-deployed Next.js+Tailwind site live on Vercel, GitHub repo public, and a written section-by-section map of the reference site.

---

## Phase 1 — Clone the Homepage (Part 1, UI Accuracy — 25%)
**Goal:** pixel-accurate structural clone of the reference site, still using ITS original layout/spacing/typography — no redesign yet.

- [ ] Build each section as its own component, matching original section order
- [ ] Match grid systems, spacing, padding, margins
- [ ] Match typography (font families/sizes/weights) as closely as possible with web-safe or Google Fonts equivalents
- [ ] Build fully responsive: desktop, tablet, mobile breakpoints
- [ ] Use Tailwind config / CSS variables for colors and spacing (not hardcoded values) — this pays off in Phase 3
- [ ] Self-check against the Part 1 checklist in the brief

**Exit criteria:** side-by-side with the original, structure/spacing/responsiveness matches. Content can still be the original placeholder content at this point.

---

## Phase 2 — Theme & Color Palette Redesign (Part 2A — 25%)
**Goal:** swap the entire visual theme to something new, cohesive, and aesthetic — fitting a calm/trustworthy therapy brand for Maya.

- [ ] Choose primary / secondary / accent colors (distinct from the original palette)
- [ ] Update Tailwind theme tokens / CSS variables centrally (should NOT require touching every component if Phase 1 was done right)
- [ ] Apply consistently: backgrounds, buttons, links, borders, icons — everything
- [ ] Check contrast/readability (WCAG-ish sanity check) and overall visual balance
- [ ] Self-check against Theme & Colors checklist in the brief

**Exit criteria:** site has a new, coherent color identity; nothing still uses the old palette.

---

## Phase 3 — Copywriting (Part 2B — part of the 10%)
**Goal:** replace every piece of homepage text using Dr. Maya Reynolds' profile as the only source of truth.

- [ ] Rewrite H1 + hero subtext — SEO keywords: specialty (anxiety/trauma/burnout) + location (Santa Monica)
- [ ] Rewrite nav/button copy
- [ ] Services section: pick and write **3 services** from the profile (e.g. Anxiety & Panic Treatment, Trauma-Informed/EMDR Therapy, Burnout Recovery for High Achievers), each with a short description
- [ ] Write About section from her bio/approach/philosophy
- [ ] Write FAQs grounded in her practice details (format: in-person + telehealth, CA-based, modalities, who she works with)
- [ ] Pass over all copy for natural SEO keyword integration (no keyword stuffing)
- [ ] It's fine to draft with AI, but rewrite/tighten every line yourself before finalizing — this is explicitly graded

**Exit criteria:** zero leftover placeholder/original-site text anywhere on the page.

---

## Phase 4 — Images (Part 2C — part of the 10%)
**Goal:** every image is new, intentional, and matches the theme + profile.

- [ ] Add Dr. Maya Reynolds' headshot (from the profile doc) to the About/hero area
- [ ] Source/select images for every remaining section (hero, services, about background, etc.) that match the new palette and feel intentional — not generic stock
- [ ] Optimize images (Next.js `<Image>`, proper sizing) for performance
- [ ] Self-check against Images checklist in the brief

**Exit criteria:** no original-site images remain; every image supports its section's message and the new theme.

---

## Phase 5 — New "Our Office" Section (Part 3 — 10%)
**Goal:** one brand-new homepage section that didn't exist in the original.

- [ ] Decide placement in the homepage flow (after About or before Contact/Footer are natural spots)
- [ ] Write section title + short supporting copy about the office environment (natural light, uncluttered, calm — per profile)
- [ ] Add 2–3 real office images from the Drive folder (https://drive.google.com/drive/folders/1fbAMSdqGF_ltNc0Jiltkplr_C26kRvLs)
- [ ] Optionally mention address/location, in-person+telehealth availability, safety/privacy/comfort
- [ ] Style it with the exact same spacing/typography/color system as the rest of the site — it must NOT look bolted-on
- [ ] Self-check against New Section checklist in the brief, especially the `[IMP]` seamless-integration point

**Exit criteria:** the section reads as a natural, original part of the homepage, not an addition.

---

## Phase 6 — Full QA Pass
**Goal:** catch anything the phase-by-phase build missed.

- [ ] Re-run through ALL checklists in 01-ASSIGNMENT-BRIEF.md part by part, ticking each box for real
- [ ] Test responsiveness again at real breakpoints (not just resizing the browser a little — actual mobile width)
- [ ] Check for any leftover original copy, images, or colors anywhere (including alt text, meta tags, favicon)
- [ ] Run Lighthouse or similar for basic performance/accessibility sanity check
- [ ] Proofread all copy for typos/tone consistency

**Exit criteria:** every checklist item across all 4 parts is genuinely true.

---

## Phase 7 — Deploy & Repo Finalization
**Goal:** both required links are live and clean.

- [ ] Final deploy to Vercel/Netlify, confirm production URL works end-to-end (no console errors, no broken images)
- [ ] Clean up GitHub repo: sensible README (what it is, tech stack, live link), remove dead code/commented-out blocks, confirm repo is public
- [ ] Double check env vars / secrets are NOT committed

**Exit criteria:** live URL + public GitHub URL both ready to paste into the submission form.

---

## Phase 8 — Video Walkthrough (Part 4 — 30%, highest weight)
**Goal:** a confident ~5 minute Loom client demo.

- [ ] Write a loose talking outline (not a rigid script) covering: intro/framing as "here's your new site draft", desktop walkthrough section by section, mobile walkthrough, why the design/copy choices fit her (non-technical, benefit-driven language)
- [ ] Do a dry run once, timing it — trim if over ~5 minutes
- [ ] Record in Loom, screen + webcam if possible
- [ ] Watch it back once for clarity/pacing/filler words before finalizing the link

**Exit criteria:** Loom link ready, ~5 minutes, matches the Part 4 checklist in the brief.

---

## Phase 9 — Final Submission
**Goal:** submit on time, all three deliverables correct.

- [ ] Gather: live site link, public GitHub repo link, Loom video link
- [ ] Re-check the 6-day deadline from your actual Internshala receipt date (fill into 01-ASSIGNMENT-BRIEF.md §8 if not already done)
- [ ] Submit via the "Submit Assignment" form on the Notion page
- [ ] Log final submission (date/time + all 3 links) in 03-PROGRESS-LOG.md

**Exit criteria:** submitted, confirmed, logged. Assignment complete.
