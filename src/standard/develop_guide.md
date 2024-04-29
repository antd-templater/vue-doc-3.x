---
aside: false
---

# 项目指南

## 目录结构

```bash
  ├── .husky                               # 由 npx husky init 生成 (Git Hook 工具)
  │   ├── commit-msg                       # 规范 git message 提交和格式检查 (使用 commitlint)
  │   ├── pre-commit                       # 执行 git 提交时, 对提交源码进行检查 (使用 lint-staged)
  │
  ├── .vscode                              # VSCode 编辑器配置
  │   ├── extensions.json                  # VSCode 推荐安装的插件
  │   ├── launch.json                      # VSCode 本地开发调试配置
  │   ├── settings.json                    # VSCode 项目开发风格/格式化配置 (ESLint、Prettier等)
  │
  ├── cypress                              # Cypress 资源配置
  │   ├── downloads                        # 下载 - 资源存储区
  │   ├── fixtures                         # 定义 - 本地静态数据
  │   ├── support                          # 储存 - 测试辅助资源
  │   │   ├── commands.ts                  #  support -> 定义 自定义命令 - cy.[command]
  │   │   ├── component-index.html         #  support -> 定义 组件测试 - 首页
  │   │   ├── component.ts                 #  support -> 定义 组件测试 - 资源
  │
  ├── dist                                 # 由 pnpm build 构建的本地工程
  ├── node_modules                         # 由 pnpm install 创建的本地依赖包
  │
  ├── public                               # 静态资源 (不参与构建)
  │   ├── favicon.ico                      # 网站 favicon.ico 图标
  │   ├── logo.png                         # 网站 logo 图片, 通常在 html 模版中引用
  │   ├── msw.js                           # mock service worker (mock response)
  │
  ├── src                                  # 源代码
  │   ├── api                              # 定义与后端交互的接口
  │   │   ├── user.js                      # 示例: 规范1 - 文件名 根据后台接口 (如 /user/add 定义user)
  │   │   ├── auth.js                      # 示例: 规范2 - 文件名【 camelCase 】命名
  │   │
  │   ├── assets                           # 静态资源
  │   │   ├── logo                         # 示例: 规范1 - 分组名 根据内容进行文件夹
  │   │   │   ├── logo_light.png           # 示例: 规范2 - 文件名【 kebab_case 】命名
  │   │
  │   ├── components                       # 公共组件
  │   │   ├── BaseSearchQuery              # 示例: 建议1 - 文件名 以类型化单词开头 (如 Base)
  │   │   ├── BaseIconSelect               # 示例: 规范1 - 文件名 应倾向于完整单词而不是缩写
  │   │   ├── BaseSvgIcon                  # 示例: 规范2 - 文件名【 PascalCase 】命名
  │   │
  │   ├── configure                        # 默认配置 (建议【 default + 类型 】+【 camelCase 】命名)
  │   │   ├── defaultRouter.ts             # 预设定义 常规路由 (根路由、外部路由、异常路由、静态路由)
  │   │   ├── defaultSettings.ts           # 预设定义 前端整体 风格/主题/布局 等配置选项，在 store/app.ts 中用于初始值
  │   │   ├── presetDirective.ts           # 预设定义 Vue指令 操作权限 (示例 v-action)
  │   │   ├── presetEnvironment.ts         # 预设定义 环境变量 (源自于 .env.xxxx 配置)
  │   │   ├── presetThemeColors.ts         # 预设定义 主题色库 (例 极客蓝、拂晓蓝、薄暮)
  │   │
  │   ├── declare                          # 全局 TS 类型定义 (建议【 PascalCase 】命名)
  │   │   ├── Axios.d.ts                   # 预设定义 Axios 相关类型 (AxiosSorter ...)
  │   │   ├── Global.d.ts                  # 预设定义 JSX API / Window API 类型
  │   │   ├── ImportMeta.d.ts              # 预设定义 Vite Environment 类型
  │   │
  │   ├── layout                           # 布局组件库
  │   │   ├── components                   # 储存仅布局组件依赖的组件
  │   │   │   ├── LayoutAvatar             # 基础布局组件 - 头像组件 Avatar
  │   │   │   ├── LayoutBreadcrumb         # 基础布局组件 - 面包屑组件 Breadcrumb
  │   │   │   ├── LayoutLogo               # 基础布局组件 - 图标栏组件 Logo
  │   │   │   ├── LayoutMultiTab           # 基础布局组件 - 多标签组件 MultiTab
  │   │   │   ├── LayoutSettingDrawer      # 基础布局组件 - 配置选项组件 SettingDrawer
  │   │   │                                #
  │   │   ├── BasicLayout.tsx              # 基础布局组件 (含 Layout.Sider、Layout.Header、Layout.Content + RouterView、Avatar ...)
  │   │   ├── BlankLayout.tsx              # 空白布局组件 (仅有 RouterView)
  │   │   ├── PageFrame.tsx                # 页面 Frame 布局组件 (适用 iframe 外部资源访问)
  │   │   ├── PageView.tsx                 # 页面/路由布局组件 (加载 Layout.Content/RouterView 对应的 Vue 组件, 指定了容器样式)
  │   │   ├── RouteView.tsx                # 页面/路由布局组件 (加载 Layout.Content/RouterView 对应的 Vue 组件, 无相关样式)
  │   │   ├── UserLayout.tsx               # 用户路由布局组件 (仅有 RouterView + 定制容器样式，一般用于用户登录页的路由)
  │   │
  │   ├── mock                             # 模拟数据交互 - (规范与api保持一致)
  │   │   ├── user                         # 示例: 用户接口
  │   │   │   ├── addUserInfo.ts           # 示例: 用户接口 - 新增
  │   │   │   ├── getUserInfoList.ts       # 示例: 用户接口 - 查询
  │   │   │                                #
  │   │   ├── setup.ts                     # 定义 setupWorker (配合 public/msw.js 实现 mock response)
  │   │
  │   ├── model                            # 数据模型 TS 类型定义 (建议【 PascalCase 】命名)
  │   │   ├── Tree.d.ts                    # 定义 Tree 树形结构模型
  │   │   ├── User.d.ts                    # 定义 User 用户信息模型
  │   │
  │   ├── plugin                           # 定义引用第三方插件
  │   │   ├── dayjs.ts                     # 导入引用 dayjs 日期插件
  │   │   ├── pinia.ts                     # 导入引用 pinia 状态管理库 (集成了 pinia-plugin-persist)
  │   │   ├── vue-ls.ts                    # 导入引用 vue-ls 储存管理
  │   │
  │   ├── router                           # 动态路由处理
  │   │   ├── generate-routes.ts           # 解析/转换/生成 动态路由 (Route)
  │   │   ├── generate-typing.d.ts         # 解析/转换/生成 类型定义
  │   │
  │   ├── store                            # pinia 状态储存 (建议【 camelCase 】命名)
  │   │   ├── app.ts                       # 定义存储 前端整体 风格/主题/布局 等配置
  │   │   ├── router.ts                    # 定义存储 Vue路由 (动态路由、静态路由、解析生成动态路由)
  │   │   ├── tag.ts                       # 定义存储 多标签页 (记录标签、缓存标签、移除标签)
  │   │   ├── user.ts                      # 定义存储 用户信息 (用户登录/退出、用户信息)
  │   │
  │   ├── styles                           # 样式定义/覆盖 (建议【 kebab_case 】命名)
  │   │   ├── customize.less               # 自定义样式 (例 flex-auto、flex-none、text-ellipsis)
  │   │   ├── normalize.less               # 重置默认样式 (关于 html、body、h1 ~ h6、p、-webkit-scrollbar)
  │   │   ├── nprogress.less               # 重写覆盖 nprogress 进度条样式
  │   │   ├── override.less                # 覆盖 ant design vue 组件样式 (目前仅覆盖 ant-drawer 部分样式)
  │   │
  │   ├── utils                            # 工具类方法 (建议【 camelCase 】命名)
  │   │   ├── common.ts                    # 定义 通用工具类 (数值四舍五入、输出指定格式的日期、取出节点文本、封装请求参数)
  │   │   ├── request.ts                   # 定义 Axios 实例 (Request拦截器、Response拦截器、预设 baseURL / timeout)
  │   │   ├── router.ts                    # 定义 layout 中 FrameView 布局组件中 提取 route link API
  │   │
  │   ├── views                            # 视图路由组件库 (建议【 PascalCase 】.vue 命名)
  │   │   ├── auth                         # 模块 - 认证管理
  │   │   │   ├── Login.vue                # 组件 - 用户登录
  │   │   │
  │   │   ├── error                        # 模块 - 异常管理
  │   │   │   ├── PageError403.vue         # 组件 - 异常 403
  │   │   │   ├── PageError404.vue         # 组件 - 异常 404
  │   │   │   ├── PageError500.vue         # 组件 - 异常 500
  │   │   │
  │   │   ├── system                       # 模块 - 系统管理
  │   │   │   ├── components               #
  │   │   │   │   ├── OrganizeManage       # 子组件库 - OrganizeManage
  │   │   │   │   ├── ResourceManage       # 子组件库 - ResourceManage
  │   │   │   │   ├── RoleManage           # 子组件库 - RoleManage
  │   │   │   │   ├── UserManage           # 子组件库 - UserManage
  │   │   │   │                            #
  │   │   │   ├── OrganizeManage.vue       # 组织管理 (路由 /system/OrganizeManage)
  │   │   │   ├── ResourceManage.vue       # 资源管理 (路由 /system/ResourceManage)
  │   │   │   ├── RoleManage.vue           # 角色管理 (路由 /system/RoleManage)
  │   │   │   ├── UserManage.vue           # 用户管理 (路由 /system/UserManage)
  │   │
  │   ├── App.vue                          # 顶层路由组件 (处理 全局 Theme/Token/Size)
  │   ├── main.less                        # 样式入口文件
  │   ├── main.ts                          # 主入口文件
  │   ├── permission.ts                    # 路由权限拦截器
  │   ├── router.constant.ts               # 配置静态路由
  │   ├── router.dynamic.ts                # 配置动态路由 (借助 vite 的 import.meta.glob 导入 src/views 目录下路由)
  │   ├── router.ts                        # 初始化 Router 实例
  │
  ├── test                                 # 测试脚本
  │   ├── cypress                          # cypress (基于浏览器运行的测试工具，主要用于测试依赖浏览器的逻辑)
  │   │   ├── -Login.vue.cy.ts             # 范例: cypress 测试 Login Vue 组件
  │   │   ├── tsconfig.json                # 定义: cypress TS 配置文件
  │   │                                    #
  │   ├── vitest                           # vitest (由 Vite 驱动的测试工具，主要用于测试不依赖浏览器的逻辑)
  │   │   ├── -utils.test.ts               # 范例: vitest 测试 Utils Api
  │   │   ├── tsconfig.json                # 定义: vitest TS 配置文件
  │
  ├── .cz-message.cjs                      # 指定 cz-message-helper 配置选项 (using by git cz)
  ├── .editorconfig                        # 指定项目的编码规范
  ├── .env                                 # 默认基础环境配置
  ├── .env.development                     # 本地开发环境配置, 会覆盖 .env 文件同名属性配置
  ├── .env.production                      # 正式运行环境配置, 会覆盖 .env 文件同名属性配置
  ├── .env.test                            # 测试运行环境配置, 会覆盖 .env 文件同名属性配置
  ├── .eslintignore                        # 指定 eslint 哪些文件不需要校验
  ├── .eslintrc-auto-import.json           # 是由 unplugin-auto-import/vite 插件自动生成 (在 eslint extends 中配置)
  ├── .eslintrc.cjs                        # 指定 eslint 校验的规则配置
  ├── .gitattributes                       # 指定 git 使用的文件和路径的属性
  ├── .gitignore                           # 指定 git 哪些文件不需要添加到版本管理中
  ├── .lintstagedrc.js                     # 指定 lint-staged 配置选项
  ├── .npmignore                           # 指定 npm publish 哪些文件被忽略 (比 .gitignore 优先级高)
  ├── .npmrc                               # 指定 npm 运行时的配置选项
  ├── .prettierignore                      # 指定 prettier 哪些文件不需要校验
  ├── .prettierrc                          # 指定 prettier 格式的规则配置
  ├── .release-it.json                     # 指定 release-it 配置选项
  ├── .stylelintrc.js                      # 指定 stylelint 配置选项
  ├── auto-imports.d.ts                    # 是由 unplugin-auto-import/vite 插件自动生成
  ├── commitlint.config.js                 # 指定 @commitlint/cli、@commitlint/config-conventional 的配置选项
  ├── components.d.ts                      # 是由 unplugin-vue-components/vite 插件自动生成
  ├── cypress.config.ts                    # Cypress 配置文件
  ├── index.html                           # 编译构建所需的 html 模版文件
  ├── LICENSE                              # 前端项目许可文件
  ├── package.json                         # 前端项目配置文件
  ├── pnpm-lock.yaml                       # pnpm 安装依赖包版本锁定文件
  ├── README.md                            # 前端项目介绍文件
  ├── tsconfig.json                        # typescript 配置文件
  ├── vite.config.ts                       # Vite 配置文件 (dev server / run build)
  ├── volar.config.js                      # Volar 配置文件 (配合 volar-service-prettyhtml 插件)
```

## 依赖管理

- Pnpm 版本: `>=7`
- Node 版本: `>=18.0.0`

```bash
  # 本地初始化 (生成 package.json)
  pnpm init

  # 本地安装 package.json 依赖包
  pnpm install

  # 全局安装 某个依赖包
  pnpm add -g [package]
  pnpm add -g [package]@[tag]
  pnpm add -g [package]@[version]

  # 本地安装 仅编译环境所需 依赖包
  pnpm add -D [package]
  pnpm add -D [package]@[tag]
  pnpm add -D [package]@[version]

  # 本地安装 编译及生产环境所需 依赖包
  pnpm add [package]
  pnpm add [package]@[tag]
  pnpm add [package]@[version]

  # 本地升级 某个依赖包
  pnpm upgrade [package]
  pnpm upgrade [package]@[tag]
  pnpm upgrade [package]@[version]

  # 本地移除 某个依赖包
  pnpm remove [package]

  # 本地检查 依赖包情况
  # <red>    : Major Update backward-incompatible updates --- (不建议更新)
  # <yellow> : Minor Update backward-compatible features ---- (可以更新)
  # <green>  : Patch Update backward-compatible bug fixes --- (建议更新)
  pnpm outdated

  # 批量更新 一键按需升级
  # Press <space> to select ----------------------- (空格切换选中)
  # Press <a> to toggle all ----------------------- (所有依赖选中)
  # Press <i> to invert selection ----------------- (所有依赖反选)
  # Press <Enter> install selected dependencies --- (所选依赖安装)
  pnpm up -i --latest
```
