# JSX

## 传递多参数

利用解构、剩余参数和展开运算符
``` js
function Greeting({ name, ...platformProps }) {
  return <div {...platformProps}>Hi {name}!</div>;
}
```

## 合并参数

利用默认参数、展开运算符，

在操作className时非常常见

``` js
function MyButton({ className = "", ...props }) {
  let classNames = ["btn", className].join(" ");

  return <button className={classNames} {...props} />;
}
```

## 条件判断

if：
``` js
{
  condition && <span>Rendered when `truthy`</span>;
}
```

unless：
``` js
{
  condition || <span>Rendered when `falsy`</span>;
}

```
if-else
``` js
{
  condition ? (
    <span>Rendered when `truthy`</span>
  ) : (
    <span>Rendered when `falsy`</span>
  );
}
```

## children内容
可以为字符串，也可以是数组：
``` js
<div>Hello World!</div>

<div>{["Hello ", <span>World</span>, "!"]}</div>
```

## list
使用map
``` js
<ul>
  {["first", "second"].map(item => (
    <li>{item}</li>
  ))}
</ul>
//等同于
<ul>{[<li>first</li>, <li>second</li>]}</ul>
```


## 样式内联style

``` js
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
```