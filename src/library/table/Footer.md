<CodeRunner>
  
<template #title>
带总结栏表格
</template>
  
<template #refer>

通过 `columns` 选项 + `sources` 数据源 + `summarys` 总结栏，实现一个带总结栏的表格

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Footer.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Footer.vue'
</script>
