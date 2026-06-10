---
name: write-article
description: >-
  Create and publish a new MDX blog article in this Next.js site. Use whenever
  the user wants to add, write, draft, or publish a blog post / article for the
  site. Covers the content/ location, frontmatter schema, code-fence rules for
  Shiki highlighting, images, and how the article is rendered and routed.
---

# Writing an article

Articles live in [`content/`](../../../content/) as `.mdx` files and are rendered by
the pipeline in [`lib/mdx/index.ts`](../../../lib/mdx/index.ts) (via
`next-mdx-remote` + `rehype-pretty-code`). The dynamic route is
`app/articles/[slug]/page.tsx`, and the index/home pages list articles through
`getAllPostsMeta`.

## Steps

1. **Create the file:** `content/<slug>.mdx`. The **filename is the slug** and the
   URL is `/articles/<slug>`. Use kebab-case (e.g. `content/scaling-nextjs.mdx`).

2. **Add frontmatter** (all four fields are required — `getPostBySlug` reads them):

   ```mdx
   ---
   title: 'Your Article Title'
   author: 'Azaz Ahamed'
   date: '2026-06-10'
   description: 'One-sentence summary used for the listing and meta description.'
   ---
   ```

   - `date` must be `YYYY-MM-DD` (formatted by `lib/formatDate.ts`).
   - `description` is shown on the articles list and used as the page meta description.

3. **Write the body** in Markdown/MDX. The article is wrapped in the Tailwind
   `prose` styles (see the `typography` config in `tailwind.config.js`), so headings,
   lists, tables, blockquotes, and inline `code` are styled automatically. GFM
   (tables, strikethrough, task lists) is enabled via `remark-gfm`.

4. **Code blocks — use lowercase language ids.** Syntax highlighting is Shiki via
   `rehype-pretty-code`. The fence language must be a valid lowercase Shiki id
   (`js`, `ts`, `jsx`, `tsx`, `bash`, `json`, `css`, `html`, `python`, …). A
   capitalized or unknown id (e.g. ` ```JavaScript `) will **not** highlight.

   Optional features supported by `styles/mdx.css`:
   - Title: ` ```js title="example.js" `
   - Highlight lines: ` ```js {1,4-6} `
   - Highlight words: ` ```js /useState/ `

   Code blocks render on a dark panel in **both** light and dark site themes (single
   `github-dark` theme) — this is intentional, don't add a light theme.

5. **Images** go in `public/images/blog/` and are referenced from the MDX as
   `/images/blog/<file>`. The first image in the file is auto-extracted as the
   article's social/OG image (`extractImageUrls` in `lib/mdx/index.ts`). Remote
   image hosts must be allow-listed in `next.config.mjs` (`images.remotePatterns`).

## Verify

- `pnpm dev`, open `/articles/<slug>`, confirm content renders and **code blocks are
  highlighted** (toggle dark mode to sanity-check).
- `pnpm build` to confirm the new slug is picked up by `generateStaticParams` and
  prerenders without errors.
