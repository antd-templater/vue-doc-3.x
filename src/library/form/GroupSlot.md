<CodeRunner>
  
<template #title>
自定义分组
</template>
  
<template #refer>

我们可以通过 `AGroup.slot` 自定义表单分组 **Header**， 也可以配置各分组下组件可用状态 (**禁用/只读**)

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/form/GroupSlot.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/form/GroupSlot.vue'
</script>
