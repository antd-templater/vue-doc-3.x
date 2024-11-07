```bash-vue [下载源码]
  # Download
  git clone {{ gitUrl }} Antd-Template-Vue

```

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'

const gitUrl = ref('https://github.com/antd-templater/vue-template-3.x.git')

onMounted(() => {
  const href = window.location.href
  const atomgit = 'https://antd-templater.atomgit.net/'
  const atomgitUrl = 'https://atomgit.com/antd-templater/vue-template-3.x.git'

  if (href.startsWith(atomgit)) {
    gitUrl.value = atomgitUrl
  }
})
</script>
