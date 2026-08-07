/**
 * Remove HTML elements and Vue components marked with `data-no-copy`
 * from markdown source before copying.
 */
export function stripNoCopy(markdown: string): string {
  let result = markdown

  const paired =
    /<([A-Za-z][\w.-]*)([^>]*?\sdata-no-copy(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?[^>]*)>[\s\S]*?<\/\1\s*>/gi
  const selfClosing =
    /<([A-Za-z][\w.-]*)([^>]*?\sdata-no-copy(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?[^>]*)\s*\/>/gi
  const voidOrOpen =
    /<([A-Za-z][\w.-]*)([^>]*?\sdata-no-copy(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?[^>]*)>/gi

  let previous = ''
  while (result !== previous) {
    previous = result
    result = result.replace(paired, '').replace(selfClosing, '')
  }

  result = result.replace(voidOrOpen, '')

  return `${result.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()}\n`
}
