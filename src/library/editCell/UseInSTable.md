<CodeRunner>
  
<template #title>
With STable 表格单元格编辑
</template>
  
<template #refer>

实现表格行内单元格编辑功能，支持设置 `status` = false, 同步关闭所有 `SEditCell` 编辑状态

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/editCell/UseInSTable.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/editCell/UseInSTable.vue'
</script>
