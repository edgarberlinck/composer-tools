# composer-tools

Boilerplate using **Next.js**, **NextAuth**, **Prisma 7**, **PostgreSQL**, **shadcn/ui**, **Biome**, and **Bun** runtime.

## Included pages

- `/login` – authentication page
- `/create-account` – account creation page
- `/dashboard` – empty protected dashboard placeholder

## Prerequisites

- Bun `>= 1.3.6`
- PostgreSQL database

## Environment variables

Copy `.env.example` to `.env` and adjust values:

```bash
cp .env.example .env
```

## Install and run (Bun)

```bash
bun install
bun run dev
```

## Biome (lint/format)

```bash
bun run lint
bun run lint:fix
bun run format
```

## Prisma

```bash
bunx prisma generate
bunx prisma migrate dev --name init
```

## Tests and coverage

```bash
bun run test
```

Vitest is configured with **100% coverage thresholds**.
