export function cleanMarkdownContent(content: string): string {
  return content
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
    .replace(/<!-- start-no-copy -->[\s\S]*?<!-- end-no-copy -->\n?/g, '')
    .replace(
      /<pre data-copy-hidden>\n?([\s\S]*?)<\/pre>\n?/g,
      '```\n$1```\n',
    )
    .trim()
}
