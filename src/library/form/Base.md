<CodeRunner>
  
<template #title>
基本用法
</template>
  
<template #refer>

支持通过 `Props.groups` 配置，渲染相应的表单组件  
通过使用 `formGroupsDefiner` 提供 Typescript 提示和校验

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/form/Base.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/form/Base.vue'
</script>
