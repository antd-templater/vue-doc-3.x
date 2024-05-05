import { h } from 'vue'
import { Theme } from 'vitepress'
import { defineClientComponent } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app }) {
    app.component('PreRedirect', defineClientComponent(() => import('../preset/pre-redirect.vue')))
  },
} satisfies Theme
