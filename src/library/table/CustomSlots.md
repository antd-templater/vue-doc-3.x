<CodeRunner>
  
<template #title>
表格卡槽自定义
</template>
  
<template #refer>

<div>

**Slots** 中 `headerCell` 定义表格 **thead** 单元格内容

</div>

<div>

**Slots** 中 `bodyerCell` 定义表格 **tbody** 单元格内容

</div>

<div>

**Slots** 中 `footerCell` 定义表格 **tfoot** 单元格内容

</div>

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/CustomSlots.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/CustomSlots.vue'
</script>
