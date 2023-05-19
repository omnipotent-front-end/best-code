# 异步循环


## 串行异步循环

async，await时如何循环，参考[umi](https://github.com/FunnyLiu/umi/blob/readsource/packages/core/src/Service/Service.ts#L262)，通过while和数组长度配合：

``` js
// 一个个的完成异步操作
while (this.initialPresets.length) {
   await this.initPreset(this.initialPresets.shift()!);
}
```


forEach只支持同步，所以可以使用for of、for 或者while

``` js
    async function test() {
     let arr = [3, 2, 1]
     for (const item of arr) {
      const res = await fetch(item)
      console.log(res)
     }
     console.log('end')
    }
```

因为 for...of 内部处理的机制和 forEach 不同，forEach 是直接调用回调函数，for...of 是通过迭代器的方式去遍历

## 并行异步循环



前面提到的for-of配合await虽然可以循环，但是是串行阻塞的：

``` js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
```

可以通过Promise.all来优化：

``` js
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Good: all asynchronous operations are immediately started.
    results.push(bar(thing));
  }
  // Now that all the asynchronous operations are running, here we wait until they all complete.
  return baz(await Promise.all(results));
}
```

用map配合Promise.all也是可以的：

``` js
const arr = [1, 2, 3, 4, 5];

async function asyncFunction(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}

const promises = arr.map(async (num) => {
  const result = await asyncFunction(num);
  return result;
});

Promise.all(promises).then((results) => {
  console.log(results); // [2, 4, 6, 8, 10]
});
```