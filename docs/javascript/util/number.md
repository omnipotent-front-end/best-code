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