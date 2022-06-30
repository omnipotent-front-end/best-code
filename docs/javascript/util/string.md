# 字符串

## 获取文件后缀名

```js
function(fileName) {
    var fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
    return fileExtension;
};
```

## 生成指定长度随机字符串

```js
function _range(start: number, end: number) {
  const ret: number[] = [];
  for (let i = start; i < end; i++) {
    ret.push(i);
  }
  return ret;
}
export function randomString(length: number) {
  const characterSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomChar = () =>
    characterSet[Math.floor(Math.random() * characterSet.length)];
  return _range(0, length).reduce((text) => text + randomChar(), "");
}
```


## 截断某个字符串后的内容

``` js
var str = 'p2p-dafei';
console.log(str.split("p2p-")[1]);//dafei
```


## 以特定字符结尾

``` js
let str = "Hello world, this is string test";
let res1 = str.endsWith("test")
let res2 = str.endsWith("Test")
let res3 = str.endsWith("rest")
console.log(res1,res2,res3) // true false false


```