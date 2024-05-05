---
aside: false
---

# Git Commit 校验工具

- lint-staged
- @commitlint/cli
- @commitlint/config-conventional

## 安装依赖

```bash
  pnpm add husky lint-staged @commitlint/cli @commitlint/config-conventional -D
```

## 初始化 husky

初始化 husky 会在项目根目录下生成 .husky 文件内容

```bash
  npx husky init
```

## 在 .husky 下 新增两个 Git Hook

新增 commit-msg、pre-commit 两个 Git Hook

```bash
  # commit-msg 内容如下:
  npx --no-install commitlint --edit $1

  # pre-commit 内容如下:
  npx lint-staged
```

## 指定 commitlint.config.js 配置选项

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "fix",
        "feat",
        "begin",
        "docs",
        "style",
        "refactor",
        "chore",
        "perf",
        "test",
        "merge",
        "revert",
        "wip",
      ],
    ],
    "type-case": [0],
    "scope-case": [0],
    "subject-case": [0],
    "header-case": [0],
    "body-case": [0],
    "type-empty": [2, "never"],
    "scope-empty": [0],
    "subject-empty": [2, "never"],
    "body-empty": [0],
    "subject-full-stop": [0],
    "header-full-stop": [0],
    "body-full-stop": [0],
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
  },
};
```

## 指定 .lintstagedrc.js 配置选项

```js
module.exports = {
  "src/**/*.{js,jsx,ts,tsx,vue}": ["eslint --fix"],
};
```
