import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cleanMarkdownContent } from './cleanMarkdownContent'
import { getMarkdownPageFiles } from './docPages'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'

type MarkdownPagesPluginOptions = {
  outDir: string
  srcDir: string
}

function serveTextFile(
  res: ServerResponse,
  contentType: string,
  content: string,
): void {
  res.setHeader('Content-Type', contentType)
  res.end(content)
}

function createMarkdownMiddleware(
  getFilePath: (pathname: string) => string | undefined,
  transform: (content: string) => string = (content) => content,
): (req: IncomingMessage, res: ServerResponse, next: () => void) => void {
  return (req, res, next) => {
    const [pathname, query] = req.url?.split('?') ?? []
    if (query) {
      next()
      return
    }

    if (pathname?.endsWith('.md')) {
      const filePath = getFilePath(pathname)
      if (!filePath || !existsSync(filePath)) {
        next()
        return
      }

      serveTextFile(
        res,
        'text/markdown; charset=utf-8',
        transform(readFileSync(filePath, 'utf8')),
      )
      return
    }

    if (pathname === '/llms.txt' || pathname === '/llms-full.txt') {
      const filePath = getFilePath(pathname)
      if (!filePath || !existsSync(filePath)) {
        next()
        return
      }

      serveTextFile(
        res,
        'text/plain; charset=utf-8',
        readFileSync(filePath, 'utf8'),
      )
      return
    }

    next()
  }
}

export function copyMarkdownPages(outDir: string, srcDir: string): void {
  for (const file of getMarkdownPageFiles(srcDir)) {
    const content = cleanMarkdownContent(readFileSync(join(srcDir, file), 'utf8'))
    writeFileSync(join(outDir, file), content, 'utf8')
  }
}

export function markdownPagesPlugin({
  outDir,
  srcDir,
}: MarkdownPagesPluginOptions): Plugin {
  const previewMiddleware = createMarkdownMiddleware((pathname) =>
    join(outDir, pathname.slice(1)),
  )
  const devMiddleware = createMarkdownMiddleware(
    (pathname) => join(srcDir, pathname.slice(1)),
    cleanMarkdownContent,
  )

  return {
    name: 'vitepress-markdown-pages',
    configurePreviewServer(server) {
      server.middlewares.use(previewMiddleware)
    },
    configureServer(server) {
      server.middlewares.use(devMiddleware)
    },
  }
}
