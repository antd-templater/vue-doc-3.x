<CodeRunner>
  
<template #title>
自定义字段
</template>
  
<template #refer>

我们可以通过 `props.fieldNames` 指定 **STree** 节点中 **key**, **title**, **children** 字段，从而适配不同的数据结构

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/CustomField.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/CustomField.vue'
</script>
