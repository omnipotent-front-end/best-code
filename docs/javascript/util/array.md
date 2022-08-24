# 数组

## 去重

使用 set

```js
[...new Set([1, 2, 3, 1, "a", 1, "a"])];
```

或者 es5 版本：

```js
[1, 2, 3, 1, "a", 1, "a"].filter(function(ele, index, array) {
  return index === array.indexOf(ele);
});
```

## 生成数字数组

```js
Array.from(Array(10).keys());
//0,1,2,3,4,5,6,7,8,9
```

一些行列时和 jsx map 需要

## 拷贝数组

```js
const { wordList } = props;
let [...answerList] = wordList;
```

## 填充数组

```js
new Array(10).fill("");
```

## 字符串排序

```js
["abc", "bca", "bacdd", "bacdd", "cbaaa", "cbaee", "bcadd", "cba", "bca"].sort(
  (a, b) => (a > b ? 1 : b > a ? -1 : 0)
);
//['abc', 'bacdd', 'bacdd', 'bca', 'bca', 'bcadd', 'cba', 'cbaaa', 'cbaee']
```


## 数组随机乱序

``` js
var arr = ["鹿晗", "王俊凯", "蔡徐坤", "彭于晏", "周杰伦", "刘德华", "赵本山"];
arr.sort(function () {
 return Math.random() - 0.5;   // 值为 -0.5 ~ 0.5 的随机数
});
console.log(arr);
```