import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type HeadConfig } from 'vitepress'

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
  srcDir: 'docs',

  vite: {
    plugins: [tailwindcss()],
  },

  lang: 'en-US',

  title: 'octobercms.cloud',
  description: 'Official documentation for octobercms.cloud',
  lastUpdated: true,

  sitemap: {
    hostname: 'https://docs.octobercms.cloud',
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
    ['link', { href: 'https://fonts.bunny.net/css?family=albert-sans:400,700', rel: 'stylesheet' }],
    ...analyticsHead,
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'October CMS', link: '/october' },
          { text: 'Licensing', link: '/licensing' },
        ],
      },
      {
        text: 'Basics',
        items: [
          { text: 'Applications', link: '/applications' },
          { text: 'Databases', link: '/databases' },
          { text: 'Storage', link: '/storage' },
          { text: 'Domains', link: '/domains' },
          { text: 'Deployments', link: '/deployments' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Organizations', link: '/organizations' },
          { text: 'Source Control', link: '/source-control' },
          { text: 'Artisan', link: '/artisan' },
          { text: 'Logs', link: '/logs' },
          { text: 'Build Scripts', link: '/build-scripts' },
          { text: 'Environment Variables', link: '/environment-variables' },
          { text: 'Queue Workers', link: '/queue-workers' },
          { text: 'Scheduled Tasks', link: '/scheduled-tasks' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: 'Support', link: '/support' },
          { text: 'Changelog', link: '/changelog' },
          { text: 'Security & Abuse', link: '/security-and-abuse' },
          { text: 'Terms of Service', link: '/terms-of-service' },
          { text: 'Privacy Policy', link: '/privacy-policy' },
        ],
      },
    ],

  },
})
