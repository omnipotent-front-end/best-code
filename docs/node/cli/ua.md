# 用户信息诊断

**记录错误情况，和用户当前环境后上报**

参考：[feflow/utils.ts at readsource · FunnyLiu/feflow](https://github.com/FunnyLiu/feflow/blob/readsource/packages/feflow-report/src/common/utils.ts)

其中列举了各种比较好的实现，比如收集用户信息、操作系统信息、项目信息等等


``` js
import os from 'os';
import path from 'path';
import fs from 'fs';
import objectFactory from './objectFactory';
import { execSync } from 'child_process';

const platform = os.platform();
const isWin = platform === 'win32';
const isMac = platform === 'darwin';
const cwd = process.cwd();

export const httpRegex = /^https?\:\/\/(?:[^\/]+)\/([^\/]+)\/([^\/.]+)(?:\.git)?/;
export const sshRegex = /^git@(?:[^\:]+)\:([^\/]+)\/([^\/\.]+)(?:\.git)?/;

const exec = (command: string) => {
  let result = '';
  try {
    result = execSync(command)
      .toString()
      .replace(/\n/, '');
  } catch (err) {}
  return result;
};

export const getGitStatus = (): boolean => {
  const hasGitCommand = exec('which git');
  const hasGitDir = fs.existsSync(path.join(cwd, '.git'));
  return hasGitCommand && hasGitDir;
};

const isGitAvailable = getGitStatus();

const getUserNameFromHostName = () => {
  const hostname = os.hostname();
  const [upperUserName, ...device] = hostname.split('-');
  return upperUserName.toLowerCase();
};

const getUserNameFromLinux = () => {
  const nameFromLinux = exec('whoami');
  if (nameFromLinux === 'root') {
    return '';
  }

  return nameFromLinux;
};

const getUserNameFromGit = () => {
  if (!isGitAvailable) {
    return '';
  }
  const nameFromLinux = exec('git config user.name');

  return nameFromLinux;
};

export const getUserName = () => {
  // mac/window
  if (isMac || isWin) {
    return getUserNameFromHostName() || getUserNameFromGit();
  }
  return getUserNameFromLinux() || getUserNameFromGit() || getUserNameFromHostName();
};

export const getProjectByPackage = () => {
  let project = '';
  const pkgPath = path.resolve(process.cwd(), './package.json');
  if (fs.existsSync(pkgPath)) {
    project = require(pkgPath).name;
  }
  return project;
};

export const getProjectByGit = (url?: string) => {
  let project = '';
  const gitRemoteUrl = url || exec('git remote get-url origin');
  let urlRegex: RegExp;

  if (httpRegex.test(gitRemoteUrl)) {
    urlRegex = httpRegex;
  } else if (sshRegex.test(gitRemoteUrl)) {
    urlRegex = sshRegex;
  }
  if (!urlRegex) return '';

  const [_, group, path] = urlRegex.exec(gitRemoteUrl) || [];
  project = group ? `${group}/${path}` : '';

  return project;
};

export const getSystemInfo = () => {
  const systemDetailInfo = objectFactory
    .create()
    .load('hostname', os.hostname())
    .load('type', os.type())
    .load('platform', os.platform())
    .load('arch', os.arch())
    .load('release', os.release())
    .done();
  return JSON.stringify(systemDetailInfo);
};

export const getProject = (ctx, local?: boolean): string => {
  const pkgConfig: any = ctx.pkgConfig || {};
  let project = '';
  if (pkgConfig.name && !local) {
    // feflow context
    project = pkgConfig.name;
  } else {
    try {
      // if not, read project name from project's package.json or git
      project = getProjectByPackage();
      if (!project && isGitAvailable) {
        project = getProjectByGit();
      }
    } catch (error) {}
  }

  return project;
};
```