# 数字

## id自增长

参考：[redux-saga](https://github.com/FunnyLiu/redux-saga/blob/readsource/packages/core/src/internal/uid.js#L1)

对外暴露一个闭包的自增长id

``` js
export let current = 0
// 单例id自增长
export default () => ++current

```

使用的时候：
[redux-saga使用](https://github.com/FunnyLiu/redux-saga/blob/readsource/packages/core/src/internal/runSaga.js#L27)

``` js
import nextSagaId from './uid'
const effectId = nextSagaId()
```


## 取两位小数

需要注意，如果是相加，要在总值上格式化，否则每个子项是小数加起来还是会出现多位数的问题！

``` js
Math.floor(15.7784514000 * 100) / 100  
```

得出字符串类型的方式简单些：

``` js
(12.334).toFixed(2)
```