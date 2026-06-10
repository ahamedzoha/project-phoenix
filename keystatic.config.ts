import { collection, config, fields } from '@keystatic/core'

// Local (git-based) editing: run `pnpm dev` and open /keystatic.
// To edit from the deployed site instead, switch storage to:
//   storage: { kind: 'github', repo: 'ahamedzoha/project-phoenix' }
// and create a GitHub App (Keystatic walks you through it at /keystatic).
export default config({
  storage: {
    kind: 'local',
  },
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
