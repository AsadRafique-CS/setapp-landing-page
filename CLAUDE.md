# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check with TypeScript then build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Tech Stack

- React 19 with TypeScript
- Vite 7 for bundling and dev server
- Tailwind CSS 3 for styling (configured but content paths empty in tailwind.config.js)
- ESLint with TypeScript and React hooks plugins

## Project Structure

- `src/` - Application source code
  - `main.tsx` - Entry point, renders App in StrictMode
  - `App.tsx` - Root component
- `tsconfig.json` - References tsconfig.app.json (browser) and tsconfig.node.json (Node/tooling)
