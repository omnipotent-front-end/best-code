# 对象操作

## 遍历对象

利用Object.entries和for...of

``` js
for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

```
 for (const [key, value] of Object.entries(object1)) {
   console.log(`: `);
 }
## 对象条件封装

通过...和三目

``` js
{
    key,
    ...(keyOuter ? { keyOuter } : {})
}
```



## 过滤空值

基于 lodash：

``` js
/**
 * 过滤对象中null/undefined/[]/{}/''
 * @param {object} obj 需要过滤的对象 */
export function omitEmpty(obj) {
  return (function prune(current) {
    _.forOwn(current, function(value, key) {
      if (
        _.isUndefined(value) ||
        _.isNull(value) ||
        _.isNaN(value) ||
        (_.isString(value) && _.isEmpty(value)) ||
        (_.isObject(value) && _.isEmpty(prune(value)))
      ) {
        delete current[key];
      }
    });
    // remove any leftover undefined values from the delete // operation on an array
    if (_.isArray(current)) _.pull(current, undefined);
    return current;
  })(_.cloneDeep(obj));
}
```

## 缓存

该方案基于typescript


以cache为例，首先是一个简单的cache类：[简单的cache类](https://github.com/FunnyLiu/vscode-wakatime/blob/readsource/src/cache/memory-storage.ts#L0)：

``` js
// 一个简单的cache 类
export class MemoryStorage {

    private memCache: any = {};

    constructor() { }

    public async getItem<T>(key: string): Promise<T> {
        return this.memCache[key];
    }

    public async setItem(key: string, content: any): Promise<void> {
        this.memCache[key] = content;
    }

    public async clear(): Promise<void> {
        this.memCache = {};
    }
}

```


可以看到只是做了简单的get和set，如果需要给其增加过期时间的话，可以通过代理模式来完成，再封装一个[带过期策略的cache类](https://github.com/FunnyLiu/vscode-wakatime/blob/readsource/src/cache/expiration-strategy.ts#L15):


``` js
import { MemoryStorage } from './memory-storage';

interface IExpiringCacheItem {
    content: any;
    meta: {
        createdAt: number;
        ttl: number;
    }
}

interface IOptions {
    ttl?: number;
    isLazy?: boolean;
    isCachedForever?: boolean;
}
// 一个带过期时间功能的cache类，对普通的cache类包装了一层进行了代理模式，以及promise的封装
export class ExpirationStrategy {

    private readonly storage: MemoryStorage;

    constructor(storage: MemoryStorage) {
        this.storage = storage;
    }

    public async getItem<T>(key: string): Promise<T> {
        return new Promise<T>(async (resolve, _) => {
            const item = await this.storage.getItem<IExpiringCacheItem>(key);
            if (item && item.meta && item.meta.ttl && this.isItemExpired(item)) {
                await this.storage.setItem(key, undefined);
                resolve(undefined);
            }
            item ? resolve(item.content) : resolve(undefined);
        });
    }

    public async setItem(key: string, content: any, options: IOptions): Promise<void> {
        options = { ttl: 60, isLazy: true, isCachedForever: false, ...options }

        let meta = {};

        if (!options.isCachedForever) {
            meta = {
                ttl: options.ttl! * 1000,
                createdAt: Date.now()
            };

            if (!options.isLazy) {
                setTimeout(() => {
                    this.unsetKey(key);
                }, options.ttl!);
            }
        }
        await this.storage.setItem(key, {meta, content});
    }

    public async clear(): Promise<void> {
        await this.storage.clear();
    }

    private isItemExpired(item: IExpiringCacheItem): boolean {
        return Date.now() > item.meta.createdAt + item.meta.ttl;
    }

    private async unsetKey(key: string): Promise<void> {
        await this.storage.setItem(key, undefined);
    }
}
```

然后将第一个cache类作为实例化对象传入即可:


``` js
this.cache = new ExpirationStrategy(new MemoryStorage());
```

从而完成整个代理过程。

## proxy对象属性透传

找bridge.a其实就是去找bridge.rnCallNative.a


适合于将一个对象上所有东西，挂到另一个对象上往外去暴露


``` js
export const bridge = new Proxy(bridgeBase, {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    if (supportBridgeName.indexOf(prop) >= 0) {
      return (obj.bridge.rnCallNative || f).bind(obj.bridge, prop);
    }

    return null;
  },
});
```

## mixin增强对象

当对象的方法需要区分命名空间或者说是外部增强，可以通过mixin的思路。


参考[笔记内容](https://github.com/FunnyLiu/cropperjs/blob/readsource/src/js/cropper.js#L448)

``` js
//mixin模式扩展Cropper类
assign(Cropper.prototype, render, preview, events, handlers, change, methods);

```

通过其他几个文件暴露不同的方法来增强对象，assign函数为：

``` js
export const assign = Object.assign || function assign(target, ...args) {
  if (isObject(target) && args.length > 0) {
    args.forEach((arg) => {
      if (isObject(arg)) {
        Object.keys(arg).forEach((key) => {
          target[key] = arg[key];
        });
      }
    });
  }

  return target;
};
```

其他的文件如event，暴露几个函数即可：


``` js
import {
  EVENT_CROP,
  EVENT_CROP_END,
  EVENT_CROP_MOVE,
  EVENT_CROP_START,
  EVENT_DBLCLICK,
  EVENT_POINTER_DOWN,
  EVENT_POINTER_MOVE,
  EVENT_POINTER_UP,
  EVENT_RESIZE,
  EVENT_WHEEL,
  EVENT_ZOOM,
} from './constants';
import {
  addListener,
  isFunction,
  removeListener,
} from './utilities';

export default {
  bind() {
    const { element, options, cropper } = this;

    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }

    addListener(cropper, EVENT_POINTER_DOWN, (this.onCropStart = this.cropStart.bind(this)));

    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper, EVENT_WHEEL, (this.onWheel = this.wheel.bind(this)), {
        passive: false,
        capture: true,
      });
    }

    if (options.toggleDragModeOnDblclick) {
      addListener(cropper, EVENT_DBLCLICK, (this.onDblclick = this.dblclick.bind(this)));
    }

    addListener(
      element.ownerDocument,
      EVENT_POINTER_MOVE,
      (this.onCropMove = this.cropMove.bind(this)),
    );
    addListener(
      element.ownerDocument,
      EVENT_POINTER_UP,
      (this.onCropEnd = this.cropEnd.bind(this)),
    );

    if (options.responsive) {
      addListener(window, EVENT_RESIZE, (this.onResize = this.resize.bind(this)));
    }
  },

  unbind() {
    const { element, options, cropper } = this;

    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }

    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true,
      });
    }

    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
    }

    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  },
};


```


## 对象根据value排序

弯道超车：

``` js
  // 对object的value排序拿到对应的key列表
  const sortedObjKeys = Object.keys(appSuccessMap).sort((a, b) => {
    return appSuccessMap[b] - appSuccessMap[a]
  })
  // 再通过指定key拿到内容
  const successDataList = sortedObjKeys.map(key => appSuccessMap[key])

```