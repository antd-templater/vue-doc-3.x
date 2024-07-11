<CodeRunner>
  
<template #title>
禁用用法
</template>
  
<template #refer>

如果我们希望 **禁用父选项** 同时禁用其子选项时，则可以使用 **props.forceApplyDisabled="true"** 来实现

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/Disabled.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/Disabled.vue'
</script>
