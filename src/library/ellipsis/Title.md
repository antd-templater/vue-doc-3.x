<CodeRunner>
  
<template #title>
自定义 title
</template>
  
<template #refer>

默认 **default** 卡槽内容作为 `Tooltip` 的提示内容。我们可以自定义 `title` (使用 **prop** 或 **slot** 方式)

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/ellipsis/Title.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/ellipsis/Title.vue'
</script>
