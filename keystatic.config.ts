import { collection, config, fields } from '@keystatic/core'

// Local editing in dev (edit files directly — no GitHub login), GitHub-backed
// editing in production (write from the deployed site, commits to the repo).
// GitHub mode turns on only when BOTH production AND the App env vars are set,
// so `pnpm dev` never does an OAuth round-trip and `pnpm build` still works
// before the App exists. GitHub mode needs all of:
//   KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET,
//   KEYSTATIC_SECRET, NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
const useGitHubStorage =
  process.env.NODE_ENV === 'production' &&
  Boolean(process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG)

const storage = useGitHubStorage
  ? ({ kind: 'github', repo: 'ahamedzoha/project-phoenix' } as const)
  : ({ kind: 'local' } as const)

export default config({
  storage,
  ui: {
    brand: { name: 'Project Phoenix' },
  },
  collections: {
    articles: collection({
      label: 'Articles',
      // Each entry is content/<slug>.mdx — matches the existing files and the
      // lib/mdx render pipeline (slug = filename).
      path: 'content/*',
      slugField: 'title',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Hide this article from the published site.',
          defaultValue: false,
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'Azaz Ahamed',
        }),
        date: fields.date({
          label: 'Published date',
          defaultValue: { kind: 'today' },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        content: fields.mdx({
          label: 'Body',
        }),
      },
    }),
  },
})
