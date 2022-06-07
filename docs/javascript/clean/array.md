# 数组

选自和[airbnb-eslint-rule](https://github.com/lin-123/javascript#types)


## 使用扩展运算符来浅拷贝：

``` js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

## 构建数组时使用...而不是Array.from

``` js
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

## 用 Array.from 而不是 ... 运算符去做map遍历

因为这样可以避免创建一个临时数组。
 
``` js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

## 数组条件组装

有时候需要根据条件组装数组，可以使用...配合三目运算符和空数组的思路：

``` js

		[
			...nodeOptions,
			scriptPath,
			...(Array.isArray(args) ? args : [])
		],
```

