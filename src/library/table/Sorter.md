<CodeRunner>
  
<template #title>
表格列排序(多列)
</template>
  
<template #refer>

通过 `column.sorter="true"` 启用对表格某列的排序，点击排序后，会在 `loadData` 回调中的 **options.sorter** 获取排序情况，作为参数传递给后端，或前端执行排序处理。如果需要开启多列排序选项，可以设置 `columnSorterMultiple="true"`

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Sorter.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Sorter.vue'
</script>
