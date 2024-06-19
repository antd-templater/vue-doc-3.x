<CodeRunner>
  
<template #title>
表格单选/多选
</template>
  
<template #refer>

表格单选和多选 可以通过 `selectedRowMode` 设置为 **Checkbox** 或 **Radio** 来启用，同时在进行切换分页时可以使用 `preserveSelectedRowKeys` 来保持之前的选中项，如果有禁用 **Checkbox** / **Radio** 的需求，则可以使用 `customBodyerRowStates` 来实现

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/CheckBox.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/CheckBox.vue'
</script>
