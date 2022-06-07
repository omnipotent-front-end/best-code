# 类型

## 判断函数类型


``` js
exports.generator = function (obj) {
  return obj
    && 'function' === typeof obj.next
    && 'function' === typeof obj.throw;
};

exports.generatorFunction = function (obj) {
  return obj
    && obj.constructor
    && 'GeneratorFunction' === obj.constructor.name;
};
//是否是异步函数
exports.asyncFunction = function (obj) {
  return obj
    && obj.constructor
    && 'AsyncFunction' === obj.constructor.name;
};
//是否是promise
exports.promise = function (obj) {
  return obj
    && 'function' === typeof obj.then;
};
```

## 判断值类型

### 是否是原始类型

``` js
//  判断是否是原始值
export function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
```

### 是否有值

``` js
export function isDef (v) {
  return v !== undefined && v !== null
}
```