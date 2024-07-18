---
aside: false
---

# Git Commit 辅助工具

- commitizen
- cz-message-helper

## 安装依赖

```bash
  # 安装 commitizen (全局安装!!!)
  pnpm add commitizen -g

  # 本地安装 cz-message-helper
  pnpm add cz-message-helper -D
```

## package.json 完善配置

```json
{
  "name": "@antd-templater/vue-template-3.x",
  "description": "后台管理系统模版 - 基于 Vue3.x Ant Design Vue 组件库",

  "config": {
    "cz-message-helper": {
      "config": ".cz-message.cjs"
    },
    "commitizen": {
      "path": "node_modules/cz-message-helper"
    }
  }
}
```

## 创建 .cz-message.cjs 配置文件

```js
/**
 * Commit message helper for commitizen
 * https://github.com/linpengteng/cz-message-helper
 */
module.exports = {
  language: "cn", // 支持 en | cn
};
```

## 如何使用？

```bash
# 添加所需文件 (可选)
git add .

# 使用 cz-message-helper
git cz
```

[了解更多](https://github.com/linpengteng/cz-message-helper)
