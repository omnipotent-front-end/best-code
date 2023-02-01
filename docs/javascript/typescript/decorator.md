# 装饰器

## 执行顺序

- 首先执行实例相关：参数装饰器 > 方法装饰器 > 访问器装饰器 > 属性装饰器
- 然后执行静态相关：参数装饰器 > 方法装饰器 > 访问器装饰器 > 属性装饰器
- 然后执行构造函数的参数装饰器
- 最后是类装饰器
- 多个装饰器装饰同一个数据时，从下往上依次执行

``` ts
function staticParamsDecorator(target, name, index) {
  console.log('static params decorator')
}

function staticFuncDecorator(target, name, descriptor) {
  console.log('static func decorator')
}

function staticPropertyDecorator(target, name) {
  console.log('static property decorator')
}

function instanceParamsDecorator(target, name, index) {
  console.log('instance params decorator')
}

function instanceFuncDecorator(target, name, descriptor) {
  console.log('instance func decorator')
}

function instancePropertyDecorator(target, name) {
  console.log('instance property decorator')
}

function constructorParamsDecorator(target, name, index) {
  console.log('constructor params decorator')
}

function classDecorator1(target) {
  console.log('class decorator1')
}
function classDecorator2(target) {
  console.log('class decorator2')
}

@classDecorator1
@classDecorator2
class Animal {
  constructor(@constructorParamsDecorator options) {

  }

  @staticPropertyDecorator
  static Name = 'zlx'

  @staticFuncDecorator
  static Say(@staticParamsDecorator name: string) {

  }

  @instancePropertyDecorator
  age = 11

  @instanceFuncDecorator
  run(@instanceParamsDecorator time: number) {
  }
}

// instance property decorator
// instance params decorator
// instance func decorator
// static property decorator
// static params decorator
// static func decorator
// constructor params decorator
// class decorator2
// class decorator1

```