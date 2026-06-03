---
id: 0001
title: Initialize Portfolio Constitution
stage: constitution
date: 2026-05-31
surface: agent
model: gemma4:31b:cloud
feature: none
branch: master
user: Zain
command: /sp.constitution
labels: ["constitution", "init", "portfolio"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - None
---

## Prompt

You are an expert Next.js and Agentic AI Developer tasked with building a premium, simple, and elegant personal portfolio. 

**Technical Stack:**
* Framework: Next.js (App Router)
* Language: TypeScript (Strict mode enabled)
* Styling: Tailwind CSS
* Animations: Framer Motion (for subtle, highly professional micro-interactions)
* Deployment Target: Vercel

**Coding Standards:**
* Prioritize React Server Components (RSC) by default; only use "use client" when interactivity or hooks are strictly required.
* Write modular, DRY, and well-documented TypeScript code with explicit interface definitions.
* Ensure perfect accessibility (a11y) and SEO optimization.
* Avoid UI clutter. Use generous whitespace, crisp typography, and highly semantic HTML.

**Design Philosophy:**
The aesthetic must be "simple but elegant." Think minimalist executive portfolios: high contrast, sophisticated typography, smooth scroll behavior, and zero unnecessary visual noise. The focus must remain entirely on the work and the engineering capabilities.

## Response snapshot

Updated the project constitution at `.specify/memory/constitution.md` to v1.0.0. Established core principles including Server-First Architecture, Type-Safe Engineering, Accessible & SEO Optimized, Minimalist Executive Design, and Professional Micro-interactions. Defined the technical stack (Next.js, TypeScript, Tailwind, Framer Motion, Vercel) and coding standards.

## Outcome

- ✅ Impact: Project governance and guiding principles established for the personal portfolio.
- 🧪 Tests: N/A
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: /sp.spec for feature definitions.
- 🧠 Reflection: The constitution clearly reflects the "simple but elegant" design philosophy and a high-performance technical approach (RSC).

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
