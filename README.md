## Astro Navbar Component Template

This micro project serves as a ready-to-use template for building a responsive navigation bar on the Astro platform. Rather than being part of a larger application, it is intentionally scoped to a single component, allowing developers to study, reuse, and adapt it without the complexity of a full project setup. Built with Astro.js, TypeScript, and vanilla CSS, it demonstrates core Astro concepts including component architecture, scoped styling, and performance conscious development in a focused and digestible way.

---

### Table of Contents

- [Tech Stack](#tech-stack)
- [Preview](#preview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Commands](#commands)
- [Key Concepts Demonstrated](#key-concepts-demonstrated)
- [Performance Notes](#performance-notes)
- [License](#license)
- [Contact](#contact)

---

### Tech stack

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) ![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Fontsource](https://img.shields.io/badge/Fontsource-000000?style=flat&logo=fontsource&logoColor=white)

---

### Preview

Sticky navbar with mobile hamburger toggle.

![Image](https://github.com/user-attachments/assets/2853cd82-0029-4849-98f7-ace7803bc078)

---

### Features

- **Scoped CSS**: styles are isolated to the component by default via Astro's scoped styling.
- **Fully Responsive**: collapses into an animated hamburger menu on mobile.
- **Sticky Behavior**: navbar stays visible as the user scrolls.
- **TypeScript**: nav links typed via a `NavLink` interface.
- **Zero Framework JS**: no React, Vue, or Svelte (pure Astro + Vanilla JS).
- **Fontsource Fonts**: self hosted `Barlow` font for performance and privacy.

---

### Getting Started

#### Prerequisites

- Node.js `v18+`
- npm or pnpm

#### Installation

1. Clone the repo: `git clone https://github.com/kovymun/astro-navbar-component.git`
2. Navigate into the project: `cd astro-navbar-component`
3. Install dependencies: `npm install` OR `npm i`
4. Start development server: `npm run dev`

---

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                              |
| `npm run dev`             | Starts local dev server at `localhost:4321`                                        |
| `npm run build`           | Build your production site to `./dist/`                                            |
| `npm run preview`         | Preview your build locally, before deploying                                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                   |
| `npm run astro -- --help` | Get help using the Astro CLI                                                       |
| `npx astro sync`          | Generates TypeScript types so VS Code and TypeScript can understand `.astro` files |

---

### Key Concepts Demonstrated

| Concept                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| **Astro Frontmatter**   | Using the component script section to define typed data       |
| **Scoped Styling**      | How Astro scopes CSS to components by default                 |
| **Vanilla JS in Astro** | Using `<script>` tags for browser-side interactivity          |
| **TypeScript in Astro** | Typing component data with a `NavLink` interface              |
| **Deferred JS**         | Astro automatically adds `defer` to script tags at build time |
| **Partial Hydration**   | Why this component is NOT an island: no framework JS needed   |
| **Responsive Design**   | Mobile first CSS with animated hamburger toggle               |
| **Fontsource**          | Self hosted fonts installed as npm packages                   |

---

### Performance Notes

- Ships **less than 1kb of JavaScript** to the browser.
- Astro automatically applies `defer` to the script tag at build time.
- Fonts are **self hosted** via Fontsource, no external network requests.
- No framework bundle overhead, e.g. no React, Vue, or Svelte.

---

### License

MIT: free to use, adapt, and build upon.

---

### Contact

- Connect with me on [LinkedIn](https://www.linkedin.com/in/koveshan-munsami/)
