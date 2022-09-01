# 单文件组件

## vue2 单文件组件基本写法

参考：https://cn.vuejs.org/v2/style-guide/index.html

```html
<template>
  <div>嘻嘻</div>
  <!-- v-if v-for -->
  <ul v-if="shouldShowUsers">
    <li v-for="user in users" :key="user.id">
      <!-- 插值 -->
      {{ user.name }}
    </li>
  </ul>
  <!-- v-else-if v-else -->
  <div v-else-if="shouldShowMe" />
  <div v-else />
  <!-- 事件注册 -->
  <input :value="value" @input="$emit('input', $event.target.value)"
  @click="openModal">
  <!-- 使用子组件的几种方式 -->
  <the-modal>
    <component is="TheInput" />
    <component :is="'TheDropdown'" />
    <TheButton :some-prop="prop">CTA</TheButton>
  </the-modal>
  <!-- 几种样式的写法 -->
  <div :class={ 'is-active': true, 'red': isRed }></div>
  <div :class=['is-active', isRed ? 'red' : '' ]></div>
  <div :style={ color: textColor, fontSize: '18px' }></div>
  <div
  :style=[{ color: textColor, fontSize: '18px' }, { fontWeight: '300' }]
  ></div>
</template>
<script>
  import TheButton from 'components/TheButton.vue'
  import TheModal from 'components/TheModal.vue'
  import TheInput from 'components/TheInput.vue'
  import TheDropdown from 'components/TheDropdown.vue'

  // 私有方法
  myPrivateFunction() {
    // todo
  }
  export default {
    // 组件名应该始终是多个单词的
    name: "TodoItem",
    // 注册使用的组件
    components: {
      TheButton,
      TheModal,
      TheInput,
      TheDropdown,
    },
    // 注册局部指令
    directives: { 
      waves,
      // 定义一个指令
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    },
    // 注册局部过滤器
    filters: {
      filterA
    },
    // mixin，注意其是个数组
    mixins: [mixin],
    // 继承其他组件
    extends: CompParent,
    // props详细定义
    props: {
      // 检测类型
      height: Number,
      // 默认值
      info: {
        type: Object,
        default: () => {
          return {
            name: "fang",
          };
        },
      },
      // 检测类型 + 其他验证
      age: {
        type: Number,
        default: 0,
        required: true,
        validator: function(value) {
          return value >= 0;
        },
      },
    },
    // 组件的 data 必须是一个函数。
    // data中不要出现计算属性，因为还未声明
    data() {
      return {
        foo: "bar",
      };
    },
    // 计算属性
    computed: {
      aDouble: function() {
        return this.age + 2
      },
      aPlus: {
        get: function() {
        return this.age + 1
      }
      }
    },
    // watch监听，这里不能使用箭头函数，否则this指不到vue实例
    watch: {
      /* ✓ GOOD */
      a: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      },
      b: 'someMethod',
      c: {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
      },
      d: {
        handler: 'someMethod',
        immediate: true
      },
      e: [
        'handle1',
        function handle2 (val, oldVal) { /* ... */ },
        {
          handler: function handle3 (val, oldVal) { /* ... */ },
          /* ... */
        }
      ],
      'e.f': function (val, oldVal) { /* ... */ },
    }
    // 组件的方法
    methods: {
      // 触发事件
      openModal() {
        this.$emit('input', 'test')
      },
      publicMethod() {
      // 调用私有方法
        myPrivateFunction()
      }
    },
    // 生命周期
    // 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
    beforeCreate() {},
    // 生命周期
    // 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，
    // 意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数
    created() {},
    // 生命周期
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount() {},
    // 生命周期
    // 实例被挂载后调用，不会保证所有的子组件也都被挂载完成，要确保则使用nextTick
    mounted() {
        this.$nextTick(function () {
        // 仅在整个视图都被渲染之后才会运行的代码
        })
    },
    // 生命周期
    // 在数据发生改变后，DOM 被更新之前被调用
    beforeUpdate() {
        //这里适合在现有 DOM 将要被更新之前访问它，
        //比如移除手动添加的事件监听器。
    },
    // 生命周期
    // 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
    // 不会保证所有的子组件也都被重新渲染完毕
    updated() {},
    // 生命周期
    // 实例销毁之前调用。在这一步，实例仍然完全可用
    beforeDestroy() {},
    // 生命周期
    // 实例销毁后调用。该钩子被调用后，
    // 对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，
    // 所有的子实例也都被销毁。
    destroyed() {},
  };
</script>

<style scoped>
  .do-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
  }
</style>
```


## sync修饰符

通过语法糖达到“修改prop”的目的：

``` html
<template>
    <div class="details">
        <myComponent :show.sync='valueChild'></myComponent>
        <button @click="changeValue">toggle</button>
    </div>
</template>

<script>
import Vue from 'vue' //导入
//子组件
Vue.component('myComponent', { 
      template: `<div v-if="show">
                    <p>默认初始值是{{show}}，所以是显示的</p>
                    <button @click.stop="closeDiv">关闭</button>
                 </div>`,
      props:['show'],
      methods: {
        closeDiv() {
          this.$emit('update:show', false); //触发 input 事件，并传入新值
        }
      }
})
//父组件
export default{
    data(){
        return{
            valueChild:true,
        }
    },
    methods:{
        changeValue(){
            this.valueChild = !this.valueChild
        }
    }
}
</script>

```

其本质：
``` html
<comp :foo.sync="bar"></comp>'
```
会被扩展为：
``` html
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```
当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：
``` js
this.$emit('update:foo', newValue)
```