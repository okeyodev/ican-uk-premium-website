# ICAN UK & District Society — Lightweight Cinematic 3D Website

Modern CSS + Vanilla JS + Minimal Three.js

## Philosophy
> **A modern HTML/CSS/JS website with a cinematic 3D visual layer.**
> NOT a Three.js website with HTML around it.

CSS does: cards, magazine, timeline, network lines, depth, perspective, floating core, shadows, transitions.
Three.js does: subtle particle field only (500-800 desktop / 100-250 mobile), behind CSS.

## Tech Stack
HTML5, CSS3, Vanilla JS, CSS 3D (perspective + preserve-3d), Web Animations API, IntersectionObserver, requestAnimationFrame, CSS Custom Properties, Minimal Three.js (dynamic import)

No React, Next, Vue, Tailwind, TypeScript required for core.

## Visual Identity
Ink #111820, Navy #17242D, Forest #244E3B, Brass #B09563, Oxblood #642F32, Ivory #F2EFE7, Stone #D9D5CC, White #F8F7F3
Inter + Space Grotesk, editorial uppercase headings.

## Structure
HEADER, HERO (CSS 3D stage), ABOUT (ivory), HISTORY (timeline), EXECUTIVE COMMITTEE (diamond cards), AIMS & OBJECTIVES (constellation), MAGAZINE (3D book), EVENTS (countdown), MEMBER HUB (portal), FINAL CTA (core loop), FOOTER

## 3D Strategy
Layered stage: Background -200px, Network -120px, Core 0-80px, Highlights +100px, Particles +180px + Three canvas -220px.

Hero scroll: core moves backward, rotates slightly, network expands, content fades via CSS vars --page-scroll.

## Performance
transform/opacity only, passive listeners, lerp scroll 0.08, IntersectionObserver reveals, Three disabled on low-end + prefers-reduced-motion.

## Run
Open index.html. No build step needed. For local server: npx serve .
