<CodeRunner>
  
<template #title>
手风琴模式
</template>
  
<template #refer>

在 **STree** 组件中，我们可以通过 `props.allowMultiExpanded="false"` 快速实现手风琴效果

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/Accordion.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/Accordion.vue'
</script>
