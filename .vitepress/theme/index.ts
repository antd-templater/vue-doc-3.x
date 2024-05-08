import { h } from 'vue'
import { Theme } from 'vitepress'
import { defineAsyncComponent } from 'vue'
import { defineClientComponent } from 'vitepress'
import AntdComponentPlugin from '@antd-templater/library-3.x'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app }) {
    app.component('PreRedirect', defineClientComponent(() => import('@/preset/PreRedirect.vue')))
    app.component('CodeRunner', defineAsyncComponent(() => import('@/preset/CodeRunner.vue')))
    app.use(AntdComponentPlugin)
  },
} satisfies Theme
