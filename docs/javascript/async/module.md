# 异步模块

该方案就有nodejs

有时候我们有些逻辑在模块的异步里，比如：

``` js
var foo = "bar"
async.function(function(response) {
  foo = "foobar";
  // module.exports = foo;  // having the export here breaks the app: foo is always undefined.
});

// having the export here results in working code, but without the variable being set.
module.exports = foo;
```

但是我们暴露出去的其实是bar，而不是foobar。

**怎么解决这种问题**


**暴露一个函数回调**

``` js
var foo, callback;
async.function(function(response) {
    foo = "foobar";

    if( typeof callback == 'function' ){
        callback(foo);
    }
});

module.exports = function(cb){
    if(typeof foo != 'undefined'){
        cb(foo); // If foo is already define, I don't wait.
    } else {
        callback = cb;
    }
}
```

使用：

``` js
var fooMod = require('./foo.js');
fooMod(function(foo){
    //Here code using foo;
});
```

这样使用方的逻辑就在一个回调函数中。

**暴露一个promise**

``` js
var foo, callback;
module.exports = new Promise(function(resolve, reject){
    async.function(function(response) {
        foo = "foobar"

        resolve(foo);
    });
});
``` 

使用方：


``` js
var fooMod = require('./foo.js').then(function(foo){
    //Here code using foo;
});
```

**使用async require**

暴露立即执行函数

``` js
module.exports = (async function(){
 //some async initiallizers
 //e.g. await the db module that has the same structure like this
  var db = await require("./db");
  var foo = "bar";

  //resolve the export promise
  return {
    foo
  };
})()

```

``` js
(async function(){

  var foo = await require("./theuppercode");
  console.log(foo);
})();
```


