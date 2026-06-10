---
name: new-page
description: >-
  Add a new App Router page/route to this Next.js site following the repo's
  conventions. Use when the user wants to add a new page, route, or section
  (e.g. /now, /contact). Covers the page.tsx + layout.tsx (metadata/viewport)
  split, the Container/SimpleLayout primitives, path aliases, and nav.
---

# Adding a page

Routes live under [`app/`](../../../app/). A top-level route is a folder containing a
`page.tsx`, and (by convention here) a `layout.tsx` that owns the route's metadata.

## Steps

1. **Create the folder:** `app/<route>/`. The folder name is the URL segment
   (`app/now/` → `/now`).

2. **`page.tsx`** — the page body. Server Component by default. Wrap content in a
   layout primitive from `components/layout/`:
   - `SimpleLayout` (`title` + `intro` + children) for a standard titled page —
     this is the most common choice (see `app/uses/page.tsx`, `app/projects/page.tsx`).
   - `Container` for full custom layout (see `app/page.tsx`).

   ```tsx
   import SimpleLayout from '@/components/layout/SimpleLayout'

   const NowPage = () => {
     return (
       <SimpleLayout
         title='What I’m doing now'
         intro='A snapshot of my current focus.'
       >
         {/* content */}
       </SimpleLayout>
     )
   }

   export default NowPage
   ```

3. **`layout.tsx`** — exports `metadata` (and `viewport` for `colorScheme`). Mirror
   the existing route layouts (`app/uses/layout.tsx`):

   ```tsx
   import { Metadata, Viewport } from 'next'

   export const metadata: Metadata = {
     title: 'What I’m doing now',
     description: 'A snapshot of my current focus.',
   }

   export const viewport: Viewport = {
     colorScheme: 'dark light',
   }

   const Layout = ({ children }: { children: React.ReactNode }) => (
     <>{children}</>
   )

   export default Layout
   ```

   > `colorScheme`/`themeColor` must go in `viewport`, **not** `metadata` (Next 15+).

4. **Add it to the nav** if it should be discoverable — edit the links in
   `components/layout/Header.tsx` (and `Footer.tsx` if relevant).

## Conventions

- Use the `@/*` alias (repo root) for imports; `~/*` maps to `public/`.
- Imports are auto-sorted — run `pnpm lint:fix` if `simple-import-sort` complains.
- Keep components Server Components unless they need interactivity; add `'use client'`
  only when using hooks/handlers (see `components/articles/BackButton.tsx`).

## Verify

`pnpm typecheck && pnpm lint:strict && pnpm build`, then `pnpm dev` and open the new route.
