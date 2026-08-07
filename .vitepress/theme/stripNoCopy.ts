/**
 * Prepare markdown for clipboard copy:
 * - Drop regions between `<!-- start-no-copy -->` and `<!-- end-no-copy -->`
 * - Unwrap `[data-copy-hidden]` elements (keep inner content)
 */
export function stripNoCopy(markdown: string): string {
  let result = markdown

  result = result.replace(
    /<!--\s*start-no-copy\s*-->[\s\S]*?<!--\s*end-no-copy\s*-->/gi,
    '',
  )

  const unwrapHidden =
    /<([A-Za-z][\w.-]*)([^>]*?\sdata-copy-hidden(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?[^>]*)>([\s\S]*?)<\/\1\s*>/gi

  let previous = ''
  while (result !== previous) {
    previous = result
    result = result.replace(unwrapHidden, '$3')
  }

  return `${result.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()}\n`
}
