// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Ecosystem from './Ecosystem.vue'
import Logo from './Logo.vue'
import NavActions from './NavActions.vue'
import NavScreenActions from './NavScreenActions.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-title-before': () => h(Logo),
      'nav-bar-content-after': () => h(NavActions),
      'nav-screen-content-after': () => h(NavScreenActions),
      'sidebar-nav-before': () => h(Ecosystem),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
