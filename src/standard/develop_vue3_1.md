# Vue3 单文件组件规范

## 组件顶级元素的顺序

- `template`、`script` 和 `style` 顺序必须一致，之间空一行隔开

```vue
<template>
  <section class="container">
    <AButton>自定义</AButton>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "CustomButton",
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: auto;
}
</style>
```

## 组件名由多个单词组成

- 这样做可以避免跟现有以及未来 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的

```typescript
// Bad
export default defineComponent({
  name: "Todo",
  // ...
});

// Good
export default defineComponent({
  name: "TodoComponent",
  // ...
});
```

## 组件名应为完整单词而非缩写

- 编辑器中自动补全已经让书写长命名的代价非常之低，而其带来的明确性却是非常宝贵的

```bash
  # Bad
  components/
    |- SdSettings.vue
    |- UProOpts.vue

  # Good
  components/
    |- StudentDashboardSettings.vue
    |- UserProfileOptions.vue
```

## 组件名中单词顺序按语境排序

- 组件名应该以高级别的(通常是一般化描述的)单词开头，以描述性的修饰词结尾，组件间排序关系一目了然

```bash
  # Bad
  components/
    |- ClearSearchButton.vue
    |- RunSearchButton.vue

  # Good
  components/
    |- SearchButtonClear.vue
    |- SearchButtonRun.vue
```

## 高耦合子组件名以父组件名为前缀

- 如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字或目录上

```bash
  # Bad
  components/
    |- TodoList.vue
    |- TodoItem.vue
    |- TodoButton.vue

  # Good
  components/
    |- TodoList.vue
    |- TodoListItem.vue
    |- TodoListItemButton.vue

  # Good
  components/
    |- TodoList/
    |- |- index.vue
    |- |- Item.vue
    |- |- ItemButton.vue
```

## 单文件组件文件名应 PascalCase 命名

- 单文件组件的文件名应该始终是单词大写开头 PascalCase

```bash
  # Bad
  components/
    |- mycomponent1.vue
    |- myComponent2.vue
    |- Mycomponent3.vue
    |- my-component4.vue

  # Good
  components/
    |- MyComponent1.vue
    |- MyComponent2.vue
    |- MyComponent3.vue
    |- MyComponent4.vue
```

## .vue 单文件模板应该只包含简单的表达式

- 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法

```vue
<!-- Bad -->
<template>
  <div class="container">
    {{
      fullName
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fullName = ref("todo component");
</script>

<!-- Good -->
<template>
  <div class="container">{{ computedFullName }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const fullName = ref("todo component");

const computedFullName = computed(() => {
  const names = fullName.value.split(" ");
  return names.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
});
</script>
```

## .vue 单文件的自闭合组件应省略闭合标签

- 自闭合组件表示它们不仅没有内容，没有了额外的闭合标签，代码也更简洁

```vue
<!-- Bad -->
<template>
  <MyComponent></MyComponent>
</template>

<!-- Good -->
<template>
  <MyComponent />
</template>
```

## .html 文件的自闭合组件不能省略闭合标签

- HTML 并不支持自闭合的自定义元素——只有官方的“空”元素

```vue
<!-- Bad -->
<template>
  <section>
    <div />
  </section>
</template>

<!-- Good -->
<template>
  <section>
    <div></div>
  </section>
</template>
```

## .vue 单文件的组件以 PascalCase 方式引用

- 采用 PascalCase 风格，具有较高可读性，同时避免跟现有的以及未来的 HTML 元素相冲突

```vue
<!-- Bad -->
<template>
  <new-component />
</template>

<script>
import NewComponent from "NewComponent";
</script>

<!-- Good -->
<template>
  <NewComponent />
</template>

<script>
import NewComponent from "NewComponent";
</script>
```

## .jsx/.tsx 文件的组件以 PascalCase 方式使用

- 使得代码的读者更容易分辨 Vue 组件和 HTML 元素

```typescript
   // Bad
   <script lang="ts">
   import NewComponent from 'NewComponent'

   export default defineComponent({
     name: 'TodoComponent',
     render () {
       return () => <new-component>
     }
   })
   </script>

   // Good
   <script lang="ts">
   import NewComponent from 'NewComponent'

   export default defineComponent({
     name: 'TodoComponent',
     render () {
       return () => <NewComponent>
     }
   }
   </script>
```

## 组件多个 attribute 应该分多行撰写

- 组件多个 attribute 元素每个一行，更具可读性

```typescript
  // Bad
  <script lang="ts">
  import NewComponent from 'NewComponent'

  export default defineComponent({
    name: 'TodoComponent',
    render () {
      return () => <NewComponent type="button" color="#f34d4d">
    }
  })
  </script>

  // Good
  <script lang="ts">
  import NewComponent from 'NewComponent'

  export default defineComponent({
    name: 'TodoComponent',
    render () {
      return () => (
        <NewComponent
          type="button"
          color="#f34d4d"
        >
      )
    }
  }
  </script>
```

## 组件的 Prop 定义尽量详细

- prop 定义尽量详细，至少需要指定类型，如果提供不正确的 prop，Vue 会帮助你捕获错误

```typescript
  // Bad
  export default defineComponent({
    props: ['status'],
  })

  // Good
  import { PropType } from 'vue'

  export default defineComponent({
    props: {
      status: {
        type: String as PropType<string>,
        default: '',
      },
    },
  })

  // Good
  import * as VueTypes from 'vue-types'

  export default defineComponent({
    props: {
      status: VueTypes.string().def(''),
    },
  })

  // Good
  <script setup lang="ts">
  export interface Props {
    status?: string
  }

  const props = defineProps<Props>()
  </script>
```

## 组件的 Prop 名应为驼峰式

- 在声明 prop 及 模板和 JSX 使用时，其命名应使用 camelCase

```vue
<!-- Bad -->
<template>
  <welcome-message :greeting-text="greetingText" />
</template>

<script>
export default defineComponent({
  name: "WelcomeMessage",
  props: {
    "greeting-text": VueTypes.string().def(""),
  },
});
</script>

<!-- Good -->
<template>
  <WelcomeMessage :greetingText="greetingText" />
</template>

<script lang="ts">
export default defineComponent({
  name: "WelcomeMessage",
  props: {
    greetingText: VueTypes.string().def(""),
  },
});
</script>

<!-- Good -->
<template>
  <WelcomeMessage :greetingText="greetingText" />
</template>

<script setup lang="ts">
export interface Props {
  greetingText?: string;
}
defineProps<Props>();
</script>
```

## 避免将 v-if 和 v-for 用在一起

- 为了不渲染本应该隐藏的列表, 则可将 v-if 移动至其父容器元素上

```vue
<!-- Bad -->
<template>
  <ul>
    <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<!-- Good -->
<template>
  <ul v-if="shouldShowUsers">
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
```

- 根据某属性过滤列表中的项目, 则可替换为一个计算属性, 让其返回过滤后的列表

```vue
<!-- Bad -->
<template>
  <ul>
    <li v-for="user in users" v-if="user.isActive" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<!-- Good -->
<template>
  <ul>
    <li v-for="user in activeUsers" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
```

## 必须为 v-for 设置键值 key

- 在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态

```vue
<!-- Bad -->
<template>
  <ul>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ul>
</template>

<!-- Good -->
<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
  </ul>
</template>
```

## 应为组件样式设置作用域

- 基于有作用域的样式可以避免与其他组件的样式发生冲突

```vue
<!-- Bad -->
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>

<!-- Good -->
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
```

## 组件/实例各指令采用简写

- 用 : 表示 v-bind: , @ 表示 v-on: , # 表示 v-slot:

```vue
<!-- Bad -->
<template>
  <div class="container">
    <template v-slot:header>
      <h1>A page title</h1>
    </template>
    <input v-bind:value="newValue" v-on:input="onInput" />
  </div>
</template>

<!-- Good -->
<template>
  <div class="container">
    <template #header>
      <h1>A page title</h1>
    </template>
    <input :value="newValue" @input="onInput" />
  </div>
</template>
```

## 组件/实例的选项顺序

- 如果使用 Vue2 Options 方式开发组件, 那么组件/实例的选项应该有统一的顺序

```bash
  # 副作用 (触发组件外的影响)
  el

  # 全局感知 (要求组件以外的知识)
  name
  parent

  # 组件类型 (更改组件的类型)
  functional

  # 模板修改器 (改变模板的编译方式)
  delimiters
  comments

  # 模板依赖 (模板内使用的资源)
  components
  directives
  filters

  # 组合 (向选项里合并 property)
  extends
  mixins

  # 接口 (组件的接口)
  inheritAttrs
  model
  props/propsData

  # 本地状态 (本地的响应式 property)
  data
  computed

  # 监听事件 (通过响应式事件触发的回调)
  watch

  # 生命周期钩子 (按照它们被调用的顺序)
  beforeCreate
  created
  beforeMount
  mounted
  beforeUpdate
  updated
  activated
  deactivated
  beforeDestroy
  destroyed

  # 非响应式的 property
  methods

  # 渲染 (组件输出的声明式描述)
  template/render
  renderError
```

## 组件/实例的属性顺序

- 组件/实例的属性应该有统一的顺序

```bash
  # 引用 (提供组件的引用)
  is
  id
  ref

  # 双向绑定 (把绑定和事件结合起来)
  v-model

  # 列表渲染 (创建多个变化的相同元素)
  v-for

  # 条件渲染 (元素是否渲染/显示)
  v-if
  v-else-if
  v-else
  v-show
  v-cloak

  # 其他属性 (attribute 或 prop)
  key
  ...

  # 渲染方式 (改变元素的渲染方式)
  v-pre
  v-once
  v-html
  v-text

  # 事件 (组件事件监听器)
  v-on
```
