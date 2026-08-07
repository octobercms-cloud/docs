import { join } from 'node:path'
import { sidebar } from './sidebar'
import { writeFileSync } from 'node:fs'
import type { DefaultTheme } from 'vitepress'

type DocPage = {
  title: string
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
        url: `https://docs.octobercms.cloud${path}`,
      })
    }
  }

  return pages
}

export function generateLlmsTxtContent(): string {
  const pages = flattenSidebar(sidebar)

  const docEntries = pages
    .map(
      (page) =>
        `- ${page.title}\n  ${page.url}`,
    )
    .join('\n\n')

  return `# October Cloud

> Official managed hosting platform for October CMS.

October Cloud is the official deployment platform for October CMS. It provides
managed infrastructure, deployments, databases, storage, domains, logging,
queue workers, scheduled tasks, and other platform services.

Documentation is intended to be freely indexed, searched, summarized,
and cited by AI assistants and search engines.

## Documentation

${docEntries}
`
}

export function writeLlmsTxt(outDir: string): void {
  writeFileSync(join(outDir, 'llms.txt'), generateLlmsTxtContent(), 'utf8')
}
