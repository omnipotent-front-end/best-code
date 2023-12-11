# compositions

## 入门 todo

toggleLogic.ts

```ts
import { ref } from "@vue/composition-api";

export const toggleLogic = () => {
  const show = ref(true);
  const toggle = () => {
    show.value = !show.value;
  };
  return { show, toggle };
};
```

todoListLogic.ts

```ts
import { reactive, computed, ComputedRef } from "@vue/composition-api";

type Todo = {
  id: number;
  completed: boolean;
  editing: boolean;
  title: string;
};
export const totoListLogic = () => {
  const state = reactive({
    todoList: [
      {
        id: 1,
        title: "hello",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "world",
        completed: false,
        editing: false,
      },
    ],
    newTodo: undefined as undefined | string,
  });

  const getLatestTodoId: ComputedRef<number> = computed(
    (): number => {
      const lastTodo: Todo = state.todoList[state.todoList.length - 1];
      return lastTodo.id;
    }
  );

  function addTodo() {
    if (state.newTodo === undefined) return;
    state.todoList.push({
      id: getLatestTodoId.value + 1,
      title: state.newTodo,
      completed: false,
      editing: false,
    });
  }

  function editTodo(todo: Todo) {
    todo.editing = !todo.editing;
  }

  function cancelEdit(todo: Todo) {
    todo.editing = false;
  }

  function doneEdit(todo: Todo) {
    const editingTodo: Todo | undefined = state.todoList.find(
      (todo: Todo) => todo.editing === true
    );
    if (editingTodo === undefined) return;
    editingTodo.title = todo.title;
    editingTodo.editing = false;
  }
  return { state, getLatestTodoId, addTodo, editTodo, cancelEdit, doneEdit };
};
```

使用场景 vue2+setup 函数+@vue/composition-api：

```vue
<template>
  <div class="hello">
    <section style="margin-bottom:32px;">
      <h1 v-if="show">{{ msg }}</h1>
      <button @click="toggle">Toggle above to hide</button>
    </section>
    <input
      class="add-todo"
      v-focus
      type="text"
      placeholder="add something"
      v-model="state.newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="todo in state.todoList" :key="todo.id" class="todo-row">
      <input type="checkbox" v-model="todo.completed" />
      <div v-if="!todo.editing" @dblclick="editTodo(todo)">
        {{ todo.title }}
      </div>
      <input
        v-else
        type="text"
        v-model="todo.title"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
        v-focus
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { totoListLogic } from "@/compositions/todoListLogic";
import { toggleLogic } from "@/compositions/toggleLogic";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    // todo business logic
    const {
      state,
      getLatestTodoId,
      addTodo,
      editTodo,
      cancelEdit,
      doneEdit,
    } = totoListLogic();

    // toggle business logic
    const { show, toggle } = toggleLogic();

    return {
      state,
      addTodo,
      editTodo,
      doneEdit,
      cancelEdit,
      show,
      toggle,
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
});
</script>
```

对照传统 vue2 的 optionsAPI 版本：

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      class="add-todo"
      v-focus
      type="text"
      placeholder="add something"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="todo in todoList" :key="todo.id" class="todo-row">
      <input type="checkbox" v-model="todo.completed" />
      <div v-if="!todo.editing" @dblclick="editTodo(todo)">
        {{ todo.title }}
      </div>
      <input
        v-else
        type="text"
        v-model="todo.title"
        @blue="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  reactive,
  ref,
  computed,
  onMounted,
  ComputedRef,
} from "@vue/composition-api";

type Todo = {
  id: number;
  completed: boolean;
  editing: boolean;
  title: string;
};
export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    console.warn(`component mounted..`);
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "hello",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "world",
          completed: false,
          editing: false,
        },
      ],
      newTodo: undefined as undefined | string,
    };
  },
  computed: {
    getLatestTodoId(): number {
      const lastTodo: Todo = this.todoList[this.todoList.length - 1];
      return lastTodo.id;
    },
  },

  methods: {
    addTodo() {
      if (this.newTodo === undefined) return;
      this.todoList.push({
        id: this.getLatestTodoId + 1,
        title: this.newTodo,
        completed: false,
        editing: false,
      });
    },

    editTodo(todo: Todo) {
      todo.editing = !todo.editing;
    },

    cancelEdit(todo: Todo) {
      const editingTodo: Todo | undefined = this.todoList.find(
        (todo: Todo) => todo.editing === true
      );
      if (editingTodo === undefined) return;
      editingTodo.editing = false;
    },

    doneEdit(todo: Todo) {
      const editingTodo: Todo | undefined = this.todoList.find(
        (todo: Todo) => todo.editing === true
      );
      if (editingTodo === undefined) return;
      editingTodo.title = todo.title;
      editingTodo.editing = false;
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
});
</script>
```


## 通过getCurrentInstance来容错

笔记片段：通过getCurrentInstance实现容错

在Vue.js的Composition API中，getCurrentInstance是一个用于获取当前Vue实例的函数。这个函数可以在我们编写自定义钩子或工具函数时，帮助我们实现容错机制。

当我们调用getCurrentInstance时，如果当前有活动的Vue实例，它将返回该实例。然而，如果没有活动的实例，它将返回null。我们可以利用这个特性来检查当前是否存在Vue实例，并据此决定如何执行代码。

通过判断getCurrentInstance的返回值，我们可以在自定义函数中实现容错逻辑。例如，如果我们想在Vue实例存在时使用onMounted钩子，而在没有实例时直接执行函数，可以这样编写代码：

``` javascript
import { onMounted, getCurrentInstance } from 'vue'  
  
function tryOnUnmounted(fn) {
  if (getCurrentInstance()) onUnmounted(fn)
}

function tryOnMounted(fn) {
  if (getCurrentInstance()) onMounted(fn)
  else fn()
}
``` 

在上述代码中，tryOnMounted函数通过调用getCurrentInstance来获取当前Vue实例。如果存在实例，则使用onMounted将传入的函数fn注册为挂载钩子。如果没有实例，则直接执行函数fn。

这种容错写法可以帮助我们在不同情况下保证代码的正常执行，无论是否存在Vue实例。它提高了代码的适应性和健壮性，使我们的自定义函数更加可靠。