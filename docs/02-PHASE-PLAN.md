# Grow My Therapy — Phased Execution Plan

Read [01-ASSIGNMENT-BRIEF.md](01-ASSIGNMENT-BRIEF.md) first — that has the *what*. This file is the *how/when*, broken into phases in the order to actually execute them. Do them **in order** — later phases depend on earlier ones.

After finishing each phase: update [03-PROGRESS-LOG.md](03-PROGRESS-LOG.md) with what was done, and mark the phase checkbox below as done.

---

## Phase 0 — Setup & Reconnaissance
**Goal:** project skeleton exists, deploys, and you deeply understand what you're cloning before touching redesign.

- [x] Create GitHub repo (public) for this project
- [x] Scaffold Next.js app with Tailwind CSS (`create-next-app`, App Router, TypeScript recommended)
- [ ] Push initial commit, connect to Vercel (or Netlify) for continuous deploy — confirm the blank app deploys live *(GitHub done; Vercel/Netlify deploy still outstanding — needs the user's own account)*
- [x] Visit https://www.conejovalleycounseling.com/home yourself:
  - List every homepage section top-to-bottom (hero, nav, services, about, testimonials, footer, etc.)
  - Note fonts, spacing rhythm, breakpoints, color usage (of the *original*, before redesign)
  - Screenshot desktop + mobile views for reference
- [ ] Read the Dr. Maya Reynolds profile doc + office images folder fully (already summarized in the brief, but look at the actual images yourself) *(still outstanding — do before Phase 4)*
- [x] Decide on a design token strategy (Tailwind `theme.extend.colors` or CSS variables) so the theme swap in Phase 3 is a config change, not a find-and-replace

**Exit criteria:** empty-but-deployed Next.js+Tailwind site live on Vercel, GitHub repo public, and a written section-by-section map of the reference site.

---

## Phase 1 — Clone the Homepage (Part 1, UI Accuracy — 25%)
**Goal:** pixel-accurate structural clone of the reference site, still using ITS original layout/spacing/typography — no redesign yet.

- [x] Build each section as its own component, matching original section order
- [x] Match grid systems, spacing, padding, margins
- [x] Match typography (font families/sizes/weights) as closely as possible with web-safe or Google Fonts equivalents *(Playfair Display / Inter / Parisienne substitutes per docs/04-SITE-RECON.md)*
- [x] Build fully responsive: desktop, tablet, mobile breakpoints
- [x] Use Tailwind config / CSS variables for colors and spacing (not hardcoded values) — this pays off in Phase 3
- [x] Self-check against the Part 1 checklist in the brief *(image content still placeholder blocks — real photos land in Phase 4, per plan)*

**Exit criteria:** side-by-side with the original, structure/spacing/responsiveness matches. Content can still be the original placeholder content at this point.

---

## Phase 2 — Theme & Color Palette Redesign (Part 2A — 25%)
**Goal:** swap the entire visual theme to something new, cohesive, and aesthetic — fitting a calm/trustworthy therapy brand for Maya.

- [x] Choose primary / secondary / accent colors (distinct from the original palette) — "Dusty rose & warm ash", presented as 3 visual options, user picked Option B
- [x] Update Tailwind theme tokens / CSS variables centrally (should NOT require touching every component if Phase 1 was done right) — only `src/app/globals.css` changed, zero component edits needed
- [x] Apply consistently: backgrounds, buttons, links, borders, icons — everything *(verified: all 10 sections' computed background colors checked in-browser, no leftover original-palette colors anywhere)*
- [x] Check contrast/readability (WCAG-ish sanity check) and overall visual balance *(accent deepened from the picker's #B9808A to #A3707A — ~3.0:1 contrast on cream was too low for the small Header/Footer wordmark text, #A3707A gets it to ~3.8:1; ink-on-cream body text contrast is high)*
- [x] Self-check against Theme & Colors checklist in the brief

**Exit criteria:** site has a new, coherent color identity; nothing still uses the old palette.

---

## Phase 3 — Copywriting (Part 2B — part of the 10%)
**Goal:** replace every piece of homepage text using Dr. Maya Reynolds' profile as the only source of truth.

- [x] Rewrite H1 + hero subtext — SEO keywords: specialty (anxiety/trauma/burnout) + location (Santa Monica)
- [x] Rewrite nav/button copy
- [x] Services section: pick and write **3 services** from the profile (e.g. Anxiety & Panic Treatment, Trauma-Informed/EMDR Therapy, Burnout Recovery for High Achievers), each with a short description *(grid changed from the original's 4 cards to 3, to match this exact requirement — see progress log)*
- [x] Write About section from her bio/approach/philosophy *(repurposed the "How We Work" slot — verbatim profile bio + paraphrased approach)*
- [x] Write FAQs grounded in her practice details (format: in-person + telehealth, CA-based, modalities, who she works with) *(new `FAQSection.tsx` added — wasn't a homepage section in the original, added because the brief lists FAQs as required content)*
- [x] Pass over all copy for natural SEO keyword integration (no keyword stuffing)
- [x] It's fine to draft with AI, but rewrite/tighten every line yourself before finalizing — this is explicitly graded

**Exit criteria:** zero leftover placeholder/original-site text anywhere on the page.

---

## Phase 4 — Images (Part 2C — part of the 10%)
**Goal:** every image is new, intentional, and matches the theme + profile.

- [x] Add Dr. Maya Reynolds' headshot (from the profile doc) to the About/hero area *(extracted directly from the Google Doc's embedded images via the Drive connector — real asset, not stock)*
- [x] Source/select images for every remaining section (hero, services, about background, etc.) that match the new palette and feel intentional — not generic stock *(7 real photos sourced from Pexels — see progress log for the search/selection process and the user's "not too dark, not bland" course-correction)*
- [x] Optimize images (Next.js `<Image>`, proper sizing) for performance *(all sources resized to 1600px max + compressed before adding; served via `next/image` with `sizes` for responsive loading)*
- [x] Self-check against Images checklist in the brief

**Exit criteria:** no original-site images remain; every image supports its section's message and the new theme.

---

## Phase 5 — New "Our Office" Section (Part 3 — 10%)
**Goal:** one brand-new homepage section that didn't exist in the original.

- [x] Decide placement in the homepage flow (after About or before Contact/Footer are natural spots) — placed after Services, before the Final CTA (leads naturally into "ready to book?")
- [x] Write section title + short supporting copy about the office environment (natural light, uncluttered, calm — per profile) — "My Office" / "A calm space to do this work."
- [x] Add 2–3 real office images from the Drive folder — used the 2 reserved from Phase 4 (extracted from the profile doc itself, since the linked Drive folder couldn't be enumerated)
- [x] Optionally mention address/location, in-person+telehealth availability, safety/privacy/comfort — Santa Monica + telehealth-anywhere-in-CA mentioned
- [x] Style it with the exact same spacing/typography/color system as the rest of the site — it must NOT look bolted-on — reuses `Section`/`EyebrowLabel`/`SectionHeading`, same two-column pattern as Intro/About, `tan` background slotted into the existing alternation rhythm
- [x] Self-check against New Section checklist in the brief, especially the `[IMP]` seamless-integration point — confirmed, see progress log

**Exit criteria:** the section reads as a natural, original part of the homepage, not an addition.

---

## Phase 6 — Full QA Pass
**Goal:** catch anything the phase-by-phase build missed.

- [x] Re-run through ALL checklists in 01-ASSIGNMENT-BRIEF.md part by part, ticking each box for real — see progress log entry for the full walk-through; only real gap found was the H1 missing the explicit location keyword, fixed
- [x] Test responsiveness again at real breakpoints (not just resizing the browser a little — actual mobile width) — tested at literal 375px (mobile) and 768px (tablet, the exact Tailwind `md` breakpoint), zero horizontal overflow, nav/grids collapse and expand correctly
- [x] Check for any leftover original copy, images, or colors anywhere (including alt text, meta tags, favicon) — regex-swept the whole `src/` tree (not just the rendered page) for every original-site term/color, zero matches; removed the leftover default Next.js boilerplate SVGs and favicon; replaced with a real on-brand "MR" monogram favicon; deleted the now-dead `PhotoBlock.tsx` component
- [x] Run Lighthouse or similar for basic performance/accessibility sanity check — no Lighthouse CLI in this environment, did a manual equivalent: single H1 confirmed, correct heading hierarchy (H1→H2→H3, no skipped levels), zero images missing alt text, correct `lang="en"`/viewport/charset meta, all colors run through the 5 CSS variables (zero hardcoded hex in components), images served via `next/image` at appropriately-sized responsive widths
- [x] Proofread all copy for typos/tone consistency — re-read the full rendered page text end to end, no typos found, tone consistent (warm, first-person, "I"/"my" throughout — matches the About/Services/Our Office voice already established)

**Exit criteria:** every checklist item across all 4 parts is genuinely true.

---

## Phase 7 — Deploy & Repo Finalization
**Goal:** both required links are live and clean.

- [ ] Final deploy to Vercel/Netlify, confirm production URL works end-to-end (no console errors, no broken images) — **outstanding, needs the user's own Vercel/Netlify account login, Claude cannot do this step alone**
- [x] Clean up GitHub repo: sensible README (what it is, tech stack, live link), remove dead code/commented-out blocks, confirm repo is public — README already covers what/tech-stack/links (placeholders for live URL + Loom left as-is until those exist); deleted `public/images/candidates/` (40 reference-only photos, ~4.5MB, not part of the deliverable); dead code already removed in Phase 6; `gh repo view` confirms the GitHub repo is genuinely PUBLIC
- [x] Double check env vars / secrets are NOT committed — no `.env*` files exist, `.gitignore` already excludes them, grepped `src/` for api-key/secret/token/password patterns — zero matches

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
