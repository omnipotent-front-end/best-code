# 打包

## package.json入口

现在的npm包，需要暴露main/module/exports/typing等多个字段，
可以参考axios-retry的package.json


``` js
  "typings": "./index.d.ts",
  "main": "index.js",
  "module": "lib/esm/index.js",
  "exports": {
    ".": {
      "import": "./lib/esm/index.js",
      "require": "./index.js"
    },
    "./package.json": "./package.json"
  }
```

## 暴露多个命令

在package.json中指明多个
``` js
"bin": {
  "egg-bin": "bin/egg-bin.js", "mocha": "bin/mocha.js", "ets": "bin/ets.js"
},
```
其中mocha和est是对其他库的包装而已:

est.js

``` js
#!/usr/bin/env node
'use strict';
// 注册ets命令，使用egg-ts-helper的bin 
require('egg-ts-helper/dist/bin');

```

mocha.js

``` js
#!/usr/bin/env node
'use strict';
// 注册mocha命令，使用mocha 
require('mocha/bin/mocha');
```



## 依赖同一个库的不同版本

有时候，我们的逻辑中需要进行适配器，对不同的情况使用同一个库的不同版本，可以参考@vue/cli-service:

通过不同名称和不同版本来依赖同一个库：

``` json
{
  "@vue/vue-loader-v15": "npm:vue-loader@^15.9.7",
  "vue-loader": "^17.0.0",
}
```


## 条件性依赖不同的包

在JavaScript中实现条件性下载不同的包是很难的，但是条件性依赖不同的包确是可以。

诀窍在于npm的postinstall阶段，去做一些手脚，可以参考vue-demi。它在vue2.6之前、vue2.7和vue3后分别使用不同的包和方案来完成逻辑。

注册postinstall：

``` json
  "scripts": {
    "postinstall": "node ./scripts/postinstall.js",
    "release": "npx bumpp --tag --commit --push && npm publish"
  },
```

在脚本中根据不同的版本，把不同的文件拷贝到某个公共通用的文件夹，然后自己的逻辑永远使用公共通用的文件夹。分别需要依赖的包做在peerDependencies里让用户自行按需依赖即可。
