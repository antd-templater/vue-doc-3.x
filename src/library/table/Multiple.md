<CodeRunner>
  
<template #title>
表格分组表头
</template>
  
<template #refer>

表格表头 **thead** 分组可以通过 `column` 中 **chidren** 配置实现，如果当前列过多，则可以通过 `:columnPresetSettings="true"` 启用列筛选配置

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Multiple.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Multiple.vue'
</script>
