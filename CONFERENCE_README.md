
# ICAN UK & District Society — Conference Hub 2026

This build contains:
- Original homepage (index.html) - preserved, linked to conference
- New Conference Hub (conference.html) - premium, editorial, institutional

## Structure
- index.html -> links to conference.html
- conference.html -> 20 sections per spec:
  Header, Hero with Conference Core (CSS 3D), Event Strip, Why Attend, CPD, Themes, Audience Constellation, Previous Conference Gallery, Results, Previous Speakers, Agenda (filters + drawer), Speakers (3D tilt + modal), Pricing (early bird countdown), Venue (map placeholder), Travel/Accommodation/Visa accordions, Sponsors, FAQ, Final CTA, Footer

## Design System Reused
- Colors: INK #111820, NAVY #17242D, FOREST #244E3B, BRASS #B09563, IVORY #F2EFE7 etc.
- Typography: Inter + Space Grotesk
- Motion: cubic-bezier(.22,1,.36,1), transform/opacity only
- 3D: CSS 3D first (Conference Core with rings, orbs), Three.js 0-10% ambient particles only

## Data Architecture
- js/conference/data.js is single source of truth
  Edit: dates, venue, tickets, themes, audience, speakers, sessions, sponsors, FAQs
  No hardcoding across HTML

## How to Update Real Content
1. Replace placeholders in data.js:
   [VENUE NAME], [VENUE ADDRESS], [POSTCODE], [PLATINUM SPONSOR] etc.
2. Replace placeholder images in conference.html gallery and speaker imgs with real photography
3. Update registration links in pricing cards (currently alert placeholder)
4. Replace map placeholder in #venueMap with Google Maps embed when venue confirmed
5. Update earlyBirdDeadline in data.js - countdown auto-hides when passed

## Performance & Accessibility
- IntersectionObserver for reveals
- requestAnimationFrame for scroll
- prefers-reduced-motion respected
- Keyboard: agenda sessions and speaker cards are focusable, Enter/Space opens
- Drawer and modal: Escape closes, backdrop click closes
- Three.js disabled on low-end, prefers-reduced-motion, no WebGL
- Images lazy loaded below fold

## Linking
- Homepage header nav: Conference -> conference.html
- Homepage conference section CTA -> conference.html
- Conference header logo -> index.html (breadcrumb ICAN UK / Conference)
- Conference nav sticky, progress bar shows scroll

## Running
No build step. Open index.html or conference.html in browser, or npx serve .

## Files to Keep Locked
All original 20 files preserved in css/ and js/ folders, plus new conference files.

