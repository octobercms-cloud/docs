import { defineConfig, type HeadConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { writeLlmsFullTxt } from './generateLlmsFullTxt'
import { writeLlmsTxt } from './generateLlmsTxt'
import tailwindcss from '@tailwindcss/vite'
import type { SiteConfig } from 'vitepress'

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
    writeLlmsTxt(siteConfig.outDir)
    writeLlmsFullTxt(siteConfig.outDir, siteConfig.srcDir)
  },
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
    ['link', { href: 'https://fonts.bunny.net/css?family=albert-sans:400,700', rel: 'stylesheet' }],
    ...analyticsHead,
  ],
  description: 'Official documentation for octobercms.cloud',
  lang: 'en-US',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.octobercms.cloud',
  },
  srcDir: 'docs',
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
    plugins: [tailwindcss()],
  },
})
