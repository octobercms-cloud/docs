import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',

  title: 'October Cloud',
  description: 'Official documentation for octobercms.cloud',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Getting Started', link: '/getting-started/introduction' },
      { text: 'Basics', link: '/basics/applications' },
      { text: 'Advanced', link: '/advanced/organizations' },
      { text: 'Support', link: '/other/support' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Deploying October', link: '/getting-started/deploying-october' },
          { text: 'Licensing', link: '/getting-started/licensing' },
        ],
      },
      {
        text: 'Basics',
        items: [
          { text: 'Applications', link: '/basics/applications' },
          { text: 'Databases', link: '/basics/databases' },
          { text: 'Storage', link: '/basics/storage' },
          { text: 'Domains', link: '/basics/domains' },
          { text: 'Deployments', link: '/basics/deployments' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Organizations', link: '/advanced/organizations' },
          { text: 'Source Control', link: '/advanced/source-control' },
          { text: 'Artisan', link: '/advanced/artisan' },
          { text: 'Logs', link: '/advanced/logs' },
          { text: 'Build Scripts', link: '/advanced/build-scripts' },
          { text: 'Environment Variables', link: '/advanced/environment-variables' },
          { text: 'Queue Workers', link: '/advanced/queue-workers' },
          { text: 'Scheduled Tasks', link: '/advanced/scheduled-tasks' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: 'Support', link: '/other/support' },
          { text: 'Changelog', link: '/other/changelog' },
          { text: 'Security & Abuse', link: '/other/security-and-abuse' },
          { text: 'Terms of Service', link: '/other/terms-of-service' },
          { text: 'Privacy Policy', link: '/other/privacy-policy' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/octobercms/october' },
    ],
  },
})
