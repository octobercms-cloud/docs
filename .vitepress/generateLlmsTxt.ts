import { join } from 'node:path'
import { writeFileSync } from 'node:fs'
import { getDocPages } from './docPages'

export function generateLlmsTxtContent(): string {
  const pages = getDocPages()

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
