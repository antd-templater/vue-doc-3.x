<CodeRunner>
  
<template #title>
搜索用法
</template>
  
<template #refer>

**STree** 支持通过 **props.filterField** 和 **props.filterValue** 来实现 **TreeNode** 的筛选和搜索  
**props.filterField:** 搜索模式，支持 **key** 和 **title** 两种模式，默认 **title**  
**props.filterValue:** 搜索值

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/tree/Search.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/tree/Search.vue'
</script>
