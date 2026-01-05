# ALX Listing App

A simple listing page inspired by Airbnb — an intermediate-level Next.js + TypeScript project that demonstrates building a listings UI, component-driven architecture, and clear interfaces.

## Project goals

- Build a responsive listing page (Airbnb-like) showing property cards, images, and metadata.
- Use TypeScript to define clear interfaces for data models and component props.
- Organize UI into reusable components and keep constants and assets separated.

## Project structure

- `components/` — Reusable React/Next.js UI components (cards, buttons, layout primitives). These are the building blocks for the listing pages.
- `interfaces/` — TypeScript interfaces and types describing props, listing shapes, and other data contracts.
- `constants/` — Application-wide constants (colors, string literals, sample data keys) used across components.
- `public/assets/` — Static assets such as images and icons served by Next.js (used in listings and UI).

Other notable files/folders:
- `app/` — Next.js App Router pages and layouts (where page entry points live).
- `package.json` — Project scripts and dependencies.

## Getting started (run locally)

Prerequisites:
- Node.js (recommended 18+)
- npm (or a compatible package manager — yarn, pnpm)

From the project root (where `package.json` is located), run the following in PowerShell:

```powershell
# install dependencies
npm install

# start the development server
npm run dev
```

Open http://localhost:3000 in your browser (Next.js defaults to port 3000) to view the app.

If your project uses a different script name, check `package.json` for available scripts (for example, `dev`, `build`, `start`).

## Notes

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

