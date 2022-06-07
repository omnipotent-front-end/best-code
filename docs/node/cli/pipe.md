# 输入输出流

## 清理控制台

``` js
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
//brizer: clearconsole
function clearConsole() {
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  );
}

module.exports = clearConsole;
```

参考cra：[create-react-app/clearConsole.js at master · FunnyLiu/create-react-app](https://github.com/FunnyLiu/create-react-app/blob/master/packages/react-dev-utils/clearConsole.js)