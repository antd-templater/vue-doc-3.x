```bash-vue [下载源码]
  # Download
  git clone {{ gitUrl }} Antd-Templater

```

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

const gitUrl = ref('https://github.com/antd-templater/template-3.x.git')

onMounted(() => {
  const href = window.location.href
  const gitee = 'https://antd-templater.gitee.io/'
  const giteeUrl = 'https://gitee.com/antd-templater/template-3.x.git'

  if (href.startsWith(gitee)) {
    gitUrl.value = giteeUrl
  }
})
</script>
