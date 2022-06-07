# 入口

## 封装透传util

在开发util时，可能部分会由其他库组成，将其proxy。参考[vue-cli/index.js at dev · brizer/vue-cli](https://github.com/brizer/vue-cli/blob/dev/packages/%40vue/cli-shared-utils/index.js)：

该方案依赖node commonjs规范。

通过入口文件，将一些模块集合到exports上，统一暴露出去:

``` js
[
  'env',
  'exit',
  'ipc',
  'logger',
  'module',
  'object',
  'openBrowser',
  'pluginResolution',
  'launch',
  'request',
  'spinner',
  'validate'
].forEach(m => {
  Object.assign(exports, require(`./lib/${m}`))
})

exports.chalk = require('chalk')
exports.execa = require('execa')
```


也可以参考umi的方式，一个基于三方包的util库，集合内置一起，从而控制版本：

``` js
// 一个基于第三方包的util库，集合体
import address from 'address';
import chalk from 'chalk';
import spawn from 'cross-spawn';
import * as chokidar from 'chokidar';
import clipboardy from 'clipboardy';
import createDebug, { Debugger } from 'debug';
import deepmerge from 'deepmerge';
import execa from 'execa';
import lodash from 'lodash';
import glob from 'glob';
import portfinder from 'portfinder';
import got from 'got';
import resolve from 'resolve';
import yargs from 'yargs';
import mkdirp from 'mkdirp';
import pkgUp from 'pkg-up';
import Mustache from 'mustache';
import signale from 'signale';
import rimraf from 'rimraf';
import yParser from 'yargs-parser';
import * as t from '@babel/types';
import * as parser from '@babel/parser';
import * as traverse from '@babel/traverse';
import semver from 'semver';

export { spawn };
export { semver };
export { address };
export { chalk };
export { default as cheerio } from './cheerio/cheerio';
export { clipboardy };
export { chokidar };
export { createDebug, Debugger };
export { deepmerge };
export { execa };
export { lodash };
export { glob };
export { got };
export { portfinder };
export { pkgUp };
export { resolve };
export { yargs };
export { mkdirp };
export { Mustache };
export { rimraf };
export { yParser };
export { t };
export { parser };
export { traverse };
export { signale };
// 再暴露一些自己封装的util
export * from './ssr';
export * from './routes';
export { default as compatESModuleRequire } from './compatESModuleRequire/compatESModuleRequire';
export { default as mergeConfig } from './mergeConfig/mergeConfig';
export { default as isLernaPackage } from './isLernaPackage/isLernaPackage';
export { default as getFile } from './getFile/getFile';
export { default as winPath } from './winPath/winPath';
export { default as winEOL, isWindows } from './winEOL/winEOL';
export { default as parseRequireDeps } from './parseRequireDeps/parseRequireDeps';
export { default as BabelRegister } from './BabelRegister/BabelRegister';
export { default as Generator } from './Generator/Generator';
export { default as randomColor } from './randomColor/randomColor';
export { default as delay } from './delay/delay';
export { default as cleanRequireCache } from './cleanRequireCache/cleanRequireCache';
export * from './types';
```


有时候需要合并多个库的导出一起导出，可以参考`**`和`**-core`系列。
[umi导出](https://github.com/FunnyLiu/umi/blob/readsource/packages/umi/index.js#L2)

[参考node-fs-extra](https://github.com/FunnyLiu/node-fs-extra/blob/readsource/lib/fs/index.js#L60)



## 入参与默认参数合并


简单的，通过和一个初始定义值合并：

``` js
  constructor(options: CallappOptions) {
    const defaultOptions = { timeout: 2000 };
    this.options = Object.assign(defaultOptions, options);
  }
```

复杂版，在合并后一一检查：

``` js
class Metric {
	constructor(config, defaults = {}) {
		if (!isObject(config)) {
			throw new TypeError('constructor expected a config object');
		}
		//给构造函数入参的合并
		Object.assign(
			this,
			{
				labelNames: [],
				registers: [globalRegistry],
				aggregator: 'sum',
			},
			defaults,
			config,
		);
		if (!this.registers) {
			// in case config.registers is `undefined`
			this.registers = [globalRegistry];
		}
		if (!this.help) {
			throw new Error('Missing mandatory help parameter');
		}
		if (!this.name) {
			throw new Error('Missing mandatory name parameter');
		}
		if (!validateMetricName(this.name)) {
			throw new Error('Invalid metric name');
		}
		if (!validateLabelName(this.labelNames)) {
			throw new Error('Invalid label name');
		}
		if (this.collect && typeof this.collect !== 'function') {
			throw new Error('Optional "collect" parameter must be a function');
		}

		this.reset();

		for (const register of this.registers) {
			register.registerMetric(this);
		}
	}

	reset() {
		/* abstract */
	}
}
```


## 入参保证参数浅拷贝

对于数组入参可以通过`[...arr]`:

``` js
/**
 * 在数组中随机生选择 n 个元素生成新的数组
 * 基于Fisher–Yates shuffle 洗牌算法
 * @param arr - 原始数组
 * @param n - 新数组元素个数
 * @returns 随机新数组
 */
function sampleSize([...arr], n = 1) {
  let m = arr.length;
  while (m) {
    // eslint-disable-next-line
    const i = Math.floor(Math.random() * m--);
    // eslint-disable-next-line
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
}

```

对象也是一样的通过`{...obj}`


## 获取形参个数

函数实例.length就是形参的个数，arguments.length是实参的个数，但是一般可以通过剩余参考来解决。

看一个形参的使用场景：

``` js


//下面介绍创建函数柯里化的通用方法 
function curry(fn, ...args) {
  //fn.length是形参的个啥
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return function(...args2) {
    return curry(fn, ...args, ...args2);
  };
}
//使用方法如下:
function add(num1,num2){
  return num1+num2; 
}
var curriedAdd = curry(add); 
console.log(curriedAdd(3,5));//8 
var curriedAddB = curry(add,5); 
console.log(curriedAddB(10));//15

```
