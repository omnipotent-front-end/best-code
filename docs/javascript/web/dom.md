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


## BOM高度宽度

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/R.png"/>

```
网页可见区域宽： document.body.clientWidth
网页可见区域高： document.body.clientHeight
网页可见区域宽： document.body.offsetWidth (包括边线的宽)
网页可见区域高： document.body.offsetHeight (包括边线的高)
网页正文全文宽： document.body.scrollWidth
网页正文全文高： document.body.scrollHeight
网页被卷去的高： document.body.scrollTop
网页被卷去的左： document.body.scrollLeft
网页正文部分上： window.screenTop
网页正文部分左： window.screenLeft
屏幕分辨率的高： window.screen.height
屏幕分辨率的宽： window.screen.width
屏幕可用工作区高度： window.screen.availHeight
屏幕可用工作区宽度： window.screen.availWidth
```