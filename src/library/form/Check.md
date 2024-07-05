<CodeRunner>
  
<template #title>
表单校验
</template>
  
<template #refer>

我们通过 `Props.rules` 统一配置表单各组件的校验规则，也可以在表单各组件的 `rule` 选项中进行配置

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/form/Check.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/form/Check.vue'
</script>
