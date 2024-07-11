<CodeRunner>
  
<template #title>
拖拽Tree节点
</template>
  
<template #refer>

我们可以通过 `props.draggable="true"` 轻松实现，同时提供了 `props.dropHandler` 来定义拖拽结束时的拦截器

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/Draggable.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/Draggable.vue'
</script>
