# Reference Site Recon — conejovalleycounseling.com/home

Captured 2026-09-10 during Phase 0, by actually browsing https://www.conejovalleycounseling.com/home (desktop + mobile), reading computed styles, and capturing full-page reference screenshots. This is the map to build Phase 1's clone against — section order, copy, fonts, colors, layout notes.

It's a **Squarespace** site (evident from class/structure patterns and scroll-triggered lazy-mounted sections) — that explains the airy spacing and sharp-cornered, underlined-text buttons rather than filled pill buttons.

## Reference screenshots (use these for side-by-side comparison while building)

Saved in [`reference-screenshots/`](reference-screenshots/) — open these next to your local dev server during Phase 1 to check your clone against the real thing:

| File | What it is |
|---|---|
| [`reference-screenshots/original-desktop-fullpage.png`](reference-screenshots/original-desktop-fullpage.png) | Full homepage, top to bottom, desktop width (1440px) — the main comparison reference |
| [`reference-screenshots/original-mobile-fullpage.png`](reference-screenshots/original-mobile-fullpage.png) | Full homepage, top to bottom, mobile width (390px) |
| [`reference-screenshots/original-desktop-hero.png`](reference-screenshots/original-desktop-hero.png) | Just the hero + nav, desktop — sharpest detail for the top-of-fold, where first-impression accuracy matters most |
| [`reference-screenshots/original-mobile-hero.png`](reference-screenshots/original-mobile-hero.png) | Just the hero + nav, mobile |

These were captured with a headless Chrome/Puppeteer script that scrolls through the page first (this site reveals sections via scroll-triggered animation, so a naive single screenshot misses most content — simple screenshot tools will give you a mostly-blank page for this particular site, that's not a bug in your setup). **Re-generate these anytime the reference site changes** — ask Claude to redo the Phase 0 recon capture, or see the same technique noted in `03-PROGRESS-LOG.md`.

## Section-by-section map (top → bottom, verified against the full-page screenshots above)

1. **Header / Nav** — Logo "Conejo Valley" (serif) + "FAMILY COUNSELING" (small-caps, letter-spaced, teal). Full nav on desktop: ABOUT · OUR TEAM · SPECIALTIES · METHODS · FAQS · pill-shaped bordered **CONTACT** button (this is the one rounded/pill element on the whole site — everything else is sharp-cornered). Mobile: collapses to a hamburger icon.

2. **Hero**
   - Eyebrow label (all-caps, letter-spaced, small): "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA"
   - H1 (large serif, weight ~300): "Rebuild your foundation on solid ground and finally begin to *thrive*." — the word **"thrive" is a teal script/cursive font**. This "one accent word per heading in cursive teal" is a **deliberate recurring pattern** — it repeats on "help", "expertise", "&", "specialties", and "you" further down the page. Replicate this pattern with Maya's headings.
   - Subtext: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow."
   - CTA: "BOOK AN APPOINTMENT" — underlined all-caps text, transparent background, `border-radius: 0`.
   - Background: warm cream.
   - Two photos beside the hero text: family-at-beach lifestyle photo (left) + a cropped wave close-up (right edge, partially off-canvas on desktop).

3. **"You're holding onto hope..." + intro** — two-column block: left side has the bold statement heading, right side has the "AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY" eyebrow + paragraph, plus a wave/ocean photo alongside. Cream background continues.

4. **"Who we `help`" — 3 cards**: Adults / Couples / Children & Teens (accent word "help" in cursive). Each card = photo + heading + 2–3 sentence description. White background (first hard contrast shift from cream → white).

5. **Full-bleed photo quote band** — dark-overlay family beach photo with white text on top: *"You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together."* This is the one section that breaks from the neutral cream/white/tan palette — a strong full-bleed image moment as a pattern interrupt.

6. **"Our areas of `expertise`" — tag list** (accent word "expertise" in cursive): DISSOCIATION, TRAUMA, FAMILY CONFLICT, SPECIAL NEEDS PARENTING, DEPRESSION, MARRIAGE, ANXIETY, RELATIONSHIPS, CHILDREN, TEENS, INTIMACY & CONNECTION, …AND MORE. Two-column stacked rows with thin horizontal dividers, all-caps letter-spaced text, white background.

7. **"How We Work" section** — heading "We're here to make a difference.", a longer philosophy paragraph, ends with underlined text link "LEARN MORE ABOUT US". Background shifts to warm **tan/beige** (the third of three alternating neutral tones — cream / white / tan — that the whole page rotates through).

8. **"Honoring where you've been `&` helping shape where you're headed."** — a short standalone mid-page heading (accent on the ampersand), right-aligned on cream background. Functions as a transition/breather before the specialties grid.

9. **"Our `specialties` include..." — 4 cards in a 2×2 grid**: Trauma, EMDR, Dissociation, Special Needs Parenting (accent word "specialties" in cursive). Each card: heading + short paragraph + "LEARN MORE" link. White background.

10. **Final CTA band**: "Find a therapist who is the right fit for `you`." (accent on "you") + supporting paragraph + "BOOK NOW" button (same underlined-text style as hero CTA). Cream background.

11. **Footer** — thin teal top border, then columns:
    - Conejo Valley logo + intro line about visiting the office or scheduling virtual appointments
    - **NAVIGATE**: Home / About / FAQs / Contact
    - **CONTACT**: address (925 Broadbeck Dr, Suites 200 and 225, Newbury Park, CA 91320), email, phone, "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley"
    - **OUR TEAM**: list of therapist names
    - Bottom bar: Terms | Privacy Policy | Disclaimer | credit line

## Typography (from computed styles)

- **Body font**: generic sans-serif stack, `15px` base, body text color `rgb(43,43,43)` (near-black, not pure black — softer).
- **Heading font**: `beaufort-pro, serif` — H1 measured at `~55px`, `font-weight: 300` (light weight serif, elegant not bold).
- **Button/label font**: `Muli` (sans-serif), used for the all-caps CTA/eyebrow text with wide letter-spacing.
- **Recurring pattern**: one accent word per major heading rendered in a teal **script/cursive** font (seen on "thrive" and "specialties") — this is a nice, easy-to-copy signature detail for Maya's homepage.

### Font substitution plan (Google Fonts, since `beaufort-pro`/`Muli` are paid/deprecated)
- Serif heading → **Playfair Display** or **Cormorant Garamond** (light weight) — similar elegant-light serif feel.
- Sans body/label → **Inter** or **Mulish** (Mulish is the modern rename/successor of Muli — use it directly if you want a closer match).
- Script accent → **Playfair Display Italic** (safe, on-brand) or a cursive Google Font like **Petit Formal Script** / **Parisienne** if you want closer to the original's handwriting feel — test both, don't overdo it (use only on 1 word per heading, matching the original's restraint).

## Color notes

- Hero/base button+text: `rgb(43,43,43)` — a warm near-black, **not** pure `#000`.
- CTA text-buttons: fully transparent background (`rgba(0,0,0,0)`), thin underline, `border-radius: 0` (sharp corners) — used for "Book an Appointment" / "Book Now" / "Learn More". **Exception**: the nav's "CONTACT" button is a bordered pill shape (rounded) — the only rounded element on the site.
- Three alternating section background tones: **cream** (hero and early sections), **white** (cards/lists), **warm tan/beige** ("How We Work"). This alternation is how the page creates rhythm without borders — replicate the *pattern* (3 alternating neutrals) even though Phase 2 swaps the actual hues for Maya's new palette.
- Accent color: a muted **teal/sage** on the "FAMILY COUNSELING" wordmark and the cursive accent words.

## Layout/spacing signature

- Very generous vertical whitespace between blocks — sections breathe, nothing feels cramped.
- Text blocks are narrow/centered-ish even on wide desktop viewports (comfortable reading measure, not full-bleed text).
- Cards (Who We Help, Specialties) are simple stacked or side-by-side blocks — no heavy shadows/borders, photo + text only.
- CTAs are consistently underlined text, never filled/rounded buttons — a strong, easy-to-enforce design rule for the clone.

## What this means for Phase 1 (clone)

- Build one flexible `<Section>` wrapper component that takes a `background: "cream" | "white" | "tan"` token — every homepage section is one of these three, in this order. This directly sets up the Phase 2 theme swap (change 3 CSS variables, not 12 components).
- Build a reusable `<EyebrowLabel>`, `<SectionHeading accent="word">` (renders one word in the script/accent font+color), and `<UnderlineCTA>` component — these three repeat throughout the page and are the site's whole visual identity.
- Match the section order exactly as listed above (12 sections/footer) for Part 1's "section order, grid systems, hierarchy" checklist item.
