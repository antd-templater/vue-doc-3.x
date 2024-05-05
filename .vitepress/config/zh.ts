import { defineConfig } from 'vitepress'

function createNav() {
  return [
    { text: '首页', link: '/' },
    { text: '文档', link: '/guide/introduction', activeMatch: '/guide/' },

    {
      text: '<span style="display: inline-block; margin-top: -3px;">组件库 <sup style="font-size: 12px; font-weight: 700; color: #f34d4d">v4.x</sup></span>',
      link: '/library/quick',
      activeMatch: '/library/',
    },

    {
      text: '<span style="display: inline-block; margin-top: -3px;">开发规范 <sup style="font-size: 11px; font-weight: 700; color: #f34d4d">推荐</sup></span>',
      link: '/standard/develop_guide',
      activeMatch: '/standard/',
    },

    {
      text: 'Plugins',
      items: [
        {
          text: 'cz-message-helper',
          link: 'https://github.com/linpengteng/cz-message-helper',
        },
        {
          text: 'js-simpler',
          link: 'https://github.com/linpengteng/js-simpler',
        },
      ],
    },

    {
      text: 'Vue3.x',
      items: [
        {
          text: 'Vue2.x (待定)',
          link: `/redirect?https://antd-templater.\${domain}.io/docs/vue2.x`,
          target: '_blank',
        },
      ],
    },
  ]
}

function createGuide() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '快速上手',
          link: '/guide/introduction',
          items: [
            {
              text: '简介',
              link: '/guide/introduction#简介',
            },
            {
              text: '技术栈',
              link: '/guide/introduction#技术栈',
            },
            {
              text: '开发环境',
              link: '/guide/introduction#开发环境',
            },
            {
              text: '如何使用?',
              link: '/guide/introduction#如何使用',
            },
            {
              text: '游览器支持',
              link: '/guide/introduction#游览器支持',
            },
          ],
        },
      ],
    },

    {
      text: 'Theme 定制主题',
      link: '/guide/themes',
      collapsed: true,
      items: [
        {
          text: '- 主题配置',
          link: '/guide/themes#主题配置',
        },
        {
          text: '- 预设主题',
          link: '/guide/themes#预设主题',
        },
        {
          text: '- 组件主题',
          link: '/guide/themes#组件主题',
        },
        {
          text: '- 局部主题',
          link: '/guide/themes#局部主题',
        },
        {
          text: '- Design Token',
          link: '/guide/themes#使用-design-token',
        },
      ],
    },

    {
      text: 'Layout 布局介绍',
      link: '/guide/layouts',
      collapsed: true,
      items: [
        {
          text: '- UserLayout',
          link: '/guide/layouts#userlayout',
        },
        {
          text: '- BlankLayout',
          link: '/guide/layouts#blanklayout',
        },
        {
          text: '- BasicLayout',
          link: '/guide/layouts#basiclayout',
        },
        {
          text: '- PageFrame',
          link: '/guide/layouts#pageframe',
        },
        {
          text: '- PageView',
          link: '/guide/layouts#pageview',
        },
        {
          text: '- RouteView',
          link: '/guide/layouts#routeview',
        },
      ],
    },

    {
      text: 'Router 路由配置',
      link: '/guide/routers',
      collapsed: true,
      items: [
        {
          text: '- TS 类型定义',
          link: '/guide/routers#ts-类型定义',
        },
        {
          text: '- 动态路由配置',
          link: '/guide/routers#动态路由配置',
        },
        {
          text: '- 静态路由配置',
          link: '/guide/routers#静态路由配置',
        },
        {
          text: '- 定义外部路由',
          link: '/guide/routers#定义外部路由',
        },
      ],
    },

    {
      text: 'TypeScript 全局定义',
      link: '/guide/typescripts',
      collapsed: true,
      items: [
        {
          text: '- 项目级类型',
          link: '/guide/typescripts#项目级类型',
        },
        {
          text: '- 业务数据模型',
          link: '/guide/typescripts#业务数据模型',
        },
      ],
    },

    {
      text: 'Environment 环境变量',
      link: '/guide/environment',
      collapsed: true,
      items: [
        {
          text: '- 预设变量',
          link: '/guide/environment#预设变量',
        },
        {
          text: '- 类型定义',
          link: '/guide/environment#类型定义',
        },
        {
          text: '- 如何使用',
          link: '/guide/environment#如何使用',
        },
      ],
    },

    {
      text: 'Component 组件使用',
      link: '/guide/components',
      collapsed: true,
      items: [
        {
          text: '- 按需加载组件',
          link: '/guide/components#按需加载组件',
        },
        {
          text: '- 全局注册组件',
          link: '/guide/components#全局注册组件',
        },
        {
          text: '- 局部注册组件',
          link: '/guide/components#局部注册组件',
        },
      ],
    },

    {
      text: 'Library-3.x 组件库',
      link: '/guide/library',
      collapsed: true,
      items: [
        {
          text: '- 哪些组件?',
          link: '/guide/library#哪些组件',
        },
        {
          text: '- 如何使用?',
          link: '/guide/library#如何使用',
        },
      ],
    },

    {
      text: 'Axios 定义使用',
      link: '/guide/axios',
      collapsed: true,
      items: [
        {
          text: '- 请求拦截器',
          link: '/guide/axios#请求拦截器',
        },
        {
          text: '- 响应拦截器',
          link: '/guide/axios#响应拦截器',
        },
        {
          text: '- 实例定义器',
          link: '/guide/axios#实例定义器',
        },
        {
          text: '- 接口定义规范',
          link: '/guide/axios#接口定义规范',
        },
      ],
    },

    {
      text: 'Mock 数据说明',
      link: '/guide/mocks',
      collapsed: true,
      items: [
        {
          text: '- 认证接口',
          link: '/guide/mocks#认证接口',
        },
        {
          text: '- 字典接口',
          link: '/guide/mocks#字典接口',
        },
        {
          text: '- 组织接口',
          link: '/guide/mocks#组织接口',
        },
        {
          text: '- 资源接口',
          link: '/guide/mocks#资源接口',
        },
        {
          text: '- 角色接口',
          link: '/guide/mocks#角色接口',
        },
        {
          text: '- 用户接口',
          link: '/guide/mocks#用户接口',
        },
      ],
    },

    {
      text: 'Test 测试工具',
      link: '/guide/tests',
      collapsed: true,
      items: [
        {
          text: '- Vitest',
          link: '/guide/tests#vitest',
        },
        {
          text: '- Cypress',
          link: '/guide/tests#cypress',
        },
      ],
    },
  ]
}

function createLibrary() {
  return [
    {
      text: '参考',
      items: [
        {
          text: '快速开始',
          link: '/library/quick',
        },
        {
          text: '组件概览',
          link: '/library/overview',
        },
      ],
    },

    {
      text: '组件库',
      items: [
        {
          text: '<div style="display: inline-block; width: 120px;">图标组件 ------=></div>SIcon',
          link: '/library/icon',
        },
        {
          text: '<div style="display: inline-block; width: 120px;">图标选择器 ----=></div>SIconSelect',
          link: '/library/icon_select',
        },
        {
          text: '<div style="display: inline-block; width: 120px;">单元格编辑框 --=></div>SEditCell',
          link: '/library/edit_cell',
        },
        {
          text: '<div style="display: inline-block; width: 120px;">文字省略提示 --=></div>SEllipsis',
          link: '/library/ellipsis',
        },
        {
          text: '<div style="display: inline-block; width: 120px;">表格组件 ------=></div>STable',
          link: '/library/table',
        },
        {
          text: '<div style="display: inline-block; width: 120px;">表单组件 ------=></div>SForm',
          link: '/library/form',
        },
        {
          text: '<div style="display: inline-block; width: 120px;">树形组件 ------=></div>STree',
          link: '/library/tree',
        },
      ],
    },
  ]
}

function createStandard() {
  return [
    {
      text: '参考',
      items: [
        {
          text: '项目指南',
          link: '/standard/develop_guide',
          items: [
            {
              text: '目录结构',
              link: '/standard/develop_guide#目录结构',
            },
            {
              text: '依赖管理',
              link: '/standard/develop_guide#依赖管理',
            },
          ],
        },

        { text: 'Vue3 组件规范', link: '/standard/develop_vue3_1' },
        { text: 'Vue3 组件范式', link: '/standard/develop_vue3_2' },
      ],
    },

    {
      text: 'Git 规范',
      base: '/standard/git_',
      items: [
        { text: 'Git 分支管理', link: 'branch' },
        { text: 'Git 版本号管理', link: 'version' },
        { text: 'Git Commit 规范', link: 'commit' },
        { text: 'Git Commit 校验', link: 'check' },
        { text: 'Git Commit 辅助', link: 'helper' },
      ],
    },

    {
      text: 'VSCode',
      base: '/standard/vscode_',
      items: [
        { text: '常用插件推荐', link: 'plugin' },
        { text: '项目开发配置', link: 'config' },
        { text: '项目脚本指令', link: 'script' },
      ],
    },
  ]
}

export const zh = defineConfig({
  title: 'Antd Templater',
  description: '后台管理系统模版 - 基于 Ant Design Vue 组件库',

  themeConfig: {
    nav: createNav(),

    sidebar: {
      '/guide/': createGuide(),
      '/library/': createLibrary(),
      '/standard/': createStandard(),
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} Antd Templater`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
