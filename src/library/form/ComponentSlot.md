<CodeRunner>
  
<template #title>
自定义组件
</template>
  
<template #refer>

除了自定义表单分组，我们也可以通过 `[Component].slot` 自定义表单各组件。例:

<p style="margin-left: 20px">

- **AInput 输入框**
- **ASelect 下拉框**
- **ADatePicker 年月日**

</p>

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/form/ComponentSlot.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/form/ComponentSlot.vue'
</script>
