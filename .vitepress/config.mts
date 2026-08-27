import { join } from 'node:path'
import { defineConfig, type HeadConfig } from 'vitepress'
import { copyMarkdownPages, markdownPagesPlugin } from './copyMarkdownPages'
import { writeLlmsFullTxt } from './generateLlmsFullTxt'
import { writeLlmsTxt } from './generateLlmsTxt'
import { addMarkdownAlternateHead } from './markdownAlternateHead'
import { sidebar } from './sidebar'
import tailwindcss from '@tailwindcss/vite'
import type { SiteConfig } from 'vitepress'

const srcDir = 'docs'
const outDir = '.vitepress/dist'
const root = process.cwd()

const env = (globalThis as { process?: { env?: Record<string, string | undefined> } })
  .process?.env

const googleAnalyticsId = env?.GOOGLE_ANALYTICS_ID

const isProduction = env?.NODE_ENV === 'production'

const analyticsHead: HeadConfig[] =
  isProduction && googleAnalyticsId
    ? [
        [
          'script',
          {
            async: '',
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
          },
        ],
        [
          'script',
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');`,
        ],
      ]
    : []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  buildEnd(siteConfig: SiteConfig) {
    writeLlmsTxt(siteConfig.outDir, siteConfig.srcDir)
    writeLlmsFullTxt(siteConfig.outDir, siteConfig.srcDir)
    copyMarkdownPages(siteConfig.outDir, siteConfig.srcDir)
  },
  transformPageData(pageData) {
    addMarkdownAlternateHead(pageData)
  },
  cleanUrls: true,
  head: [
    ['link', { rel: 'llms', href: '/llms.txt' }],
    ['link', { rel: 'llms-full', href: '/llms-full.txt' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
    ['link', { href: 'https://fonts.bunny.net/css?family=albert-sans:400,700', rel: 'stylesheet' }],
    [
      'meta',
      {
        name: 'robots',
        content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
      },
    ],
    ['meta', { property: 'og:type', content: 'article' }],
    ...analyticsHead,
  ],
  description: 'Official documentation for octobercms.cloud',
  lang: 'en-US',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.octobercms.cloud',
  },
  srcDir,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    siteTitle: false,
    sidebar,
  },
  title: 'octobercms.cloud',
  vite: {
    plugins: [
      tailwindcss(),
      markdownPagesPlugin({
        outDir: join(root, outDir),
        srcDir: join(root, srcDir),
      }),
    ],
  },
})
