# 配置


## 监听配置文件变化

[参考vta](https://github.com/FunnyLiu/vta/blob/readsource/packages/core/src/plugins/fs-watcher-to-restart-plugin.ts#L47)，基于chokidar来完成。

## 管理配置文件

 一般的npm工具，都是可以通过package.json中某个字段，或者项目目录下的指定配置文件 名称来获取配置文件。  

以husky为例，其使用[cosmiconfig.note](https://github.com/FunnyLiu/husky/blob/read/src/getConf.ts#L9)
来完成: 
 

对应的[单元测试写法](https://github.com/FunnyLiu/husky/blob/read/src/__tests__/getConf.ts):  
 
     
一个较为强大的config类demo：[umi的config](https://github.com/FunnyLiu/umi/blob/readsource/packages/core/src/Config/Config.ts#L47)


## 环境变量

[参考umi](https://github.com/FunnyLiu/umi/blob/readsource/packages/core/src/Service/utils/loadDotEnv.ts#L3)，基于dotenv来封装util