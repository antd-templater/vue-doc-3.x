---
aside: false
---

# 项目脚本指令

::: info 命令行 Prettier 格式化 -> <a :href="prettierrc" target="_blank">.prettierrc</a>、<a :href="prettierignore" target="_blank">.prettierignore</a>

```bash
  npx prettier --write --loglevel warn "src/**/*.vue"
```

:::

::: info 命令行 ESlint 格式化 -> <a :href="eslintconfigmjs" target="_blank">eslint.config.mjs</a>

```bash
  npx eslint --fix --quiet src/**/*{.vue,.tsx,.ts}
```

:::

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

const prettierrc = ref('https://github.com/antd-templater/vue-template-3.x/blob/main/.prettierrc')
const prettierignore = ref('https://github.com/antd-templater/vue-template-3.x/blob/main/.prettierignore')
const eslintconfigmjs = ref('https://github.com/antd-templater/vue-template-3.x/blob/main/eslint.config.mjs')

onMounted(() => {
  const href = window.location.href
  const atomgit = 'https://antd-templater.atomgit.net/'

  if (href.startsWith(atomgit)) {
    prettierrc.value = 'https://atomgit.com/antd-templater/vue-template-3.x/blob/main/.prettierrc'
    prettierignore.value = 'https://atomgit.com/antd-templater/vue-template-3.x/blob/main/.prettierignore'
    eslintconfigmjs.value = 'https://atomgit.com/antd-templater/vue-template-3.x/blob/main/eslint.config.mjs'
  }
})
</script>
