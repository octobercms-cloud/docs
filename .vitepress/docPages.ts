import { sidebar } from './sidebar'
import type { DefaultTheme } from 'vitepress'

export type DocPage = {
  title: string
  link: string
  url: string
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
