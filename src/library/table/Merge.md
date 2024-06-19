<CodeRunner>
  
<template #title>
表格行/列合并
</template>
  
<template #refer>

<div>

表格 **tbody** 的行/列合并，可以通过 `customBodyerCellRender` 来完成。因 `cellMegreNormalize` 默认值为 **true**, 它会帮助我们推导合并情况。所以我们只需设定某单元格合并多少列或行，无需关心相邻单元格是否需要设置 `rowspan="0"` 或 `colspan="0"`

</div>

<div style="margin-top: 10px">

**注: 必须设置 `persistSourceRanges="true"`**

</div>

</template>
  
<template #viewer>
  <Viewer />
</template>
  
<<< @/library/table/Merge.vue
  
</CodeRunner>

<script setup lang="ts">
import Viewer from '@/library/table/Merge.vue'
</script>
