# 事件

## promise与事件结合

某些api是基于事件系统的，如何封装成promise呢？参考[execa](https://github.com/FunnyLiu/execa/blob/readsource/lib/promise.js#L23)

``` js
// 将child_process.spawn封装为promise
// Use promises instead of `child_process` events
const getSpawnedPromise = spawned => {
	return new Promise((resolve, reject) => {
		spawned.on('exit', (exitCode, signal) => {
			resolve({exitCode, signal});
		});

		spawned.on('error', error => {
			reject(error);
		});

		if (spawned.stdin) {
			spawned.stdin.on('error', error => {
				reject(error);
			});
		}
	});
};

```
