import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { sidebar } from './sidebar'
import type { DefaultTheme } from 'vitepress'

export type DocPage = {
  title: string
  link: string
  url: string
}

export function linkToMarkdownPath(link: string): string {
  if (link === '/') {
    return 'index.md'
  }

  return `${link.replace(/^\//, '')}.md`
}

export function markdownFileToPublicPath(filename: string): string {
  return `/${filename}`
}

export function markdownFileToCanonicalUrl(filename: string): string {
  const base = 'https://docs.octobercms.cloud'

  if (filename === 'index.md') {
    return `${base}/`
  }

  return `${base}/${filename.replace(/\.md$/, '')}`
}

export function getMarkdownPageFiles(srcDir: string): string[] {
  return readdirSync(srcDir).filter((file) => file.endsWith('.md'))
}

function flattenSidebar(items: DefaultTheme.SidebarItem[]): DocPage[] {
  const pages: DocPage[] = []

  for (const item of items) {
    if ('items' in item && item.items) {
      pages.push(...flattenSidebar(item.items))
      continue
    }

    if ('link' in item && item.link && item.text) {
      const path = item.link === '/' ? '/' : item.link.replace(/\/$/, '')
      pages.push({
        title: item.text,
        link: item.link,
        url: `https://docs.octobercms.cloud${path}`,
      })
    }
  }

  return pages
}

export function getDocPages(): DocPage[] {
  return flattenSidebar(sidebar)
}
