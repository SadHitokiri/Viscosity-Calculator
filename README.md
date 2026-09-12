# Viscosity Calculator

A mobile-first web calculator for technicians in the Production Department.

The app lets a technician select a measuring device, enter the measured production time in seconds, and immediately see:

- OTK Time
- Viscosity in cSt
- The selected device coefficient K

The calculator is fully client-side. It has no backend, database, authentication, or API.

## Languages

The interface supports:

- Latvian
- Russian

Latvian is the default language.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Vitest
- ESLint

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality Checks

Run type checking:

```bash
npm run typecheck
```

Run linting:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Completion Note

This application was fully completed by vibecoding with Codex.
