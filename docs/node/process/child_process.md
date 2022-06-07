# child_process


## child_process最佳实践

参考[jest-worker](https://github.com/FunnyLiu/jest/blob/readsource/packages/jest-worker/src/workers/ChildProcessWorker.ts#L66)

``` js
import childProcess, {ChildProcess} from 'child_process';
//基于childProcess开启多进程的工作
    const child = childProcess.fork(require.resolve('./processChild'), [], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        JEST_WORKER_ID: String(this._options.workerId + 1), // 0-indexed workerId, 1-indexed JEST_WORKER_ID
        ...forceColor,
      } as NodeJS.ProcessEnv,
      // Suppress --debug / --inspect flags while preserving others (like --harmony).
      execArgv: process.execArgv.filter(v => !/^--(debug|inspect)/.test(v)),
      silent: true,
      ...this._options.forkOptions,
    });

   if (child.stdout) {
      if (!this._stdout) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stdout = mergeStream(this._getFakeStream());
      }

      this._stdout.add(child.stdout);
    }

    if (child.stderr) {
      if (!this._stderr) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stderr = mergeStream(this._getFakeStream());
      }

      this._stderr.add(child.stderr);
    }

    child.on('message', this.onMessage.bind(this));
    child.on('exit', this.onExit.bind(this));

    child.send([
      CHILD_MESSAGE_INITIALIZE,
      false,
      this._options.workerPath,
      this._options.setupArgs,
    ]);
```

其真正执行的进程processChild：

``` js

process.on('message', (request: any) => {
  switch (request[0]) {
    case CHILD_MESSAGE_INITIALIZE:
      const init: ChildMessageInitialize = request;
      file = init[2];
      setupArgs = request[3];
      break;

    case CHILD_MESSAGE_CALL:
      const call: ChildMessageCall = request;
      execMethod(call[2], call[3]);
      break;

    case CHILD_MESSAGE_END:
      end();
      break;

    default:
      throw new TypeError(
        'Unexpected request from parent process: ' + request[0],
      );
  }
}); 

```

 