import { execFileSync } from 'node:child_process'
import { statSync } from 'node:fs'
import { isAbsolute, relative, resolve } from 'node:path'

function resolveFilePath(filePath: string): string {
  return isAbsolute(filePath) ? filePath : resolve(process.cwd(), filePath)
}

function getLastUpdatedDateString(filePath: string): string | null {
  const absolutePath = resolveFilePath(filePath)
  const cwd = process.cwd()
  const gitPath = relative(cwd, absolutePath)

  try {
    const value = execFileSync(
      'git',
      ['--no-pager', 'log', '-1', '--format=%cs', '--', gitPath],
      {
        cwd,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      },
    ).trim()

    if (value) {
      return value
    }
  } catch {
    // Fall back to file system metadata when Git data is unavailable.
  }

  try {
    return statSync(absolutePath).mtime.toISOString().slice(0, 10)
  } catch {
    return null
  }
}

export function getLastUpdatedLine(filePath: string): string | null {
  const date = getLastUpdatedDateString(filePath)
  return date ? `Last updated: ${date}` : null
}

export function appendLastUpdatedContext(content: string, filePath: string): string {
  const lastUpdatedLine = getLastUpdatedLine(filePath)

  if (!lastUpdatedLine) {
    return content.trim()
  }

  return `${content.trim()}\n\n${lastUpdatedLine}`
}
