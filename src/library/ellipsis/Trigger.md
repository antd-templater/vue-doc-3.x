<CodeRunner>
  
<template #title>
打开方式 trigger
</template>
  
<template #refer>

默认使用 `hover`, 我们可以选择 `focus`、`click`、`contextmenu`, 也可以通过 `open` 自定义。

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/ellipsis/Trigger.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/ellipsis/Trigger.vue'
</script>
