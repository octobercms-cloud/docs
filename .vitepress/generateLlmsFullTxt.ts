import { join } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import { getDocPages } from './docPages'

function linkToMarkdownPath(link: string): string {
  if (link === '/') {
    return 'index.md'
  }

  return `${link.replace(/^\//, '')}.md`
}

function cleanMarkdownContent(content: string): string {
  return content
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
    .replace(/<!-- start-no-copy -->[\s\S]*?<!-- end-no-copy -->\n?/g, '')
    .replace(
      /<pre data-copy-hidden>\n?([\s\S]*?)<\/pre>\n?/g,
      '```\n$1```\n',
    )
    .trim()
}

export function generateLlmsFullTxtContent(srcDir: string): string {
  const pages = getDocPages()
  const sections = pages.map((page) => {
    const filePath = join(srcDir, linkToMarkdownPath(page.link))
    const content = cleanMarkdownContent(readFileSync(filePath, 'utf8'))
    return content
  })

  return `# October Cloud Documentation\n\n${sections.join('\n\n---\n\n')}\n`
}

export function writeLlmsFullTxt(outDir: string, srcDir: string): void {
  writeFileSync(
    join(outDir, 'llms-full.txt'),
    generateLlmsFullTxtContent(srcDir),
    'utf8',
  )
}
