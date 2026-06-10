<div align="center">
  <h2>🔋 Azaz Ahamed's Website</h2>
  <p>Personal site &amp; blog built with Next.js, React, Tailwind CSS, and TypeScript.</p>
  <p>Made by <a href="https://azazahamed.com">Azaz Ahamed Zoha</a></p>
</div>

## Stack

- ⚡️ **Next.js 16** (App Router) + ⚛️ **React 19**
- ✨ **TypeScript 6**
- 💨 **Tailwind CSS v4** with the typography plugin for article prose
- 📝 **MDX** articles rendered via `next-mdx-remote`, with **Shiki** (`rehype-pretty-code`)
  syntax highlighting
- 🌗 Dark mode via **next-themes**
- 🃏 **Jest** + Testing Library
- 📏 **ESLint** (flat config) + 💖 **Prettier** (with Tailwind class sorting)
- 🐶 **Husky** + lint-staged + 🤖 **commitlint** (Conventional Commits)
- 🗺 Automatic `sitemap.xml` via next-sitemap
- 👷 **GitHub Actions** for lint, typecheck, format, test, and build

## Getting started

This project uses **pnpm** (Node 22 — see `.nvmrc`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `pnpm dev`         | Start the dev server             |
| `pnpm build`       | Production build (+ sitemap)     |
| `pnpm typecheck`   | Type-check with `tsc`            |
| `pnpm lint:strict` | Lint with zero-warning tolerance |
| `pnpm test`        | Run Jest tests                   |
| `pnpm format`      | Format with Prettier             |

## Writing articles

Add an `.mdx` file under [`content/`](content/) with frontmatter (`title`, `author`,
`date`, `description`). The filename becomes the slug. Use **lowercase** code-fence
languages (` ```js `) so Shiki highlights them. See [`CLAUDE.md`](CLAUDE.md) and
`.claude/skills/write-article` for details.

## Commit convention

Uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), enforced by commitlint.
