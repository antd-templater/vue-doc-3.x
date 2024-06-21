import { defineConfig } from 'vitepress'
import { loadEnv } from 'vitepress'

const dir = ''
const cwd = process.cwd()
const env = loadEnv(dir, cwd)
const src = env.VITE_DOC_SRC.replace(/^\/$/, '')
const base = env.VITE_DOC_BASE.replace(/^\/$/, '')

export const shared = defineConfig({
  title: 'Antd Templater',
  description: 'Backend Management System Template - based on AntDesignVue component library',

  head: [
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Antd Templater' }],
    ['meta', { property: 'og:title', content: 'Antd Templater | Backend Management System Template' }],
    ['meta', { property: 'og:image', content: 'https://antd-templater.github.io/resource/Ant-Templater3.x.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}/logo-mini.svg` }],
    ['link', { rel: 'icon', type: 'image/png', href: `${base}/logo-mini.png` }],
  ],

  themeConfig: {
    logo: {
      src: `/logo-mini.svg`,
      width: 24,
      height: 24,
    },

    socialLinks: [
      { icon: 'github', link: `${base}/redirect?\${domain}.com/antd-templater/template-3.x` },
    ],

    search: {
      provider: 'local',
    },
  },

  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: false,
  cleanUrls: false,
  srcDir: src,
  base: base,
})
