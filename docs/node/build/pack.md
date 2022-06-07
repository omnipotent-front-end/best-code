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