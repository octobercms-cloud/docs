import { join } from 'node:path'
import { writeFileSync } from 'node:fs'
import { getDocPages, linkToMarkdownPath } from './docPages'
import { getLastUpdatedLine } from './lastUpdated'

export function generateLlmsTxtContent(srcDir: string): string {
  const pages = getDocPages()

  const docEntries = pages
    .map((page) => {
      const filePath = join(srcDir, linkToMarkdownPath(page.link))
      const lastUpdatedLine = getLastUpdatedLine(filePath)

      return [
        `- ${page.title}`,
        `  ${page.url}`,
        lastUpdatedLine ? `  ${lastUpdatedLine}` : null,
      ]
        .filter(Boolean)
        .join('\n')
    })
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

export function writeLlmsTxt(outDir: string, srcDir: string): void {
  writeFileSync(join(outDir, 'llms.txt'), generateLlmsTxtContent(srcDir), 'utf8')
}
