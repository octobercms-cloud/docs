import { markdownFileToCanonicalUrl, markdownFileToPublicPath } from './docPages'
import type { PageData } from 'vitepress'

export function addMarkdownAlternateHead(pageData: PageData): void {
  if (!pageData.relativePath.endsWith('.md')) {
    return
  }

  pageData.frontmatter.head ??= []
  pageData.frontmatter.head.push(
    [
      'link',
      {
        rel: 'alternate',
        type: 'text/markdown',
        href: markdownFileToPublicPath(pageData.relativePath),
      },
    ],
    [
      'link',
      {
        rel: 'canonical',
        href: markdownFileToCanonicalUrl(pageData.relativePath),
      },
    ],
  )
}
