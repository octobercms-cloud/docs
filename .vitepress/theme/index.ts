// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Ecosystem from './Ecosystem.vue'
import GetStarted from './GetStarted.vue'
import Logo from './Logo.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-title-before': () => h(Logo),
      'nav-bar-content-after': () => h(GetStarted),
      'sidebar-nav-before': () => h(Ecosystem),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
