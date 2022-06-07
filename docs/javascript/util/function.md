# 函数

## 通过call拦截函数，进行AOP操作

参考[dva对history.listen的增强](https://github.com/FunnyLiu/dva/blob/readsource/packages/dva/src/index.js#L108)：


``` js
function patchHistory(history) {
  //对原有方法进行拦截
  const oldListen = history.listen;
  // 封装subscription中history.listen方法
  history.listen = callback => {
    const cbStr = callback.toString();
    const isConnectedRouterHandler =
      (callback.name === 'handleLocationChange' && cbStr.indexOf('onLocationChanged') > -1) ||
      (cbStr.indexOf('.inTimeTravelling') > -1 &&
        cbStr.indexOf('.inTimeTravelling') > -1 &&
        cbStr.indexOf('arguments[2]') > -1);
    callback(history.location, history.action);
    //再进行AOP增强
    return oldListen.call(history, (...args) => {
      if (isConnectedRouterHandler) {
        callback(...args);
      } else {
        // Delay all listeners besides ConnectedRouter
        setTimeout(() => {
          callback(...args);
        });
      }
    });
  };
  return history;
}


```

