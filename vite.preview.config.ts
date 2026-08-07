import { join } from 'node:path'
import { defineConfig } from 'vite'
import { markdownPagesPlugin } from './.vitepress/copyMarkdownPages'

const root = process.cwd()

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: '.vitepress/dist',
  },
  plugins: [
    markdownPagesPlugin({
      outDir: join(root, '.vitepress/dist'),
      srcDir: join(root, 'docs'),
    }),
  ],
})
