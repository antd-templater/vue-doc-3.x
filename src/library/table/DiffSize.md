<CodeRunner>
  
<template #title>
不同尺寸的表格
</template>
  
<template #refer>

`STable` 表格的大小有 **'default'**，**'middle'**，**'small'** 这三种尺寸，可以通过 `Size` 进行指定

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/DiffSize.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/DiffSize.vue'
</script>
