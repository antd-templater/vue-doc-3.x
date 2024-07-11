<CodeRunner>
  
<template #title>
表格事件自定义
</template>
  
<template #refer>

`STable` 支持 **customBodyerRowAttrs** 定义表格行事件，也可以通过 **customBodyerCellRender** 定义单元格事件

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Events.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Events.vue'
</script>
