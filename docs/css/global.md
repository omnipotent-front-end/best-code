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