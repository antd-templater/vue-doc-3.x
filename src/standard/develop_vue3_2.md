# Vue3 单文件组件范式

- 在 Vue2 中我们通常通过 选项式 API (Options API) 开发 Vue 组件
- 在 Vue3 中我们通常通过 组合式 API (Composition API) 开发 Vue 组件

## 组件范例 - Todo List

本章节我们主要以一个 Vue3 的 Todo List 单文件组件在 .vue 单文件 和 .tsx 单文件中开发为例, 从 选项式 API 到 组合式 API 逐一分析，分别对如下 `三种范式` 进行梳理说明。

<img src="/todo.png" alt="todo" style="width: 72%;">

a) .vue 单文件 Template 开发风格 - 选项式 API  
b) .vue 单文件 Template 开发风格 - 组合式 API  
c) .tsx 单文件 JSX/TSX 开发风格 - 组合式 API

## .vue 单文件 - 选项式 API (不推荐)

在这里我们使用 Vue2 `Options API` 的方式定义了 Todo List 组件，但与 Vue2 不同的是，我们提供了完备的 typescript 支持，定义 Props、Emits、Slots 的类型。

::: details 点击查看组件代码

::: code-group

```vue:line-numbers [template]
<template>
  <div class="todo-container">
    <div class="todo-header">
      <div class="todo-title">
        Todo List
      </div>
    </div>

    <div class="todo-content">
      <div class="todo-input-group">
        <input
          type="text"
          class="todo-input"
          :value="innerInput"
          placeholder="What needs to be done?"
          @input="(event: any) => onInput(event.target.value, event)"
          @keydown.enter="(event: any) => onAdd(innerInput, event)"
        />
        <div
          class="todo-button-add"
          @click.stop="(event: any) => onAdd(innerInput, event)"
        >
          Add
        </div>
      </div>

      <div
        class="todo-items-group"
        @scroll.passive="(event: any) => onScroll(event)"
      >
        <template v-for="(item, index) of innerFilter" :key="index">
          <div class="todo-item-group">
            <div
              :class="[
                'todo-item-content',
                { 'todo-item-done': item.state === true }
              ]"
              @click.stop="(event: Event) => onClick(item, event)"
            >
              <slot name="item" :item="item" :index="index">
                {{ index + 1 + ") " + item.title }}
              </slot>
            </div>

            <div class="todo-item-buttons">
              <div
                v-if="item.state !== true"
                class="todo-button-done"
                @click.stop="(event: any) => onChange(item, event)"
              >
                Done
              </div>

              <div
                v-if="item.state === true"
                class="todo-button-reset"
                @click.stop="(event: any) => onChange(item, event)"
              >
                Reset
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="todo-item-actions">
        <div class="todo-count">
          <span style="margin-right: 3px">Total: </span>
          <span style="color: #f34d4d">{{ innerCount }}</span>
        </div>

        <div class="todo-states">
          <div
            :class="[
              'todo-state',
              { 'todo-state-active': innerState === null }
            ]"
            @click.stop="(event: any) => onFilter(null, event)"
          >
            All
          </div>

          <div
            :class="[
              'todo-state',
              { 'todo-state-active': innerState === false }
            ]"
            @click.stop="(event: any) => onFilter(false, event)"
          >
            Uncompleted
          </div>

          <div
            :class="[
              'todo-state',
              { 'todo-state-active': innerState === true }
            ]"
            @click.stop="(event: any) => onFilter(true, event)"
          >
            Completed
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

```vue:line-numbers [script]
<script lang="ts">
import { PropType, SlotsType, defineComponent } from "vue";

export interface Item {
  title: string;
  state: boolean;
}

export default defineComponent({
  name: "TodoList",
  props: {
    input: {
      type: String as PropType<string>,
      default: ""
    },
    items: {
      type: Array as PropType<Item[]>,
      default: () => []
    },
    state: {
      type: Boolean as PropType<boolean | null>,
      default: null
    }
  },
  emits: {
    "update:items": (input: Array<Item>) => true,
    "update:state": (state: boolean | null) => true,
    scroll: (event: Event) => true,
    click: (item: Item) => true
  },
  slots: {} as SlotsType<{
    item: {
      index: number;
      item: Item;
    };
  }>,
  data() {
    return {
      innerInput: this.input,
      innerState: this.state,
      innerItems: [...this.items]
    };
  },
  computed: {
    innerFilter() {
      return this.innerState !== null
        ? this.innerItems.filter(item => item.state === this.innerState)
        : this.innerItems;
    },
    innerCount() {
      return this.innerFilter.length;
    }
  },
  watch: {
    input() {
      this.innerInput = this.input;
    },

    state() {
      this.innerState = this.state;
    },

    items() {
      this.innerItems = [...this.items];
    }
  },
  methods: {
    onInput(input: string, event: Event) {
      this.innerInput = input;
    },
    onAdd(input: string, event: Event) {
      if (input.trim()) {
        this.innerItems.push({
          title: input.trim(),
          state: false
        });
        this.$emit("update:items", [...this.innerItems]);
      }
      this.innerInput = "";
    },
    onChange(item: Item, event: Event) {
      item.state = !item.state;
      this.$emit("update:items", [...this.innerItems]);
    },
    onFilter(state: boolean | null, event: Event) {
      this.innerState = state;
      this.$emit("update:state", state);
    },
    onClick(item: Item, event: Event) {
      this.$emit("click", item);
    },
    onScroll(event: Event) {
      this.$emit("scroll", event);
    }
  }
});
</script>
```

```less:line-numbers [less]
.todo-container {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  .todo-header {
    width: 100%;
    height: 80px;
    margin-bottom: 30px;

    .todo-title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      color: #f27979;
    }
  }

  .todo-content {
    width: 100%;
    height: 540px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.15);
    overflow: hidden;

    .todo-input-group {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      height: 80px;
      background-color: #ffffff;
      border-bottom: solid 1px rgba(242, 121, 121, 0.55);
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.15);

      .todo-input {
        flex: 1 1 auto;
        width: 100%;
        height: 24px;
        padding: 28px 20px;
        color: #606266;
        font-size: 28px;
        margin: 0 0;
        border: none;
        outline: none;

        &::-webkit-input-placeholder {
          color: #cfcfcf;
        }

        &::-moz-placeholder {
          color: #cfcfcf;
        }
      }

      .todo-button-add {
        flex: 0 0 auto;
        width: 88px;
        height: 80px;
        color: #f27979;
        font-size: 28px;
        font-weight: bold;
        line-height: 80px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
      }
    }

    .todo-items-group {
      width: 100%;
      height: calc(100% - 135px);
      overflow: auto;

      .todo-item-group {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        flex: 1 1 auto;
        width: 100%;
        height: 64px;
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: solid 1px rgba(235, 235, 235, 0.65);
        overflow: hidden;

        .todo-item-content {
          flex: 1 1 auto;
          font-size: 21px;
          color: #303133;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          &.todo-item-done {
            color: #909399;
            text-decoration: line-through 1px #909399;
          }
        }

        .todo-item-buttons {
          flex: 0 0 auto;
          width: 60px;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
          text-align: right;

          & > .todo-button-done {
            color: #4caf50;
            cursor: pointer;
          }

          & > .todo-button-reset {
            color: #cfcfcf;
            cursor: pointer;
          }
        }
      }
    }

    .todo-item-actions {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 54px;
      padding: 5px 20px;
      box-sizing: border-box;

      .todo-count {
        flex: 0 0 auto;
        width: 120px;
      }

      .todo-states {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        flex: 0 0 auto;
        width: 320px;

        .todo-state {
          padding: 1.5px 10px 2.5px;
          margin: 0 14px;
          color: #c9c9c9;
          font-size: 15px;
          border: solid 1px transparent;
          box-sizing: border-box;
          cursor: pointer;

          &.todo-state-active {
            color: #4caf50;
            border-radius: 3px;
            border: solid 1px #4caf50;
          }
        }
      }
    }
  }
}
```

:::

::: details 点击查看类型定义

::: code-group

```tsx [定义 Props 类型]
  props: {
    state: {
      type: Boolean as PropType<boolean | null>,
      default: null
    }
  }

```

```tsx [定义 Emits 类型]
  emits: {
    "update:items": (input: Array<Item>) => true,
    "update:state": (state: boolean | null) => true,
    "scroll": (event: Event) => true,
    "click": (item: Item) => true
  }
```

```tsx [定义 Slots 类型]
  export interface Item {
    title: string;
    state: boolean;
  }

  slots: {} as SlotsType<{
    item: { index: number; item: Item; }
  }>

```

:::

::: danger 选项式 API + Template => .vue 单文件

仅在 Vue2 老项目 迁移到 Vue3 项目中适量使用。在 Vue3 新组件开发中 `不推荐!!!`

:::

## .vue 单文件 - 组合式 API (推荐)

在这里我们使用 Composition API 的方式定义了 Todo List 组件，并采用 Template 开发风格。同时我们也提供了完备的 typescript 支持，定义 Props、Emits、Slots 的类型。

另: 如果有父组件需要引用子组件属性或 API，则需要 defineExpose 进行导出。

::: details 点击查看组件代码

::: code-group

```vue:line-numbers{31,32} [template]
<template>
  <div class="todo-container">
    <div class="todo-header">
      <div class="todo-title">
        Todo List
      </div>
    </div>

    <div class="todo-content">
      <div class="todo-input-group">
        <input
          type="text"
          class="todo-input"
          :value="innerInput"
          placeholder="What needs to be done?"
          @input="(event: any) => onInput(event.target.value, event)"
          @keydown.enter="(event: any) => onAdd(innerInput, event)"
        />
        <div
          class="todo-button-add"
          @click.stop="(event: any) => onAdd(innerInput, event)"
        >
          Add
        </div>
      </div>

      <div
        class="todo-items-group"
        @scroll.passive="(event: any) => onScroll(event)"
      >
        <!-- 我们可以把 Todo List 列表部分，定义在 script setup 中 (TodoItems) -->
        <TodoItems />
      </div>

      <div class="todo-item-actions">
        <div class="todo-count">
          <span style="margin-right: 3px">Total: </span>
          <span style="color: #f34d4d">{{ innerCount }}</span>
        </div>

        <div class="todo-states">
          <div
            :class="[
              'todo-state',
              { 'todo-state-active': innerState === null }
            ]"
            @click.stop="(event: any) => onFilter(null, event)"
          >
            All
          </div>

          <div
            :class="[
              'todo-state',
              { 'todo-state-active': innerState === false }
            ]"
            @click.stop="(event: any) => onFilter(false, event)"
          >
            Uncompleted
          </div>

          <div
            :class="[
              'todo-state',
              { 'todo-state-active': innerState === true }
            ]"
            @click.stop="(event: any) => onFilter(true, event)"
          >
            Completed
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

```vue:line-numbers{86-115} [script]
<script setup lang="tsx">
import { ref, computed } from "vue";

export interface Item {
  title: string;
  state: boolean;
}

export interface Emits {
  (e: "update:items", input: Item[]): void;
  (e: "update:state", state: boolean | null): void;
  (e: "scroll", event: Event): void;
  (e: "click", item: Item): void;
}

export interface Slots {
  item(props: { index: number; item: Item }): any;
}

export interface Props {
  input: string;
  items: Item[];
  state: boolean | null;
}

defineOptions({
  name: "TodoList",
  inheritAttrs: false
});

// eslint-disable-next-line no-unused-vars
const slots = defineSlots<Slots>();
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const innerInput = ref(props.input);
const innerState = ref(props.state);
const innerItems = ref(props.items);

const innerFilter = computed(() => {
  return innerState.value !== null
    ? innerItems.value.filter(item => item.state === innerState.value)
    : innerItems.value;
});

const innerCount = computed(() => {
  return innerFilter.value.length;
});

const onInput = (input: string, event: Event) => {
  innerInput.value = input;
};

const onAdd = (input: string, event: Event) => {
  if (input.trim()) {
    innerItems.value.push({
      title: input.trim(),
      state: false
    });
    emit("update:items", [...innerItems.value]);
  }
  innerInput.value = "";
  event.stopPropagation();
};

const onChange = (item: Item, event: Event) => {
  item.state = !item.state;
  emit("update:items", [...innerItems.value]);
  event.stopPropagation();
};

const onFilter = (state: boolean | null, event: Event) => {
  innerState.value = state;
  emit("update:state", state);
};

const onClick = (item: Item, event: Event) => {
  emit("click", item);
  event.stopPropagation();
};

const onScroll = (event: Event) => {
  emit("scroll", event);
};

const TodoItems = () =>
  innerFilter.value.map((item, index) => {
    return (
      <div class="todo-item-group">
        <div
          class={[
            "todo-item-content",
            { "todo-item-done": item.state === true }
          ]}
          onClick={(event: Event) => onClick(item, event)}
        >
          {slots.item
            ? slots.item({ index, item })
            : index + 1 + ") " + item.title}
        </div>

        <div class="todo-item-buttons">
          <div
            class={{
              "todo-button-done": item.state !== true,
              "todo-button-reset": item.state === true
            }}
            onClick={(event: any) => onChange(item, event)}
          >
            {item.state !== true ? "Done" : "Reset"}
          </div>
        </div>
      </div>
    );
  });

defineExpose({
  onInput,
  onAdd,
  onChange,
  onFilter,
  onScroll,
  onClick
});
</script>
```

```less:line-numbers [less]
.todo-container {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  .todo-header {
    width: 100%;
    height: 80px;
    margin-bottom: 30px;

    .todo-title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      color: #f27979;
    }
  }

  .todo-content {
    width: 100%;
    height: 540px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.15);
    overflow: hidden;

    .todo-input-group {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      height: 80px;
      background-color: #ffffff;
      border-bottom: solid 1px rgba(242, 121, 121, 0.55);
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.15);

      .todo-input {
        flex: 1 1 auto;
        width: 100%;
        height: 24px;
        padding: 28px 20px;
        color: #606266;
        font-size: 28px;
        margin: 0 0;
        border: none;
        outline: none;

        &::-webkit-input-placeholder {
          color: #cfcfcf;
        }

        &::-moz-placeholder {
          color: #cfcfcf;
        }
      }

      .todo-button-add {
        flex: 0 0 auto;
        width: 88px;
        height: 80px;
        color: #f27979;
        font-size: 28px;
        font-weight: bold;
        line-height: 80px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
      }
    }

    .todo-items-group {
      width: 100%;
      height: calc(100% - 135px);
      overflow: auto;

      .todo-item-group {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        flex: 1 1 auto;
        width: 100%;
        height: 64px;
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: solid 1px rgba(235, 235, 235, 0.65);
        overflow: hidden;

        .todo-item-content {
          flex: 1 1 auto;
          font-size: 21px;
          color: #303133;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          &.todo-item-done {
            color: #909399;
            text-decoration: line-through 1px #909399;
          }
        }

        .todo-item-buttons {
          flex: 0 0 auto;
          width: 60px;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
          text-align: right;

          & > .todo-button-done {
            color: #4caf50;
            cursor: pointer;
          }

          & > .todo-button-reset {
            color: #cfcfcf;
            cursor: pointer;
          }
        }
      }
    }

    .todo-item-actions {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 54px;
      padding: 5px 20px;
      box-sizing: border-box;

      .todo-count {
        flex: 0 0 auto;
        width: 120px;
      }

      .todo-states {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        flex: 0 0 auto;
        width: 320px;

        .todo-state {
          padding: 1.5px 10px 2.5px;
          margin: 0 14px;
          color: #c9c9c9;
          font-size: 15px;
          border: solid 1px transparent;
          box-sizing: border-box;
          cursor: pointer;

          &.todo-state-active {
            color: #4caf50;
            border-radius: 3px;
            border: solid 1px #4caf50;
          }
        }
      }
    }
  }
}
```

:::

::: details 点击查看类型定义

::: code-group

```tsx [定义组件名称]
defineOptions({
  name: "TodoList",
  inheritAttrs: false,
});
```

```tsx [定义 Props 类型]
export interface Props {
  input: string;
  items: Item[];
  state: boolean | null;
}

const props = defineProps<Props>();
```

```tsx [定义 Emits 类型]
export interface Emits {
  (e: "update:items", input: Item[]): void;
  (e: "update:state", state: boolean | null): void;
  (e: "scroll", event: Event): void;
  (e: "click", item: Item): void;
}

const emit = defineEmits<Emits>();
```

```tsx [定义 Slots 类型]
export interface Slots {
  item(props: { index: number; item: Item }): any;
}

const slots = defineSlots<Slots>();
```

```tsx [导出 属性/API]
defineExpose({
  onInput,
  onAdd,
  onChange,
  onFilter,
  onScroll,
  onClick,
});
```

:::

::: tip 组合式 API + Template => .vue 单文件

因其具有较好的封装性、可读性和维护性，是 Vue 在业务组件开发上最为采用和推荐的一种 `(推荐)`。

:::

## .tsx 单文件 - 组合式 API (推荐)

在这里我们使用 Composition API 的方式定义了 Todo List 组件，并采用 TSX 开发风格。同时我们也提供了完备的 typescript 支持，定义 Props、Emits、Slots 的类型。

另: 如果有父组件需要引用子组件属性或 API，则需要 ctx.expose 进行导出。

::: details 点击查看组件代码

::: code-group

```tsx:line-numbers [script]
import * as VueTypes from 'vue-types'

import {
  ref,
  computed,
  PropType,
  SlotsType,
  withModifiers,
  defineComponent
} from "vue";

export interface Item {
  title: string;
  state: boolean;
}

export default defineComponent({
  name: "TodoList",
  props: {
    input: VueTypes.string().def(''),
    items: VueTypes.array<Item>().def(() => [])
    state: VueTypes.any<boolean|null>().def(null)
  },
  emits: {
    "update:items": (input: Array<Item>) => true,
    "update:state": (state: boolean | null) => true,
    "scroll": (event: Event) => true,
    "click": (item: Item) => true
  },
  slots: {} as SlotsType<{
    item: {
      index: number;
      item: Item;
    };
  }>,
  setup(props, ctx) {
    const innerInput = ref(props.input);
    const innerState = ref(props.state);
    const innerItems = ref(props.items);

    const innerFilter = computed(() => {
      return innerState.value !== null
        ? innerItems.value.filter(item => item.state === innerState.value)
        : innerItems.value;
    });

    const innerCount = computed(() => {
      return innerFilter.value.length;
    });

    const onInput = (input: string, event: Event) => {
      innerInput.value = input;
    };

    const onAdd = (input: string, event: Event) => {
      if (input.trim()) {
        innerItems.value.push({
          title: input.trim(),
          state: false
        });
        ctx.emit("update:items", [...innerItems.value]);
      }
      innerInput.value = "";
      event.stopPropagation();
    };

    const onChange = (item: Item, event: Event) => {
      item.state = !item.state;
      ctx.emit("update:items", [...innerItems.value]);
      event.stopPropagation();
    };

    const onFilter = (state: boolean | null, event: Event) => {
      innerState.value = state;
      ctx.emit("update:state", state);
    };

    const onClick = (item: Item, event: Event) => {
      ctx.emit("click", item);
      event.stopPropagation();
    };

    const onScroll = (event: Event) => {
      ctx.emit("scroll", event);
    };

    ctx.expose({
      onInput,
      onAdd,
      onChange,
      onFilter,
      onScroll,
      onClick
    });

    return () => (
      <div class="todo-container">
        <div class="todo-header">
          <div class="todo-title">Todo List</div>
        </div>

        <div class="todo-content">
          <div class="todo-input-group">
            <input
              type="text"
              class="todo-input"
              value={innerInput.value}
              placeholder="What needs to be done?"
              onInput={(event: any) => onInput(event.target.value, event)}
              onKeydown={(event: any) => event.keyCode === 13 && onAdd(innerInput.value, event)}
            />

            <div
              class="todo-button-add"
              onClick={(event: any) => onAdd(innerInput.value, event)}
            >
              Add
            </div>
          </div>

          <div
            class="todo-items-group" // @ts-ignore
            onScrollPassive={(event: any) => onScroll(event)}
          >
            {innerFilter.value.map((item, index) => {
              return (
                <div class="todo-item-group">
                  <div
                    class={[ "todo-item-content", { "todo-item-done": item.state === true } ]}
                    onClick={(event: Event) => onClick(item, event)}
                  >
                    {ctx.slots.item ? ctx.slots.item({ index, item }) : index + 1 + ") " + item.title}
                  </div>

                  <div class="todo-item-buttons">
                    <div
                      class={{
                        "todo-button-done": item.state !== true,
                        "todo-button-reset": item.state === true
                      }}
                      onClick={(event: any) => onChange(item, event)}
                    >
                      {item.state !== true ? "Done" : "Reset"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="todo-item-actions">
            <div class="todo-count">
              <span style="margin-right: 3px">Total: </span>
              <span style="color: #f34d4d">{innerCount.value}</span>
            </div>

            <div class="todo-states">
              <div
                class={["todo-state", { "todo-state-active": innerState.value === null }]}
                onClick={withModifiers((event: any) => onFilter(null, event), ["stop"])}
              >
                All
              </div>

              <div
                class={["todo-state", { "todo-state-active": innerState.value === false }  ]}
                onClick={withModifiers((event: any) => onFilter(false, event), ["stop"])}
              >
                Uncompleted
              </div>

              <div
                class={["todo-state", { "todo-state-active": innerState.value === true }]}
                onClick={withModifiers((event: any) => onFilter(true, event), ["stop"])}
              >
                Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
```

```less:line-numbers [less]
.todo-container {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  .todo-header {
    width: 100%;
    height: 80px;
    margin-bottom: 30px;

    .todo-title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      color: #f27979;
    }
  }

  .todo-content {
    width: 100%;
    height: 540px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.15);
    overflow: hidden;

    .todo-input-group {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      height: 80px;
      background-color: #ffffff;
      border-bottom: solid 1px rgba(242, 121, 121, 0.55);
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.15);

      .todo-input {
        flex: 1 1 auto;
        width: 100%;
        height: 24px;
        padding: 28px 20px;
        color: #606266;
        font-size: 28px;
        margin: 0 0;
        border: none;
        outline: none;

        &::-webkit-input-placeholder {
          color: #cfcfcf;
        }

        &::-moz-placeholder {
          color: #cfcfcf;
        }
      }

      .todo-button-add {
        flex: 0 0 auto;
        width: 88px;
        height: 80px;
        color: #f27979;
        font-size: 28px;
        font-weight: bold;
        line-height: 80px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
      }
    }

    .todo-items-group {
      width: 100%;
      height: calc(100% - 135px);
      overflow: auto;

      .todo-item-group {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        flex: 1 1 auto;
        width: 100%;
        height: 64px;
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: solid 1px rgba(235, 235, 235, 0.65);
        overflow: hidden;

        .todo-item-content {
          flex: 1 1 auto;
          font-size: 21px;
          color: #303133;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          &.todo-item-done {
            color: #909399;
            text-decoration: line-through 1px #909399;
          }
        }

        .todo-item-buttons {
          flex: 0 0 auto;
          width: 60px;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
          text-align: right;

          & > .todo-button-done {
            color: #4caf50;
            cursor: pointer;
          }

          & > .todo-button-reset {
            color: #cfcfcf;
            cursor: pointer;
          }
        }
      }
    }

    .todo-item-actions {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 54px;
      padding: 5px 20px;
      box-sizing: border-box;

      .todo-count {
        flex: 0 0 auto;
        width: 120px;
      }

      .todo-states {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        flex: 0 0 auto;
        width: 320px;

        .todo-state {
          padding: 1.5px 10px 2.5px;
          margin: 0 14px;
          color: #c9c9c9;
          font-size: 15px;
          border: solid 1px transparent;
          box-sizing: border-box;
          cursor: pointer;

          &.todo-state-active {
            color: #4caf50;
            border-radius: 3px;
            border: solid 1px #4caf50;
          }
        }
      }
    }
  }
}
```

:::

::: details 点击查看类型定义

::: code-group

```tsx [定义 Props 类型]
import * as VueTypes from 'vue-types'

export interface Item {
  title: string;
  state: boolean;
}

export default defineComponent({
  name: "TodoList",
  props: {
    input: VueTypes.string().def(''),
    items: VueTypes.array<Item>().def(() => [])
    state: VueTypes.any<boolean|null>().def(null)
  }
  // ...
})
```

```tsx [定义 Emits 类型]
export interface Item {
  title: string;
  state: boolean;
}

export default defineComponent({
  name: "TodoList",
  emits: {
    "update:items": (input: Array<Item>) => true,
    "update:state": (state: boolean | null) => true,
    scroll: (event: Event) => true,
    click: (item: Item) => true,
  },
  // ...
});
```

```tsx [定义 Slots 类型]
export interface Item {
  title: string;
  state: boolean;
}

export default defineComponent({
  name: "TodoList",
  slots: {} as SlotsType<{
    item: {
      index: number;
      item: Item;
    };
  }>,
  // ...
});
```

```tsx [导出 属性/API]
export interface Item {
  title: string;
  state: boolean;
}

export default defineComponent({
  name: "TodoList",
  // ...

  setup(props, ctx) {
    // ...

    const onInput = (input: string, event: Event) => {
      innerInput.value = input;
    };

    const onChange = (item: Item, event: Event) => {
      item.state = !item.state;
      ctx.emit("update:items", [...innerItems.value]);
      event.stopPropagation();
    };

    ctx.expose({
      onInput,
      onChange,
      // ...
    });

    return () => {
      // ...
    };
  },
});
```

:::

::: tip 组合式 API + TSX => .tsx 单文件

相比 Template 使用 HTML 标签声明方式, 它虽然在可读性上略逊一筹。但它却拥有更完善的封装能力，借助于 JS/TS 的语法特性在动态渲上 (如动态卡槽、动态组件等) 拥有更加细腻的控制能力和自定义能力。是在使用 Vue3 开发基础组件库时，经常会采取的一种方式。

:::

## 了解更多 Vue3 组件范式

可以参考这篇文章 [《浅谈 Vue3 组件开发 — Template / JSX》](https://juejin.cn/post/7279720525362216960)
