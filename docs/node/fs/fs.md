# 文件

## 判断文件是否存在，不存在就创建

```js
try {
  fs.statSync(swaggerPath);
} catch (error) {
  fs.mkdirSync(swaggerPath);
}
```

## 判断文件或目录是否存在

````js
/**
 * 判断文件或者目录是否存在
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { exists } from '@tomato-node/fs';
 *   //callback style
 *   const callback=(isExist)=>{
 *     console.log(isExist?true:false)
 *   };
 *   exists('file',callback);
 *   //promise style
 *   async(()=>{
 *     const isExist = await exists('file');
 *   })()
 * ```
 */
export function exists(filename: string, callback?: FunctionType<any, any>) {
  // callback
  if (isFunction(callback)) {
    return fs.stat(filename, (err) => {
      callback(!err);
    });
  }
  // or promise
  return new Promise((resolve) => {
    fs.stat(filename, (err) => {
      resolve(!err);
    });
  });
}
````

## 递归创建

直接用原生 mkdir，recursive 为 true 即可

## 读取 json

```js
exports.readJSONSync = function(filepath) {
  if (!fs.existsSync(filepath)) {
    throw new Error(filepath + " is not found");
  }
  return JSON.parse(fs.readFileSync(filepath));
};
exports.readJSON = function(filepath) {
  return fs
    .exists(filepath)
    .then(function(exists) {
      if (!exists) {
        throw new Error(filepath + " is not found");
      }
      return fs.readFile(filepath);
    })
    .then(function(buf) {
      return JSON.parse(buf);
    });
};
```

## 写入 json

依赖mkdirp这个包：

```js
exports.writeJSONSync = function(filepath, str, options) {
  options = options || {};
  if (!("space" in options)) {
    options.space = 2;
  }

  mkdirp.sync(path.dirname(filepath));
  if (typeof str === "object") {
    str = JSON.stringify(str, options.replacer, options.space) + "\n";
  }

  fs.writeFileSync(filepath, str);
};
exports.writeJSON = function(filepath, str, options) {
  options = options || {};
  if (!("space" in options)) {
    options.space = 2;
  }

  if (typeof str === "object") {
    str = JSON.stringify(str, options.replacer, options.space) + "\n";
  }

  return mkdir(path.dirname(filepath)).then(function() {
    return fs.writeFile(filepath, str);
  });
};
function mkdir(dir) {
  return new Promise(function(resolve, reject) {
    mkdirp(dir, function(err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}
```
