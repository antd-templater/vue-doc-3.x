# 表格组件 - STable

支持 列拉伸/拖拽/属性配置，单元格合并/卡槽定义，Checkbox/Radio、内置分页等丰富功能

<style lang="less" scoped>
[h3-container] {
  width: 100%;
  height: 0;
  position: relative;

  h3 {
    width: 100%;
    height: 0;
    margin: 0;
    padding: 0;
    border: none;
    overflow: hidden;
    position: absolute;
    top: 60px;
  }
}

h3 + table,
h3 ~ details > table {
  display: table;
  width: 100%;
}

h3 + table tr,
h3 ~ details > table tr {
  background-color: var(--vp-c-bg) !important;
}
</style>

<script setup lang="ts">
import Base from '@/library/table/Base.md'
import Merge from '@/library/table/Merge.md'
import Footer from '@/library/table/Footer.md'
import Sorter from '@/library/table/Sorter.md'
import Striped from '@/library/table/Striped.md'
import Sources from '@/library/table/Sources.md'
import CheckBox from '@/library/table/CheckBox.md'
import LoadData from '@/library/table/LoadData.md'
import DiffSize from '@/library/table/DiffSize.md'
import Ellipsis from '@/library/table/Ellipsis.md'
import Multiple from '@/library/table/Multiple.md'
import Expanded from '@/library/table/Expanded.md'
import EditTable from '@/library/table/EditTable.md'
import FixedTable from '@/library/table/FixedTable.md'
import CustomSlots from '@/library/table/CustomSlots.md'
import CheckboxTree from '@/library/table/CheckboxTree.md'
import FixedPageTable from '@/library/table/FixedPageTable.md'
</script>

## 演示

<div code-runner style="height: 466px">
  <div h3-container>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 653px">
  <div h3-container>
    <h3 id="带斑马纹表格">带斑马纹表格</h3>
  </div>
  <div style="padding: 1px;">
    <Striped/>
  </div>
</div>

<div code-runner style="height: 549px">
  <div h3-container>
    <h3 id="带总结栏表格">带总结栏表格</h3>
  </div>
  <div style="padding: 1px;">
    <Footer/>
  </div>
</div>

<div code-runner style="height: 599px">
  <div h3-container>
    <h3 id="表格卡槽自定义">表格卡槽自定义</h3>
  </div>
  <div style="padding: 1px;">
    <CustomSlots/>
  </div>
</div>

<div code-runner style="height: 654px">
  <div h3-container>
    <h3 id="远程加载数据">远程加载数据</h3>
  </div>
  <div style="padding: 1px;">
    <LoadData/>
  </div>
</div>

<div code-runner style="height: 945px">
  <div h3-container>
    <h3 id="表格列排序(多列)">表格列排序(多列)</h3>
  </div>
  <div style="padding: 1px;">
    <Sorter/>
  </div>
</div>

<div code-runner style="height: 682px">
  <div h3-container>
    <h3 id="不同尺寸的表格">不同尺寸的表格</h3>
  </div>
  <div style="padding: 1px;">
    <DiffSize/>
  </div>
</div>

<div code-runner style="height: 515px">
  <div h3-container>
    <h3 id="单元格自动省略">单元格自动省略</h3>
  </div>
  <div style="padding: 1px;">
    <Ellipsis/>
  </div>
</div>

<div code-runner style="height: 707px">
  <div h3-container>
    <h3 id="表格分组表头">表格分组表头</h3>
  </div>
  <div style="padding: 1px;">
    <Multiple/>
  </div>
</div>

<div code-runner style="height: 551px">
  <div h3-container>
    <h3 id="表格行/列合并">表格行/列合并</h3>
  </div>
  <div style="padding: 1px;">
    <Merge/>
  </div>
</div>

<div code-runner style="height: 570px">
  <div h3-container>
    <h3 id="表格数据源变更">表格数据源变更</h3>
  </div>
  <div style="padding: 1px;">
    <Sources/>
  </div>
</div>

<div code-runner style="height: 992px">
  <div h3-container>
    <h3 id="固定表头和某列">固定表头和某列</h3>
  </div>
  <div style="padding: 1px;">
    <FixedTable/>
  </div>
</div>

<div code-runner style="height: 956px">
  <div h3-container>
    <h3 id="随页面滚动固定表头">随页面滚动固定表头</h3>
  </div>
  <div style="padding: 1px;">
    <FixedPageTable/>
  </div>
</div>

<div code-runner style="height: 379px">
  <div h3-container>
    <h3 id="表格单元格编辑">表格单元格编辑</h3>
  </div>
  <div style="padding: 1px;">
    <EditTable/>
  </div>
</div>

<div code-runner style="height: 739px">
  <div h3-container>
    <h3 id="表格单选/多选">表格单选/多选</h3>
  </div>
  <div style="padding: 1px;">
    <CheckBox/>
  </div>
</div>

<div code-runner style="height: 1012px">
  <div h3-container>
    <h3 id="表格树形数据">表格树形数据</h3>
  </div>
  <div style="padding: 1px;">
    <CheckboxTree/>
  </div>
</div>

<div code-runner style="height: 651px">
  <div h3-container>
    <h3 id="表格行展开项">表格行展开项</h3>
  </div>
  <div style="padding: 1px;">
    <Expanded/>
  </div>
</div>
