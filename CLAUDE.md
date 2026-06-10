# CLAUDE.md

Guidance for working in this repository.

## What this is

A personal site + blog for Azaz Ahamed, built on the **Next.js App Router** and
deployed on Vercel. Articles are authored as MDX and rendered at build time with
syntax-highlighted code blocks.

## Stack

- **Next.js 16** (App Router, React Server Components) · **React 19** · **TypeScript 6**
- **Tailwind CSS v4** + `@tailwindcss/typography` (article prose) + `@tailwindcss/forms`
- **MDX** via `next-mdx-remote/rsc` (`compileMDX`) with `remark-gfm` + `rehype-pretty-code` (Shiki)
- **Keystatic** git-based CMS (`keystatic.config.ts`) for editing `content/*.mdx` at `/keystatic`
- **next-themes** for class-based dark mode · **pnpm** (pinned via `packageManager`) · Node 22 (`.nvmrc`)
- **Jest** (via `next/jest`) + Testing Library

## Commands (always pnpm)

```bash
pnpm dev            # local dev server
pnpm build          # production build (also runs postbuild -> sitemap)
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint .
pnpm lint:strict    # eslint --max-warnings=0 . (CI gate)
pnpm lint:fix       # eslint --fix + prettier
pnpm test           # jest
pnpm format         # prettier -w .
pnpm format:check   # prettier -c . (CI gate)
```

CI (`.github/workflows/lint.yml`) runs typecheck, lint:strict, format:check, test, and build on pnpm + Node 22.

## Architecture

- **`app/`** — App Router routes. Most top-level routes pair a `page.tsx` with a
  `layout.tsx` that exports `metadata` (and `viewport` for `colorScheme`).
- **`content/`** — MDX articles. The slug is the filename. Frontmatter shape:
  `title`, `author`, `date` (`YYYY-MM-DD`), `description`.
- **`lib/mdx/index.ts`** — the article render pipeline. `getPostBySlug` compiles a
  single MDX file with `compileMDX` (remark-gfm + rehype-pretty-code); `getAllPostsMeta`
  lists frontmatter for the index pages. The dynamic route is
  `app/articles/[slug]/page.tsx`.
- **`components/`** — `layout/` (Header, Footer, Container, Card, Prose, …),
  `buttons/`, `links/`, `home/`, `articles/`, `Social/`. Reusable layout primitives:
  `Container`, `SimpleLayout`, `Card`, `Prose`.
- **`lib/`** — `clsxm` (clsx + tailwind-merge), `formatDate`, `helper` (`openGraph`),
  `logger`, `context/Providers` (next-themes `ThemeProvider`).
- **`styles/`** — `globals.css` is the Tailwind v4 entry (`@import "tailwindcss"`,
  `@config "../tailwind.config.js"`, `@custom-variant dark`). `mdx.css` styles code
  blocks. The big theme/typography(`prose`)/plugins config still lives in the legacy
  JS file `tailwind.config.js`, loaded via `@config`.

## Conventions & gotchas

- **Path aliases:** `@/*` → repo root, `~/*` → `public/`.
- **Imports** are auto-sorted (`simple-import-sort`); run `pnpm lint:fix` if ordering fails.
- **MDX code fences must use lowercase Shiki language ids** (`js`, `ts`, `jsx`, `bash`, …).
  A capitalized/unknown id won't highlight.
- **Code blocks render on a dark panel in both light and dark site themes** (see the
  `prose` `--tw-prose-pre-bg`), so a single `github-dark` Shiki theme is intentional.
- `colorScheme` / `themeColor` belong in a `viewport` export, **not** in `metadata`.
- `params`/`searchParams` are **async** in the App Router — `await` them.
- Articles use `next-mdx-remote`, **not** `@next/mdx`. Don't reintroduce `mdx-components.jsx`
  or `withMDX` in `next.config.mjs`.
- The `primary` color (used by buttons/links, e.g. `ring-primary-500`) maps to **teal**
  in `tailwind.config.js`.
- Commits follow **Conventional Commits** (enforced by commitlint via husky).

## Adding content

- **New article (rich editor):** `pnpm dev`, open `/keystatic`, and write in the
  Keystatic editor — it commits `content/<slug>.mdx` directly (git-based, no DB).
  Config: `keystatic.config.ts`; routes under `app/keystatic/` + `app/api/keystatic/`.
  The admin renders chrome-free via `components/layout/SiteFrame.tsx`. Storage is
  `local` (edit locally); switch to `github` mode in the config to edit from the
  deployed site. You can still hand-write MDX — see `.claude/skills/write-article`.
- **New page:** see `.claude/skills/new-page`.
