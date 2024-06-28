<CodeRunner>
  
<template #title>
固定表头和某列
</template>
  
<template #refer>

通过 `sticky` 可以配置表格 **thead** 和 **summarys(tfoot)** 置顶/置底吸附固定，同时通过设置 `column.fixed` 来固定某列或者某些列。

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/FixedTable.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/FixedTable.vue'
</script>
