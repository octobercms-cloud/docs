import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Introduction', link: '/' },
      { text: 'October CMS', link: '/october' },
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
      { text: 'Commands', link: '/commands' },
      { text: 'Logs', link: '/logs' },
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
]
