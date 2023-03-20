import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename: string) {
  const { meta, default: component } = await import(
    `/app/writeups/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })
  const articles = await Promise.all(articleFilenames.map(importArticle))
  return articles.sort((a, z) => (a.date > z.date ? -1 : 1))
}
