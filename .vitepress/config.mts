import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',

  vite: {
    plugins: [tailwindcss()],
  },

  title: 'octobercms.cloud',
  description: 'Official documentation for octobercms.cloud',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.bunny.net' }],
    ['link', { href: 'https://fonts.bunny.net/css?family=albert-sans:400,700', rel: 'stylesheet' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Deploying October', link: '/deploying-october' },
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
