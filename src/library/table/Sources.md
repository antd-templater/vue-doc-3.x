<CodeRunner>
  
<template #title>
表格数据源变更
</template>
  
<template #refer>

为了提升表格性能, 表格数据源在渲染之初进行了缓存，后续进行新增或删除，可能并不会按新数据源渲染。我们需要 `STable` **update** API 通知表格更新数据源，并进行渲染

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Sources.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Sources.vue'
</script>
