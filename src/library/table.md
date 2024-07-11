# 表格组件 - STable

不是 **ATable** 的封装，支持列拉伸/拖拽/属性配置，单元格合并/卡槽定义，Checkbox/Radio、内置分页等功能

<style lang="less" scoped>
[code-runner-title] {
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
</style>

<script setup lang="ts">
import Base from '@/library/table/Base.md'
import Merge from '@/library/table/Merge.md'
import Footer from '@/library/table/Footer.md'
import Sorter from '@/library/table/Sorter.md'
import Events from '@/library/table/Events.md'
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

<div code-runner style="height: 466px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 627px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="带斑马纹表格">带斑马纹表格</h3>
  </div>
  <div style="padding: 1px;">
    <Striped/>
  </div>
</div>

<div code-runner style="height: 549px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="带总结栏表格">带总结栏表格</h3>
  </div>
  <div style="padding: 1px;">
    <Footer/>
  </div>
</div>

<div code-runner style="height: 627px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格事件自定义">表格事件自定义</h3>
  </div>
  <div style="padding: 1px;">
    <Events/>
  </div>
</div>

<div code-runner style="height: 599px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格卡槽自定义">表格卡槽自定义</h3>
  </div>
  <div style="padding: 1px;">
    <CustomSlots/>
  </div>
</div>

<div code-runner style="height: 628px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="远程加载数据">远程加载数据</h3>
  </div>
  <div style="padding: 1px;">
    <LoadData/>
  </div>
</div>

<div code-runner style="height: 945px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格列排序(多列)">表格列排序(多列)</h3>
  </div>
  <div style="padding: 1px;">
    <Sorter/>
  </div>
</div>

<div code-runner style="height: 682px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="不同尺寸的表格">不同尺寸的表格</h3>
  </div>
  <div style="padding: 1px;">
    <DiffSize/>
  </div>
</div>

<div code-runner style="height: 515px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="单元格自动省略">单元格自动省略</h3>
  </div>
  <div style="padding: 1px;">
    <Ellipsis/>
  </div>
</div>

<div code-runner style="height: 707px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格分组表头">表格分组表头</h3>
  </div>
  <div style="padding: 1px;">
    <Multiple/>
  </div>
</div>

<div code-runner style="height: 551px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格行/列合并">表格行/列合并</h3>
  </div>
  <div style="padding: 1px;">
    <Merge/>
  </div>
</div>

<div code-runner style="height: 570px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格数据源变更">表格数据源变更</h3>
  </div>
  <div style="padding: 1px;">
    <Sources/>
  </div>
</div>

<div code-runner style="height: 992px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="固定表头和某列">固定表头和某列</h3>
  </div>
  <div style="padding: 1px;">
    <FixedTable/>
  </div>
</div>

<div code-runner style="height: 956px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="随页面滚动固定表头">随页面滚动固定表头</h3>
  </div>
  <div style="padding: 1px;">
    <FixedPageTable/>
  </div>
</div>

<div code-runner style="height: 379px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格单元格编辑">表格单元格编辑</h3>
  </div>
  <div style="padding: 1px;">
    <EditTable/>
  </div>
</div>

<div code-runner style="height: 739px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格单选/多选">表格单选/多选</h3>
  </div>
  <div style="padding: 1px;">
    <CheckBox/>
  </div>
</div>

<div code-runner style="height: 1012px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格树形数据">表格树形数据</h3>
  </div>
  <div style="padding: 1px;">
    <CheckboxTree/>
  </div>
</div>

<div code-runner style="height: 651px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="表格行展开项">表格行展开项</h3>
  </div>
  <div style="padding: 1px;">
    <Expanded/>
  </div>
</div>

## API

### Props

#### STable Props

| 参数                             | 说明                                                                           | 类型                            |   默认值   |
| :------------------------------- | :----------------------------------------------------------------------------- | :------------------------------ | :--------: |
| **size**                         | 表格大小                                                                       | STableSize                      |     -      |
| **rowKey**                       | 表格行 key 的字段                                                              | STableRowKey                    |     -      |
| **treeKey**                      | 表格 树形结构 的字段                                                           | STableTreeKey                   | 'children' |
| **border**                       | 设置边框。分组表头时 **border="true"**                                         | boolean                         |   false    |
| **sticky**                       | 设置表格粘性头部和滚动条，详见下方 [STable Sticky](#stable-sticky)             | STableStickyType                |     -      |
| **scroll**                       | 表格是否可滚动，也可以指定滚动区域的宽高，详见 [STable Scroll](#stable-scroll) | STableScrollType                |     -      |
| **columns (v-model)**            | 表格列的配置描述, 详见 [STable Column](#stable-column)                         | STableColumnType[]              |     -      |
| **sources (v-model)**            | 表格数据源                                                                     | STableRecordType[]              |     -      |
| **summarys (v-model)**           | 表格总结栏数据源 (**tfoot**)                                                   | STableRecordType[]              |     -      |
| **paginate (v-model)**           | 表格分页配置，详见 [STable Paginate](#stable-paginate)                         | STablePartPaginate              |     -      |
| **loadData**                     | 表格数据远程加载，响应数据预处理，详见 [Responser](#responser)                 | STableLoadSource                |     -      |
| **tableLayout**                  | 表格 **CSS table-layout** 样式                                                 | 'auto' \| 'fixed'               |     -      |
| **persistSourceRanges**          | 保持数据渲染，即使不在可视区域内。                                             | Array\<number[]> \| boolean     |   false    |
| **customHeaderRowAttrs**         | 设置表格 **thead** 行属性 (HTMLAttributes)                                     | STableCustom<br>HeaderRowAttrs  |     -      |
| **customBodyerRowAttrs**         | 设置表格 **tbody** 行属性 (HTMLAttributes)                                     | STableCustom<br>BodyerRowAttrs  |     -      |
| **customFooterRowAttrs**         | 设置表格 **tfoot** 行属性 (HTMLAttributes)                                     | STableCustom<br>FooterRowAttrs  |     -      |
| **customBodyerRowStates**        | 设置表格 **tbody** 行 State (例如，禁用行展开、禁用选项)                       | STableCustom<br>BodyerRowStates |     -      |
| **customHeaderCellRender**       | 自定义 **thead** 单元格渲染                                                    | STableHeader<br>CellRender      |     -      |
| **customBodyerCellRender**       | 自定义 **tbody** 单元格渲染                                                    | STableBodyer<br>CellRender      |     -      |
| **customFooterCellRender**       | 自定义 **tfoot** 单元格渲染                                                    | STableFooter<br>CellRender      |     -      |
| **defaultColumnSorters**         | 设置默认的列排序                                                               | STableSorterType[]              |     []     |
| **defaultSelectAllRows**         | 默认选择所有表格行 key (Checkbox)                                              | boolean                         |   false    |
| **defaultExpandAllRows**         | 默认展开所有表格行 key (Expanded)                                              | boolean                         |   false    |
| **preserveSelectedRowKeys**      | 分页渲染数据，是否记录之前选择的 Checkbox/Radio，以便后续恢复                  | boolean                         |   false    |
| **preserveExpandedRowKeys**      | 分页渲染数据，是否记录之前展开的行，以便后续恢复                               | boolean                         |   false    |
| **columnPresetResizable**        | 是否允许表格列拉伸调整宽度                                                     | boolean                         |   false    |
| **columnPresetDraggable**        | 是否允许表格列拖拽，调整表格列顺序                                             | boolean                         |   false    |
| **columnSorterMultiple**         | 是否允许表格多列排序                                                           | boolean                         |   false    |
| **columnPresetSettings**         | 是否启用表格列筛选配置                                                         | boolean                         |   false    |
| **rowSelectedStrictly**          | 表格树形数据，父子数据 CheckBox 状态是否不关联 (默认不关联)                    | boolean                         |    true    |
| **rowExpandedByClick**           | 当表格存在展开行时，是否允许点击行展开其展开行                                 | boolean                         |   false    |
| **cellMegreNormalize**           | 当表格存在合并单元格时，可以帮助我们自动适配相邻的单元格情况                   | boolean                         |    true    |
| **expandIndentSize**             | 因展开行图标，每一层的缩紧样式                                                 | number                          |     -      |
| **selectIndentSize**             | 因选择项图标，每一层的缩紧样式                                                 | number                          |     -      |
| **selectedRowMode**              | 是否启用选择框 (Checkbox / Radio)                                              | 'Radio' \| 'Checkbox' \| 'None' |  'None '   |
| **selectedRowKeys<br>(v-model)** | 记录表格已选择的行 key                                                         | STableKey[]                     |     []     |
| **expandedRowKeys<br>(v-model)** | 记录表格已展开的行 key                                                         | STableKey[]                     |     []     |
| **tHeaderThStyle**               | 设置表格 **thead th** 样式                                                     | Record\<string, any>            |     {}     |
| **tBodyerTdStyle**               | 设置表格 **tbody td** 样式                                                     | Record\<string, any>            |     {}     |
| **tFooterTdStyle**               | 设置表格 **tfoot td** 样式                                                     | Record\<string, any>            |     {}     |
| **expandTdStyle**                | 设置表格展开行 **expand td** 样式                                              | Record\<string, any>            |     {}     |
| **paginateStyle**                | 设置表格分页容器样式                                                           | Record\<string, any>            |     {}     |
| **loadOnScroll**                 | 仅在 `paginate.mode="local"` 启用，滚动加载分页数据                            | boolean                         |   false    |
| **bodyMinRows**                  | 表格最小行数，值为 **true** 时，与分页 pageSize 保持一致                       | boolean \| number               |   false    |
| **showHeader**                   | 显示表格 head 部分 (thead)                                                     | boolean                         |    true    |
| **showBodyer**                   | 显示表格 body 部分 (tbody)                                                     | boolean                         |    true    |
| **showFooter**                   | 显示表格 foot 部分 (tfoot)                                                     | boolean                         |    true    |
| **immediate**                    | 是否立刻调用 `loadData`, 加载远程数据                                          | boolean                         |    true    |
| **loadinger**                    | 是否在 UI 上隐藏 loading, 即使 loading 值为 true                               | boolean                         |    true    |
| **loading (v-model)**            | 表格是否正在加载数据中                                                         | boolean                         |   false    |
| **virtual**                      | 表格启用虚拟列表，提升性能 (**目前尚未启用**)                                  | boolean                         |    true    |

#### STable Sticky

| 参数                | 说明                                                  | 类型              | 默认值 |
| :------------------ | :---------------------------------------------------- | :---------------- | :----: |
| **topHeader**       | 启用表格 `thead` 置顶吸附                             | boolean \| number |  true  |
| **leftFooter**      | 当表格某些列左侧固定时，滚动时 `tfoot` 是否也随之固定 | boolean \| number |  true  |
| **rightFooter**     | 当表格某些列右侧固定时，滚动时 `tfoot` 是否也随之固定 | boolean \| number |  true  |
| **bottomFooter**    | 启用表格 `tfoot` 置底吸附                             | boolean \| number |  true  |
| **bottomScrollbar** | 当表格底部超出可视区域时，是否显示横向滚动条          | boolean           | false  |

#### STable Scroll

| 参数                         | 说明                                            | 类型                            | 默认值 |
| :--------------------------- | :---------------------------------------------- | :------------------------------ | :----: |
| **x**                        | 设置横向滚动，指定滚动区域的宽                  | number \| string \| false       | false  |
| **y**                        | 设置纵向滚动，指定滚动区域的高                  | number \| string \| false       | false  |
| **overflow**                 | 设置滚动区域 `overflow` 属性                    | 'hidden' \| 'visible' \| 'auto' |   -    |
| **scrollToFirstOffsetX**     | 表格滚动 `x轴` 横向方向偏移量                   | number                          |   -    |
| **scrollToFirstOffsetY**     | 表格滚动 `y轴` 纵向方向偏移量                   | number                          |   -    |
| **scrollToFirstTargetX**     | 指定表格滚动 `x轴` 初始位置                     | number                          |   0    |
| **scrollToFirstTargetY**     | 指定表格滚动 `y轴` 初始位置                     | number                          |   0    |
| **scrollToFirstXOnChange**   | 分页/排序/筛选，是否滚动到初始位置              | boolean                         |  true  |
| **scrollToFirstYOnChange**   | 分页/排序/筛选，是否滚动到初始位置              | boolean                         |  true  |
| **getScrollResizeContainer** | 指定滚动区域 (祖先节点), 一般无需指定，自动获取 | () => HTMLElement               |   -    |

#### STable Column

| 参数                       | 说明                                                             | 类型                                             | 默认值 |
| :------------------------- | :--------------------------------------------------------------- | :----------------------------------------------- | :----: |
| **key**                    | 表格列 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性     | string                                           |   -    |
| **title**                  | 表格列 title 标题                                                | string                                           |   -    |
| **dataIndex**              | 列数据在数据项中对应的路径                                       | string \| string[]                               |   -    |
| **children**               | 表格嵌套的列选项                                                 | STablePartColumnType[]                           |   -    |
| **align**                  | 设置表格列的对齐方式                                             | 'left' \| 'center' \| 'right'                    |   -    |
| **fixed**                  | 设置表格列是否固定及其方式                                       | 'left' \| 'right' \| false                       |   -    |
| **width**                  | 表格列宽度                                                       | number                                           |   -    |
| **minWidth**               | 表格列最小宽度, 影响列 resizing (最小限制)                       | number                                           |   -    |
| **maxWidth**               | 表格列最大宽度, 影响列 resizing (最大限制)                       | number                                           |   -    |
| **settings**               | 表格列筛选配置项中该列的预设值                                   | { checkbox?: boolean; <br> disabled?: boolean; } |   -    |
| **resizable**              | 配置表格该列 resizable?，覆盖 `props.columnPresetResizable`      | boolean                                          |   -    |
| **ellipsis**               | 表格单元格内容过长，自动省略                                     | boolean                                          | false  |
| **tooltip**                | 表格单元格内容过长，自动省略，且 `tooltip` 提示                  | boolean                                          | false  |
| **colSpan**                | 表格单元格多列合并                                               | number                                           |   -    |
| **rowSpan**                | 表格单元格多行合并                                               | number                                           |   -    |
| **sorter**                 | 表格该列是否启用排序                                             | boolean                                          | false  |
| **sorterField**            | 表格该列排序时使用的字段，默认从 `dataIndex` 获取                | string                                           |   -    |
| **expandIcon**             | 如果有树形数据或展开行内容，是否在表格该列显示 `Expand Icon`     | boolean                                          |   -    |
| **customHeaderCellRender** | 自定义 **thead** 单元格渲染，覆盖 `props.customHeaderCellRender` | STableHeaderCellRender                           |   -    |
| **customBodyerCellRender** | 自定义 **tbody** 单元格渲染，覆盖 `props.customBodyerCellRender` | STableBodyerCellRender                           |   -    |
| **customFooterCellRender** | 自定义 **tfoot** 单元格渲染，覆盖 `props.customFooterCellRender` | STableFooterCellRender                           |   -    |

#### STable Paginate

| 参数                 | 说明                                         | 类型                              |  默认值  |
| :------------------- | :------------------------------------------- | :-------------------------------- | :------: |
| **hideOnSinglePage** | 只有一页时是否隐藏分页器                     | boolean                           |  false   |
| **defaultPageSize**  | 默认的每页条数                               | number                            |    20    |
| **pageSizeOptions**  | 指定每页可以显示多少条                       | string[]                          |    -     |
| **showSizeChanger**  | 是否展示 pageSize 切换器                     | boolean                           |    -     |
| **showQuickJumper**  | 是否可以快速跳转至某页                       | boolean                           |  false   |
| **showLessItems**    | 是否显示较少页面内容                         | boolean                           |  false   |
| **loadTotalSize**    | 分段加载数据的总条目 (仅 **mode="local"**)   | number                            |    -     |
| **loadTotalPage**    | 分段加载数据的总页数 (仅 **mode="local"**)   | number                            |    -     |
| **loadPageSize**     | 分段加载数据的每页条目 (仅 **mode="local"**) | number                            |    -     |
| **loadPageNo**       | 分段加载的当前最新页 (仅 **mode="local"**)   | number                            |    -     |
| **showTotal**        | 用于显示数据总量和当前数据顺序               | boolean \| (total, range) => void |    -     |
| **totalSize**        | 分页数据总条目                               | number                            |    -     |
| **totalPage**        | 分页数据总页数                               | number                            |    -     |
| **pageSize**         | 分页数据每页条目                             | number                            |    -     |
| **pageNo**           | 分页数据当前页                               | number                            |    -     |
| **disabled**         | 是否禁用表格分页                             | boolean                           |  false   |
| **visible**          | 是否显示表格分页                             | boolean                           |  false   |
| **simple**           | 是否显示为简单分页                           | boolean                           |  false   |
| **fixed**            | 表格分页在纵轴方向于底部吸附固定。           | boolean                           |    -     |
| **mode**             | 分页模式，默认远程数据。(**local 尚未启用**) | 'local' \| 'remote'               | 'remote' |

### Emits

| 事件               | 说明                                    | 类型                                                                         |
| :----------------- | :-------------------------------------- | :--------------------------------------------------------------------------- |
| **pageSizeChange** | pageSize 变化的回调                     | (pageNo: number, pageSize: number) => true                                   |
| **pageChange**     | 页码或 pageSize 改变的回调              | (pageNo: number, pageSize: number) => true                                   |
| **expand**         | 表格行展开时触发                        | (keys: Array\<STableKey>, records: Array\<STableRecordType \| null>) => true |
| **select**         | 表格行 Checkbox 或 Radio 选项变换时触发 | (keys: Array\<STableKey>, records: Array\<STableRecordType \| null>) => true |
| **sorter**         | 表格列排序变化时                        | (values: Array\<STableSorterType>) => true                                   |

### Slots

| 插槽名         | 插槽说明                   | 插槽参数                                                                                                    |
| :------------- | :------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **expander**   | 表格展开行内容 卡槽        | record, rowIndex, groupIndex, groupLevel, groupIndexs, globalIndex                                          |
| **headerCell** | 表格 **thead** 单元格 卡槽 | title, column, rowIndex, colIndex, paginater                                                                |
| **bodyerCell** | 表格 **tbody** 单元格 卡槽 | value, record, rowIndex, groupIndex, groupLevel, groupIndexs, <br> globalIndex, column, colIndex, paginater |
| **footerCell** | 表格 **tfoot** 单元格 卡槽 | value, record, rowIndex, column, colIndex, sources, paginater                                               |

### Expose

| 属性/方法名 | 说明描述                                          | 类型                                                                             |
| :---------- | :------------------------------------------------ | :------------------------------------------------------------------------------- |
| **reload**  | 表格重新加载当前数据                              | (delay?: Promise\<void> \| boolean \| number, force?: boolean) => Promise\<void> |
| **refresh** | 表格刷新加载第一页数据                            | (delay?: Promise\<void> \| boolean \| number, force?: boolean) => Promise\<void> |
| **select**  | 表格手动选择指定选项 (Checkbox / Radio)           | (keys: STableKey[]) => void                                                      |
| **expand**  | 表格手动展开某些行 (仅对有展开内容或树形数据有效) | (keys: STableKey[]) => void                                                      |
| **update**  | 手动更新并重新渲染表格                            | (clean?: boolean) => void                                                        |

### Definer

| 定义                                   | 说明                                                                 |
| :------------------------------------- | :------------------------------------------------------------------- |
| **tableSorterDefiner**                 | 定义 **Props.defaultColumnSorters** 时的 TypeScript 提示和校验       |
| **tableScrollDefiner**                 | 定义 **Props.scroll** 时的 TypeScript 提示和校验                     |
| **tableStickyDefiner**                 | 定义 **Props.sticky** 时的 TypeScript 提示和校验                     |
| **tableSourcesDefiner**                | 定义 **Props.sources** 时的 TypeScript 提示和校验                    |
| **tableSummarysDefiner**               | 定义 **Props.summarys** 时的 TypeScript 提示和校验                   |
| **tableColumnsDefiner**                | 定义 **Props.columns** 时的 TypeScript 提示和校验                    |
| **tablePaginateDefiner**               | 定义 **Props.paginate** 时的 TypeScript 提示和校验                   |
| **tableLoadDataDefiner**               | 定义 **Props.loadData** 时的 TypeScript 提示和校验                   |
| **tableResponserDefiner**              | 定义 **Props.loadData** 数据源的预处理，详见 [Responser](#responser) |
| **tableCustomHeaderRowAttrsDefiner**   | 定义 **Props.customHeaderRowAttrs** 时的 TypeScript 提示和校         |
| **tableCustomBodyerRowAttrsDefiner**   | 定义 **Props.customBodyerRowAttrs** 时的 TypeScript 提示和校         |
| **tableCustomFooterRowAttrsDefiner**   | 定义 **Props.customFooterRowAttrs** 时的 TypeScript 提示和校         |
| **tableCustomBodyerRowStatesDefiner**  | 定义 **Props.customBodyerRowStates** 时的 TypeScript 提示和校        |
| **tableCustomHeaderCellRenderDefiner** | 定义 **Props.customHeaderCellRender** 时的 TypeScript 提示和校       |
| **tableCustomBodyerCellRenderDefiner** | 定义 **Props.customBodyerCellRender** 时的 TypeScript 提示和校验     |
| **tableCustomFooterCellRenderDefiner** | 定义 **Props.customFooterCellRender** 时的 TypeScript 提示和校验     |
| **tableEmitSorterDefiner**             | 定义 **Emits.sorter** 时的 TypeScript 提示和校验                     |
| **tableEmitSelectDefiner**             | 定义 **Emits.select** 时的 TypeScript 提示和校验                     |
| **tableEmitExpandDefiner**             | 定义 **Emits.expand** 时的 TypeScript 提示和校验                     |
| **tableEmitPageChangeDefiner**         | 定义 **Emits.pageChange** 时的 TypeScript 提示和校验                 |
| **tableEmitPageSizeChangeDefiner**     | 定义 **Emits.pageSizeChange** 时的 TypeScript 提示和校验             |

### Responser

::: code-group

```typescript [默认 - 预处理]
/**
 * STable 默认支持如下响应数据
 *
 *    1. response: {
 *         result: {
 *           data: [], //数据源
 *           pageNo: 1, // 当前页数
 *           totalSize: 0, // 数据总条目
 *         }
 *       }
 *
 *
 *    2. response: {
 *         result: [] //数据源，没有分页
 *       }
 *
 *
 *    3. response: [] //数据源，没有分页
 *
 */
```

```typescript [自定义 - 预处理]
/**
 * 假设基于业务需求，STable 需要加载如下数据，则我们可以在 main.ts 全局自定义
 *
 *    response: {
 *      success: 'ok', // 'ok' 业务成功状态
 *      result: {
 *        pageSource: [...], //数据源
 *        pageCurrentNum: 1, // 当前页数
 *        pageTotalSize: 10, // 数据总条目
 *      }
 *    }
 */

tableResponserDefiner.interceptor = (response: any) => {
  if (response.success !== "ok") {
    return Promise.reject(response);
  }

  return {
    data: response.result.pageSource, // 数据源 -> 'data' 字段
    pageNo: response.result.pageCurrentNum, // 当前页数 -> 'pageNo' 字段
    totalSize: response.result.pageTotalSize, // 数据总条目 -> 'totalSize' 字段
  };
};
```

:::
