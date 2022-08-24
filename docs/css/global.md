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