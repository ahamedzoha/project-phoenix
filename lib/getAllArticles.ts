import glob from 'fast-glob'
import * as path from 'path'

const contentRootDirectory = path.join(process.cwd(), 'content')

async function importArticle(articleFilename: string) {
  const { meta, default: component } = await import(
    `${contentRootDirectory}/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: contentRootDirectory,
  })
  const articles = await Promise.all(articleFilenames.map(importArticle))
  return articles.sort((a, z) => (a.date > z.date ? -1 : 1))
}
