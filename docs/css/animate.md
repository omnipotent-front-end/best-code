# animate

## 控制动画暂停和播放逻辑

通过style.animationPlayState来控制：

``` js
    let elem = document.querySelector('.animation');
	let state = elem.style['animationPlayState'];
	  
	if(state === 'paused') {
	    elem.style['animationPlayState'] = 'running';
	    btn.innerText = 'stop';
	} else {
	    elem.style['animationPlayState'] = 'paused';
	    btn.innerText = 'play';
	}

```

## 上下不停浮动

``` css
.ghost {
  animation: float 3s ease-out infinite;
}

@keyframes float {
  50% {
     transform: translate(0, 20px);
  }
}
```

参考：[CodePen Demo](https://cdpn.io/cpe/boomboom/index.html?key=index.html-c89a83db-5399-8f3c-c7d0-d68c432e4e6c)

## 旋转

``` css
animation:  rotate 3s  linear  infinite;
```