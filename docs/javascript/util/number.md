# 数字

## MathApi

``` js
const pi = Math.PI; // 3.141592653589793
Math.round(4.4);  // = 4 - 数字四舍五入
Math.round(4.5);  // = 5
Math.pow(2,8);    // = 256 - 2 的 8 次方    
Math.sqrt(49);    // = 7 - 平方根
Math.abs(-3.14);  // = 3.14 - 绝对，正值
Math.ceil(3.14);  // = 4 - 返回 >= 最小整数
// = 3 - 返回 <= 最大整数
Math.floor(3.99);       
// = 0 - 正弦
Math.sin(0);            
// OTHERS: tan,atan,asin,acos,余弦值
Math.cos(Math.PI);      
// = -2 - 最低值
Math.min(0, 3, -2, 2);  
// = 3 - 最高值
Math.max(0, 3, -2, 2);  
// = 0 自然对数
Math.log(1);            
// = 2.7182pow(E,x) 自然对数的底数
Math.exp(1);            
// 0 到 1 之间的随机数
Math.random();          
// 随机整数，从 1
Math.floor(Math.random() * 5) + 1;  
```

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