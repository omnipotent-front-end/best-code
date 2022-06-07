# DOM

## 选择器

```js
/**
 * Thin wrapper around querySelector() */
export const $ = (...args) =>
  (args[0].querySelector ? args.shift() : document).querySelector(...args);
/**
 * Thin wrapper around querySelectorAll() */
export const $$ = (...args) =>
  (args[0].querySelectorAll ? args.shift() : document).querySelectorAll(
    ...args
  );
```

## 滑动到指定 dom

```js
document.querySelector(".j-private20007").scrollIntoView();
```

## 判断是否滚动到页面底部

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);
bottomVisible(); // true
```

## 滚动到顶部动画

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## 字符串转成 dom

利用 DOMParser

```js
export function parseStr2Dom(str: string): Document {
  const doc: Document = new DOMParser().parseFromString(str, "text/html");
  return doc;
}
```
