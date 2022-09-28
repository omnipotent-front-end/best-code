# 字符串

## StringApi

``` js
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';    // \n 换行
var len = abc.length;            // 字符串长度
abc.indexOf("lmno");             // 查找子字符串，如果不包含则 -1
abc.lastIndexOf("lmno");         // 最后一次出现
abc.slice(3, 6);                 // 去掉“def”，负值从后面计算
abc.replace("abc","123");        // 查找和替换，接受正则表达式
abc.toUpperCase();               // 转换为大写
abc.toLowerCase();               // 转换为小写
abc.concat(" ", str2);           // abc + " " + str2
abc.charAt(2);                   // 索引处的字符：“c”
abc[2];                          // 不安全，abc[2] = "C" 不起作用
// 索引处的字符代码：“c”-> 99
abc.charCodeAt(2);            
// 用逗号分割字符串给出一个数组
abc.split(",");               
// 分割字符
abc.split("");                
// 数字转为十六进制 (16)、八进制 (8) 或二进制 (2)
128.toString(16);             
```

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