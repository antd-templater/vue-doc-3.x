<CodeRunner>
  
<template #title>
表格行展开项
</template>
  
<template #refer>

当表格内容不能完全展示时，`STable` 支持通过 **expander** 卡槽，定义表格行展开项的内容。如果有禁用行展开项的需求，则可以使用在 **customBodyerRowStates** 中实现。

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Expanded.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Expanded.vue'
</script>
