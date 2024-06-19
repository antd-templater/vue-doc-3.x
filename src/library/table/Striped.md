<CodeRunner>
  
<template #title>
带斑马纹表格
</template>
  
<template #refer>

要实现一个带斑马纹的表格，`STable` 可以通过 **customBodyerCellRender** 自定义表格 **tbody \<td>** 的样式。

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Striped.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Striped.vue'
</script>
