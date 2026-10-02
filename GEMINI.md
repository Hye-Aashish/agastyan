# Project Design & UI/UX Guidelines

Always apply the following rules when building, editing, or styling user interface components in this codebase:

## 1. Visual Aesthetics & Theme
- Use curated modern Tailwind color palettes (e.g. `emerald`, `orange`, `amber`, `slate`, `zinc`).
- Ensure full support for dark mode (`dark:bg-gray-950`, `dark:text-white`, `dark:border-gray-800`).
- Use smooth gradients, glassmorphism (`backdrop-blur-md`), and layered soft shadows (`shadow-lg`, `shadow-xl`).

## 2. Interactive Animations & Micro-Interactions
- Add smooth hover effects (`hover:scale-105 transition-all duration-300`).
- Ensure all buttons, links, and cards have clear hover, focus, and active states.
- Use Framer Motion (`motion.div`, `whileInView`, `initial`) or AOS for polished scroll animations.

## 3. Mobile First & Responsiveness
- Test and optimize for all screen sizes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Ensure no elements overflow or get squished on mobile screens.
- Keep touch targets comfortable (`py-3 px-6`).

## 4. Skills & Reference
- Skill Reference: [modern-ui-design](file:///d:/agastyan/agastyan/.agents/skills/modern-ui-design/SKILL.md)
