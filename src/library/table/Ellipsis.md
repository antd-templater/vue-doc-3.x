<CodeRunner>
  
<template #title>
单元格自动省略
</template>
  
<template #refer>

<div>

<div>

设置 `columnPresetResizable` 允许通过拉伸调整列宽度

</div>

设置 `column.ellipsis` 可以让单元格根据宽度自动省略

</div>

<div>

设置 `column.tooltip` 自动省略，并具有 **Tooltip** 提示

</div>

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Ellipsis.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Ellipsis.vue'
</script>
