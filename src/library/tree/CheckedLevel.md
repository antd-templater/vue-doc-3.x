<CodeRunner>
  
<template #title>
自定义层级
</template>
  
<template #refer>

我们可以通过 `props.allowCheckedLevel` 和 `props.allowSelectedLevel` 指定 **checkable / selectable** 的层级

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/CheckedLevel.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/CheckedLevel.vue'
</script>
