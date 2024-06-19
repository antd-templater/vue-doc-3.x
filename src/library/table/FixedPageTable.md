<CodeRunner>
  
<template #title>
随页面滚动固定表头
</template>
  
<template #refer>

<div>

`sticky` **topHeader** 设置 Table thead 页面置顶吸附

</div>

<div>

`sticky` **bottomFooter** 设置 Table tfoot 页面置底吸附

</div>

<div style="margin-top: 8px">

**注: STable 借助于一个原生 Table + CSS (position: sticky) 只能对一个滚动区域进行吸附固定**

</div>

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/FixedPageTable.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/FixedPageTable.vue'
</script>
