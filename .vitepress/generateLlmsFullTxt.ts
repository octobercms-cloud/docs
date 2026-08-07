import { join } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import { cleanMarkdownContent } from './cleanMarkdownContent'
import { getDocPages, linkToMarkdownPath } from './docPages'

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
