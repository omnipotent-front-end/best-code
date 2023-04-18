# global

## 全局滚动条样式

``` css
// 全局设置滚动条样式
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: #ededed;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #aaa;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(95, 95, 95, 0.7);
}

```


## 文字单行溢出

``` css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```

## 文字多行溢出

``` css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```



## 大屏适配

### vw vh方案

实现方式：按照设计稿的尺寸，将px按比例计算转为vw和vh

优点：

1.可以动态计算图表的宽高，字体等，灵活性较高 

2.当屏幕比例跟 ui 稿不一致时，不会出现两边留白情况

缺点：

每个图表都需要单独做字体、间距、位移的适配，比较麻烦

css方案：

``` css
// 使用 scss 的 math 函数，https://sass-lang.com/documentation/breaking-changes/slash-div
@use "sass:math";

// 默认设计稿的宽度
$designWidth: 1920;
// 默认设计稿的高度
$designHeight: 1080;

// px 转为 vw 的函数
@function vw($px) {
  @return math.div($px, $designWidth) * 100vw;
}

// px 转为 vh 的函数
@function vh($px) {
  @return math.div($px, $designHeight) * 100vh;
}
```

在vue中使用：

``` vue
<template>
    <div class="box">			
    </div>
</template>

<script>
export default{
    name: "Box",
}
</script>

<style lang="scss" scoped="scoped">
/* 
 直接使用 vw 和 vh 函数，将像素值传进去，得到的就是具体的 vw vh 单位		 
 */
.box{
    width: vw(300);
    height: vh(100);
    font-size: vh(16);
    background-color: black;
    margin-left: vw(10);
    margin-top: vh(10);
    border: vh(2) solid red;
}
</style>
```

js方案：

``` js
// 定义设计稿的宽高
const designWidth = 1920
const designHeight = 1080

// px转vw
export const px2vw = (_px) => {
    return (_px * 100) / designWidth + 'vw'
}
export const px2vh = (_px) => { return (_px * 100.0) / designHeight + 'vh'; }; 
export const px2font = (_px) => { return (_px * 100.0) / designWidth + 'vw'; };
```

最后监听dom尺寸变化后，刷新下chart就可以了：

``` js
// directive.js
import * as ECharts from "echarts";
import elementResizeDetectorMaker from "element-resize-detector";
import Vue from "vue";
const HANDLER = "_vue_resize_handler";
function bind(el, binding) {
  el[HANDLER] = binding.value
    ? binding.value
    : () => {
        let chart = ECharts.getInstanceByDom(el);
        if (!chart) {
          return;
        }
        chart.resize();
      };
  // 监听绑定的div大小变化，更新 echarts 大小
  elementResizeDetectorMaker().listenTo(el, el[HANDLER]);
}
function unbind(el) {
  // window.removeEventListener("resize", el[HANDLER]);
  elementResizeDetectorMaker().removeListener(el, el[HANDLER]);
  delete el[HANDLER];
}
// 自定义指令：v-chart-resize 示例：v-chart-resize="fn"
Vue.directive("chart-resize", { bind, unbind });
```


### scale方案

实现方式：通过 scale 属性，根据屏幕大小，对图表进行整体的等比缩放

优点：

1.代码量少，适配简单  

2.一次处理后不需要在各个图表中再去单独适配

缺点：

1.因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时，会出现周边留白情况  

2.当缩放比例过大时候，字体会有一点点模糊，就一点点  

3.当缩放比例过大时候，事件热区会偏移。


实现：

``` vue
<template>
  <div className="screen-wrapper">
      <div className="screen" id="screen">
  
      </div>
   </div>
 </template>
 <script>
export default {
    mounted() {
        // 初始化自适应 --在刚显示时候开始适配一次
        handleScreenAuto();
        // 绑定自适应函数 ---防止浏览器栏变化后不再适配
        window.onresize = () => handleScreenAuto();
    },
    destroyed() {
        window.onresize = null;
    },
    methods: {
        handleScreenAuto() {
            const designDraftWidth = 1920; //设计稿的宽度 
            const designDraftHeight = 960; //设计稿的高度
            // 根据屏幕的变化适配的比例
            const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftWidth ? 
            document.documentElement.clientWidth / designDraftWidth : 
            document.documentElement.clientHeight / designDraftHeight;
            // 缩放比例
            document.querySelector('#screen').style.transform = `scale(${scale}) translate(-50%, -50%)`;
        }
    }
}
</script>
<style>
/*
  除了设计稿的宽高是根据您自己的设计稿决定以外，其他复制粘贴就完事
*/  
.screen-root {
    height: 100%;
    width: 100%;
    .screen {
        display: inline-block;
        width: 1920px;  //设计稿的宽度
        height: 960px;  //设计稿的高度
        transform-origin: 0 0;
        position: absolute;
        left: 50%;
        top: 50%;
    }
}
</style>
```

也有现成的适配插件：- [v-scale-screen](https://github.com/Alfred-Skyblue/v-scale-screen) - 基于scale来适配大屏项目的vue指令，同时兼容vue3和vue2 ![img](https://img.shields.io/github/stars/Alfred-Skyblue/v-scale-screen)

