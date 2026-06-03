<!--
Sync Impact Report
Version change: N/A -> 1.0.0
Modified principles: Initial setup
Added sections: Core Principles, Technical Stack, Coding Standards, Governance
Templates requiring updates:
- .specify/templates/plan-template.md ✅ updated
- .specify/templates/spec-template.md ✅ updated
- .specify/templates/tasks-template.md ✅ updated
Follow-up TODOs: None
-->
# Personal Portfolio Constitution

## Core Principles

### Server-First Architecture
Prioritize React Server Components (RSC) by default; only use "use client" when interactivity or hooks are strictly required.
**Rationale**: Maximize performance, minimize bundle size, and leverage Next.js App Router capabilities.

### Type-Safe Engineering
Use TypeScript in strict mode with explicit interface definitions. Write modular, DRY, and well-documented code.
**Rationale**: Ensure maintainability, reduce runtime errors, and provide clear contracts for components.

### Accessible & SEO Optimized
Ensure perfect accessibility (a11y) and SEO optimization using highly semantic HTML.
**Rationale**: Guarantee inclusive user experience and maximize organic discoverability.

### Minimalist Executive Design
Adhere to "simple but elegant" aesthetic: high contrast, sophisticated typography, generous whitespace, and zero unnecessary visual noise.
**Rationale**: Maintain professional focus on engineering capabilities and work.

### Professional Micro-interactions
Use Framer Motion for subtle, professional animations and smooth scroll behavior. Avoid flashy or distracting transitions.
**Rationale**: Enhance the premium feel without compromising the minimalist aesthetic.

## Technical Stack

- Framework: Next.js (App Router)
- Language: TypeScript (Strict mode)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Deployment: Vercel

## Coding Standards

- Modular and DRY implementation.
- Semantic HTML for all components.
- Explicit interfaces for all props and data models.
- Prioritize RSC over Client Components.

## Governance

This constitution supersedes all other practices. Amendments require a proposed change, review of impact on principles, and approval by the architect. All code changes must be verified against these principles during review.

**Version**: 1.0.0 | **Ratified**: 2026-05-31 | **Last Amended**: 2026-05-31
