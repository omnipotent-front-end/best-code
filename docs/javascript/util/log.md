# 日志

## 简易的日志类

该方案基于typescript

[参考vscode-waketime](https://github.com/FunnyLiu/vscode-wakatime/blob/readsource/src/logger.ts#L1)

``` js
import { LogLevel } from './constants';
// 一个简单的日志class
export class Logger {
  private level: LogLevel;

  constructor(level: LogLevel) {
    this.setLevel(level);
  }

  public getLevel(): LogLevel {
    return this.level;
  }

  public setLevel(level: LogLevel): void {
    this.level = level;
  }

  public log(level: LogLevel, msg: string): void {
    if (level >= this.level) {
      msg = `[WakaTime][${LogLevel[level]}] ${msg}`;
      if (level == LogLevel.DEBUG) console.log(msg);
      if (level == LogLevel.INFO) console.info(msg);
      if (level == LogLevel.WARN) console.warn(msg);
      if (level == LogLevel.ERROR) console.error(msg);
    }
  }

  public debug(msg: string): void {
    this.log(LogLevel.DEBUG, msg);
  }

  public info(msg: string): void {
    this.log(LogLevel.INFO, msg);
  }

  public warn(msg: string): void {
    this.log(LogLevel.WARN, msg);
  }

  public error(msg: string): void {
    this.log(LogLevel.ERROR, msg);
  }
}


```