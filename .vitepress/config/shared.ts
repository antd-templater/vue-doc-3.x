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
      provider: 'algolia',
      options: {
        appId: 'KBECLAQG8C',
        apiKey: 'ef24ff79749d9bb0d0534b816aea1de8',
        indexName: 'antd-templaterio',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    },
  },

  sitemap: {
    hostname: `https://antd-templater.github.io/${base.replace(/^\/+/, '')}`,
  },

  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: false,
  cleanUrls: false,
  srcDir: src,
  base: base,
})
