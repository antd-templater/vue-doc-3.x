<CodeRunner>
  
<template #title>
异步加载节点
</template>
  
<template #refer>

在 **STree** 组件中，我们通过 `props.loadData` 异步加载远程 **Tree** 节点，`props.checkedKeys` 会自动适配异步节点

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/LoadData.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/LoadData.vue'
</script>
