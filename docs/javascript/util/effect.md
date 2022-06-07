# 副作用

## 全局变量

### 安全获取全局变量

判断是否在node环境

``` js
interface WebMonitorGlobal {
    __WebMonitor__: {
        hub?:any;
        logger?: any;
    };
} 


/**
 * Judge is it node environment
 * 
 * @returns {boolean}
 */
export const isNodeEnv = (): boolean => {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}

const fallbackGlobalObject = {}

/**
 * Get global object safely
 * 
 * @returns {object}
 */
export const getGlobalObject = <T>(): T & WebMonitorGlobal => {
    return (isNodeEnv()
        ? global
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject) as T & WebMonitorGlobal;
}
```

参考自：[web-monitor-sdk/env.ts at master · brizer/web-monitor-sdk](https://github.com/brizer/web-monitor-sdk/blob/master/src/util/env.ts#L25)