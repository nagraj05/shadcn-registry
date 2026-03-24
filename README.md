# shadcn-new — UI Registry

> A curated directory of **160+ shadcn-compatible component libraries**, all in one place.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## What is this?

**shadcnregistry* is a Next.js app that acts as a living index of UI component libraries built on top of [shadcn/ui](https://ui.shadcn.com). Instead of hunting across GitHub and npm, you get a single searchable registry to explore and navigate them all.

Each library lives under its own route (e.g. `/magicui`, `/aceternity`, `/motion-primitives`) with a dedicated page. Libraries that are fully integrated show their components.

---

## Libraries Included

Some highlights from the 160+ libraries indexed:

| Category | Libraries |
|---|---|
| **Animation** | `animate-ui`, `motion-primitives`, `pacekit`, `react-bits`, `animbits` |
| **Charts & Data** | `shadcn-dashboard`, `lytenyte`, `gammaui` |
| **Icons** | `lucide-animated`, `heroicons-animated`, `icons-animated`, `svgl` |
| **AI / Agents** | `assistant-ui`, `agents-ui`, `prompt-kit`, `ai-blocks`, `ai-elements` |
| **Maps** | `shadcn-map`, `shadcnmaps`, `mapcn` |
| **Auth** | `auth0`, `clerkchamaac` |
| **Editors** | `shadcn-editor`, `plate`, `prosekit` |
| **Payments** | `billingsdk`, `paykit-sdk`, `commercn` |

...and many more.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Install

```bash
git clone https://github.com/your-username/shadcn-new.git
cd shadcn-new
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the registry.

### Build

```bash
npm run build
npm run start
```

---

## Utility Script

Use `create_pages.py` to scaffold `page.tsx` files for any new library folders:

```bash
# Create page.tsx only in folders that don't have one
python create_pages.py

# Overwrite all existing page.tsx files (e.g. after updating the template)
python create_pages.py --overwrite
```

The script skips folders that already have a `page.tsx`, so it's safe to re-run at any time.

---

## Adding a New Library

1. Create a folder under `app/` with the library's slug name
2. Run `python create_pages.py` to scaffold a Coming Soon page
3. Replace the scaffolded `page.tsx` with actual library content when ready
4. Add the slug to the `SECTIONS` array in `app/page.tsx` so it appears in the registry grid

---

## Tech Stack

- **[Next.js 15](https://nextjs.org)** — App Router
- **[TypeScript](https://www.typescriptlang.org)** — Type safety
- **[Tailwind CSS v4](https://tailwindcss.com)** — Styling
- **[shadcn/ui](https://ui.shadcn.com)** — Component primitives
- **[Lucide React](https://lucide.dev)** — Icons
- **[motion/react](https://motion.dev)** — Animations

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or build and deploy anywhere that runs Node.js.

---

## Contributing

Spotted a missing library? PRs welcome.

1. Fork the repo
2. Add a folder under `app/` with the library slug
3. Add the slug to `SECTIONS` in `app/page.tsx`
4. Open a PR with a short description of the library

---

## License

MIT