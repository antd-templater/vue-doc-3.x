import { h } from 'vue'
import { Theme } from 'vitepress'
import { defineClientComponent } from 'vitepress'
import AntdComponentPlugin from '@antd-templater/library-3.x'
import PresetCodeRunner from '@/preset/CodeRunner.vue'
import DefaultTheme from 'vitepress/theme'
import './style.less'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout),
  enhanceApp({ app }) {
    app.component('PreRedirect', defineClientComponent(() => import('@/preset/PreRedirect.vue')))
    app.component('CodeRunner', PresetCodeRunner)
    app.use(AntdComponentPlugin)
  },
} satisfies Theme
