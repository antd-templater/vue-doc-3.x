<CodeRunner>
  
<template #title>
自定义卡槽
</template>
  
<template #refer>

**STree** 在 **ATree** 组件原有 `icon` 和 `title` 卡槽进行了扩展 (eg. `iconRootLabel`、`titleParentButton` 等)

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/CustomSlots.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/CustomSlots.vue'
</script>
