<CodeRunner>
  
<template #title>
远程加载数据
</template>
  
<template #refer>

通过 `loadData` 动态加载数据 和 `paginate` 分页选项，实现异步请求数据并进行渲染的表格。

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/LoadData.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/LoadData.vue'
</script>
