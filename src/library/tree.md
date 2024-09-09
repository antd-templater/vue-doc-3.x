# 树形组件 - STree

借助 ATree 的 checkStrictly="true" 特性，重新实现了 `勾选`、`选中`、`展开`、`禁用`、`异步加载` 等联动逻辑

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
import Base from '@/library/tree/Base.md'
import Mode from '@/library/tree/Mode.md'
import Search from '@/library/tree/Search.md'
import Disabled from '@/library/tree/Disabled.md'
import LoadData from '@/library/tree/LoadData.md'
import Draggable from '@/library/tree/Draggable.md'
import Accordion from '@/library/tree/Accordion.md'
import CustomField from '@/library/tree/CustomField.md'
import CustomSlots from '@/library/tree/CustomSlots.md'
import CheckedLevel from '@/library/tree/CheckedLevel.md'
</script>

## 演示

<div code-runner style="height: 486px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="基本用法">基本用法</h3>
  </div>
  <div style="padding: 1px;">
    <Base/>
  </div>
</div>

<div code-runner style="height: 486px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="禁用用法">禁用用法</h3>
  </div>
  <div style="padding: 1px;">
    <Disabled/>
  </div>
</div>

<div code-runner style="height: 487px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="搜索用法">搜索用法</h3>
  </div>
  <div style="padding: 1px;">
    <Search/>
  </div>
</div>

<div code-runner style="height: 486px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义字段">自定义字段</h3>
  </div>
  <div style="padding: 1px;">
    <CustomField/>
  </div>
</div>

<div code-runner style="height: 480px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义层级">自定义层级</h3>
  </div>
  <div style="padding: 1px;">
    <CheckedLevel/>
  </div>
</div>

<div code-runner style="height: 480px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="自定义卡槽">自定义卡槽</h3>
  </div>
  <div style="padding: 1px;">
    <CustomSlots/>
  </div>
</div>

<div code-runner style="height: 425px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="手风琴模式">手风琴模式</h3>
  </div>
  <div style="padding: 1px;">
    <Accordion/>
  </div>
</div>

<div code-runner style="height: 752px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="选项link模式">选项link模式</h3>
  </div>
  <div style="padding: 1px;">
    <Mode/>
  </div>
</div>

<div code-runner style="height: 372px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="异步加载节点">异步加载节点</h3>
  </div>
  <div style="padding: 1px;">
    <LoadData/>
  </div>
</div>

<div code-runner style="height: 540px; overflow: hidden;">
  <div code-runner-title>
    <h3 id="拖拽Tree节点">拖拽Tree节点</h3>
  </div>
  <div style="padding: 1px;">
    <Draggable/>
  </div>
</div>

## API

### Props

#### STree Props

| 参数                              | 说明                                                                                                   | 类型                 |    默认值     |
| :-------------------------------- | :----------------------------------------------------------------------------------------------------- | :------------------- | :-----------: |
| **class**                         | 定义 **STree** 组件 class 类                                                                           | any                  |       -       |
| **style**                         | 定义 **STree** 组件 样式                                                                               | any                  |       -       |
| **height**                        | 源自 **ATree** 组件 `props.height`                                                                     | number               |       -       |
| **bgColor**                       | 定义 **STree** 组件 背景色                                                                             | string               | 'transparent' |
| **treeData (v-model)**            | **STree** 数据源                                                                                       | STreeSourceNode[]    |      []       |
| **loadData**                      | 异步加载远程节点                                                                                       | STreeLoadData        |       -       |
| **dropHandler**                   | 拖拽结束时的拦截器，仅在 `draggable="true"` 时启用                                                     | STreeDropHandler     |       -       |
| **checkedKeys (v-model)**         | 节点已勾选的选项                                                                                       | string[] \| number[] |      []       |
| **selectedKeys (v-model)**        | 节点已选中的选项                                                                                       | string[] \| number[] |      []       |
| **expandedKeys (v-model)**        | 已展开的节点选项                                                                                       | string[] \| number[] |      []       |
| **selectedMode**                  | 节点选中时的模式，[选项 link 模式](#选项link模式)                                                      | 'link' \| 'default'  |   'default'   |
| **checkedMode**                   | 节点勾选时的模式，[选项 link 模式](#选项link模式)                                                      | 'link' \| 'default'  |   'default'   |
| **filterField (v-model)**         | 搜索模式，支持 **key** / **title** 两种模式, 使用 **title** 时支持模糊匹配                             | 'key' \| 'title'     |    'title'    |
| **filterValue (v-model)**         | 搜索值                                                                                                 | string               |       -       |
| **fieldNames (原 replaceFields)** | 替换 `title`, `key`, `children` 字段, 若还使用 **replaceFields**，请及时修改 [详情](#stree-fieldnames) | object               |       -       |
| **allowCheckedLevel**             | 指定 tree 节点 selectable 层级                                                                         | number               |       1       |
| **allowSelectedLevel**            | 指定 tree 节点 checkable 层级                                                                          | number               |       1       |
| **forceCleanWhenNotInTreeNodes**  | 是否清理不在当前 treeData 中的 `checkedKeys/selectedKeys`                                              | boolean              |     false     |
| **forceCleanWhenRemoveTreeNode**  | 是否清理从当前 treeData 中移除的那些 `checkedKeys/selectedKeys`                                        | boolean              |     true      |
| **forceApplyDisableCheckbox**     | 当某父节点禁用可选项时 (disableCheckbox), 是否强制其子节点也禁用可选项                                 | boolean              |     false     |
| **forceApplyDisabled**            | 当某父节点禁用选项时 (disabled), 是否强制其子节点也禁用选项                                            | boolean              |     false     |
| **alwaysShowTitleButton**         | tree 节点定义的 `titleButton` 是否一直显示，而不是只有鼠标 hover 才显示                                | boolean              |     false     |
| **allowSelectToCheck**            | 当选中某 tree 节点选择时，是否当 **切换该节点勾选项** 进行处理                                         | boolean              |     false     |
| **allowAutoCollapsed**            | 当折叠某节点时，是否同时折叠该节点名下的父节点                                                         | boolean              |     true      |
| **allowAutoExpanded**             | 当展开某节点时，如果该节点名下仅有一个节点，且为父节点时，是否展开该父节点                             | boolean              |     true      |
| **allowAutoExpandLoad**           | 当尝试展开某节点名下父节点，发现该父节点需要异步加载节点时，是否继续展开                               | boolean              |     fasle     |
| **allowMultiExpanded**            | 是否允许多个展开项存在。当设置为 **false** 时，即出现了手风琴效果                                      | boolean              |     true      |
| **defaultExpandAll**              | 初次渲染 tree 节点时，是否展开当前所有父节点                                                           | boolean              |     false     |
| **allowUnExpanded**               | 是否允许折叠所有 tree 节点                                                                             | boolean              |     false     |
| **allowUnSelected**               | 是否允许 tree 节点全部未 selected                                                                      | boolean              |     false     |
| **allowUnChecked**                | 是否允许 tree 节点全部未 checked                                                                       | boolean              |     true      |
| **iconfontUrl**                   | 配置 tree 图标 iconfontUrl                                                                             | string               |       -       |
| **iconPrefix**                    | 配置 tree 图标 iconPrefix                                                                              | string               |       -       |
| **iconStyle**                     | 配置 tree 图标 style 样式                                                                              | object               |       -       |
| **iconClass**                     | 配置 tree 图标 class 类                                                                                | object               |       -       |
| **selectable**                    | tree 节点是否可选中                                                                                    | boolean              |     true      |
| **checkable**                     | 设置独立节点是否展示 Checkbox                                                                          | boolean              |     false     |
| **blockNode**                     | 是否 tree 节点占据一行                                                                                 | boolean              |     false     |
| **draggable**                     | 设置节点可拖拽                                                                                         | boolean              |     false     |
| **disabled**                      | 是否禁用                                                                                               | boolean              |     false     |
| **showIcon**                      | 是否展示图标                                                                                           | boolean              |     false     |
| **showLine**                      | 是否展示连接线                                                                                         | boolean              |     false     |
| **loading**                       | 是否 loading                                                                                           | boolean              |     false     |
| **virtual**                       | 设置 false 时关闭虚拟滚动                                                                              | boolean              |     true      |
| **tooltip**                       | 是否启用 SEllipsis, 当 tree 节点标题内容过长，自动省略和提示                                           | boolean              |     true      |
| **sticky**                        | 是否对 tree 根节点 进行置顶吸附                                                                        | boolean              |     false     |

#### STree FieldNames

| 参数                          | 说明                             | 类型   | 默认值                      |
| :---------------------------- | :------------------------------- | :----- | :-------------------------- |
| **key**                       | 定义 `key`                       | string | 'key'                       |
| **icon**                      | 定义 `icon`                      | string | 'icon'                      |
| **title**                     | 定义 `title`                     | string | 'title'                     |
| **isLeaf**                    | 定义 `isLeaf`                    | string | 'isLeaf'                    |
| **children**                  | 定义 `children`                  | string | 'children'                  |
| **disabled**                  | 定义 `disabled`                  | string | 'disabled'                  |
| **disableCheckbox**           | 定义 `disableCheckbox`           | string | 'disableCheckbox'           |
| **forceApplyDisabled**        | 定义 `forceApplyDisabled`        | string | 'forceApplyDisabled'        |
| **alwaysShowTitleButton**     | 定义 `alwaysShowTitleButton`     | string | 'alwaysShowTitleButton'     |
| **forceApplyDisableCheckbox** | 定义 `forceApplyDisableCheckbox` | string | 'forceApplyDisableCheckbox' |

### Emits

| 事件       | 说明                           | 类型                                |
| :--------- | :----------------------------- | :---------------------------------- |
| **check**  | tree 节点 勾选项发生变化时回调 | (emiter: STreeEmiterCheck) => true  |
| **select** | tree 节点 选中项发生变化时回调 | (emiter: STreeEmiterSelect) => true |
| **expand** | tree 节点 展开项发生变化时回调 | (emiter: STreeEmiterExpand) => true |
| **change** | tree 节点 发生变化时回调       | (emiter: STreeEmiterChange) => true |

### Slots

| 插槽名                | 插槽说明                                  | 插槽参数                                   |
| :-------------------- | :---------------------------------------- | :----------------------------------------- |
| **iconRoot**          | 定义 tree 根节点 图标                     | STreeSourceNode                            |
| **iconParent**        | 定义 tree 父节点 图标                     | STreeSourceNode                            |
| **iconLeaf**          | 定义 tree 叶子节点 图标                   | STreeSourceNode                            |
| **titleRoot**         | 定义 tree 根节点 title 内容(不建议使用)   | STreeSourceNode                            |
| **titleParent**       | 定义 tree 父节点 title 内容(不建议使用)   | STreeSourceNode                            |
| **titleLeaf**         | 定义 tree 叶子节点 title 内容(不建议使用) | STreeSourceNode                            |
| **titleRootLabel**    | 定义 tree 根节点 title 中 标题            | STreeSourceNode                            |
| **titleParentLabel**  | 定义 tree 父节点 title 中 标题            | STreeSourceNode                            |
| **titleLeafLabel**    | 定义 tree 叶子节点 title 中 标题          | STreeSourceNode                            |
| **titleRootButton**   | 定义 tree 根节点 title 中 按钮组          | STreeSourceNode                            |
| **titleParentButton** | 定义 tree 父节点 title 中 按钮组          | STreeSourceNode                            |
| **titleLeafButton**   | 定义 tree 叶子节点 title 中 按钮组        | STreeSourceNode                            |
| **switcherIcon**      | 定义 tree 节点 展开/折叠图标              | STreeSourceNode & \{ switcherCls: string;} |

### Expose

| 属性/方法名              | 说明描述                                         | 类型                                                                                       |
| :----------------------- | :----------------------------------------------- | :----------------------------------------------------------------------------------------- |
| **filterTreeNodes**      | 搜索 tree 节点匹配项                             | (props: STreeFilterProps, <br> expand?: boolean) => void                                   |
| **reloadTreeNodes**      | 重新加载某 tree 节点数据                         | (nodes: STreeSourceNodes, <br> parentKey?: STreeKey \| null, <br> force?: boolean) => void |
| **appendTreeNodes**      | 追加某 tree 节点数据                             | (nodes: STreeSourceNodes, <br> parentKey?: STreeKey \| null, <br> force?: boolean) => void |
| **removeTreeNodes**      | 移除某 tree 节点数据                             | (nodes: STreeSourceNodes, <br> parentKey?: STreeKey \| null, <br> force?: boolean) => void |
| **changeTreeNodes**      | 更新某 tree 节点数据                             | (nodes: STreeSourceNodes, <br> parentKey?: STreeKey \| null, <br> force?: boolean) => void |
| **pickUpperTreeNodes**   | 根据 `key`, 查询匹配节点的所有上层 tree 节点数据 | (key: STreeKey, level?: number) => Array\<STreeSourceNode>                                 |
| **pickLowerTreeNodes**   | 根据 `key`, 查询匹配节点的所有下层 tree 节点数据 | (key: STreeKey, level?: number) => Array\<STreeSourceNode>                                 |
| **pickMatchTreeNode**    | 根据 `key`, 查询匹配节点的数据                   | (key: STreeKey, level?: number) => STreeSourceNode \| null                                 |
| **doTreeAllExpanded**    | 展开所有可展开的 tree 节点                       | () => void                                                                                 |
| **doTreeAllCollapsed**   | 折叠所有已展开的 tree 节点                       | () => void                                                                                 |
| **doTreeToggleExpanded** | 切换一些 tree 节点展开项                         | (keys: STreeKeys) => void                                                                  |
| **doTreeOnlyExpanded**   | 仅展开指定的一些 tree 节点                       | (keys: STreeKeys) => void                                                                  |
| **doTreePushExpanded**   | 追加指定的 tree 节点展开项                       | (keys: STreeKeys) => void                                                                  |
| **doTreePopExpanded**    | 折叠指定的 tree 节点展开项                       | (keys: STreeKeys) => void                                                                  |
| **doTreeAllChecked**     | 勾选所有可勾选的 tree 节点                       | () => void                                                                                 |
| **doTreeAllUnChecked**   | 取消所有已勾选的 tree 节点                       | () => void                                                                                 |
| **doTreeToggleChecked**  | 切换一些 tree 节点勾选项                         | (keys: STreeKeys) => void                                                                  |
| **doTreeOnlyChecked**    | 仅勾选指定的一些 tree 节点                       | (keys: STreeKeys) => void                                                                  |
| **doTreePushChecked**    | 追加指定的 tree 节点勾选项                       | (keys: STreeKeys) => void                                                                  |
| **doTreePopChecked**     | 取消指定的 tree 节点勾选项                       | (keys: STreeKeys) => void                                                                  |
| **doTreeSelected**       | 手动选中某 tree 节点选项                         | (keys: STreeKeys) => void                                                                  |
| **forceUpdate**          | 手动更新并重新渲染 STree 组件                    | (clear?: boolean) => void                                                                  |

### Definer

| 定义                       | 说明                                                  |
| :------------------------- | :---------------------------------------------------- |
| **treeDataDefiner**        | 定义 **Props.treeData** 时的 TypeScript 提示和校验    |
| **treeLoadDataDefiner**    | 定义 **Props.loadData** 时的 TypeScript 提示和校验    |
| **treeDropHandlerDefiner** | 定义 **Props.dropHandler** 时的 TypeScript 提示和校验 |
| **treeFieldNamesDefiner**  | 定义 **Props.fieldNames** 时的 TypeScript 提示和校验  |
| **treeEmitCheckDefiner**   | 定义 **Emits.check** 时的 TypeScript 提示和校验       |
| **treeEmitSelectDefiner**  | 定义 **Emits.select** 时的 TypeScript 提示和校验      |
| **treeEmitExpandDefiner**  | 定义 **Emits.expand** 时的 TypeScript 提示和校验      |
| **treeEmitChangeDefiner**  | 定义 **Emits.change** 时的 TypeScript 提示和校验      |
