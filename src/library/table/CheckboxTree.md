<CodeRunner>
  
<template #title>
表格树形数据
</template>
  
<template #refer>

<div>

`STable` 支持树形数据的展示, 当数据中有 **children** 字段时会自动展示为树形表格。

</div>

<div style="margin-top: 3px;">

**rowSelectedStrictly="true" (默认 true), 说明父子数据 CheckBox 状态不再关联**  
**treeKey="list" (默认 children), 使用树形数据 list 字段作为渲染子节点依据**

</div>

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/CheckboxTree.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/CheckboxTree.vue'
</script>
