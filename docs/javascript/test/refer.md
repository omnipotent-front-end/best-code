# 参考最佳实践

## 参考axios对class的测试流程


可以参考axios的单元测试[笔记内容](https://github.com/FunnyLiu/axios/blob/readsource/test/manual/basic.html#L9)

接口的mock本地通过文件，远程通过在线接口。

其他各个模块内容独自完成自己的单元测试。


1、[对外暴露的api函数列表进行检测](https://github.com/FunnyLiu/axios/blob/readsource/test/specs/api.spec.js#L1)

2、[对所有不同的接口入参参数进行检测](https://github.com/FunnyLiu/axios/blob/readsource/test/specs/options.spec.js#L3)

3、[对包含的内部纯函数util/helper们进行检测](https://github.com/FunnyLiu/axios/blob/readsource/test/specs/utils/forEach.spec.js#L13)

4、[专门针对ts的测试](https://github.com/FunnyLiu/axios/blob/readsource/test/typescript/axios.ts#L186)

5、[对核心class的属性及方法进行测试](https://github.com/FunnyLiu/axios/blob/readsource/test/specs/cancel/CancelToken.spec.js#L31)