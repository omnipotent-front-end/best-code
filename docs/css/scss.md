# scss

## 批量生成样式

for循环+percentage内置函数处理百分比

``` css
  // 批量生成不同进度
  @for $i from 1 through 100 {
  .pipeline-status-running-#{$i}::after { width: percentage($i/100) }
  }
```