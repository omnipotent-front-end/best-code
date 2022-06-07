# 类



## 最佳实践参考

[参考waketime，多个class组合](https://github.com/FunnyLiu/vscode-wakatime/blob/readsource/src/logger.ts#L1)


[gitlab sdk](https://github.com/jdalrymple/gitbeaker)，独立分开browser和node，底层同时基于core，browser上层适配了request


extends,super的大量运用，参考：
[apollo-client](https://github.com/FunnyLiu/apollo-client/blob/readsource/src/react/data/QueryData.ts#L31)


js版class的用法demo，今日头条开源播放器，参考[xgplayer](https://github.com/FunnyLiu/xgplayer/blob/readsource/packages/xgplayer-buffer/src/buffer.js#L1)

## class书写

弃用es5，拥抱es6


**Bad:**

``` js
const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error("Instantiate Animal with `new`");
  }

  this.age = age;
};

Animal.prototype.move = function move() {};

const Mammal = function(age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error("Instantiate Mammal with `new`");
  }

  Animal.call(this, age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function(age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error("Instantiate Human with `new`");
  }

  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};

Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};

```

**Good:**

``` js
class Animal {
  constructor(age) {
    this.age = age;
  }

  move() {
    /* ... */
  }
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }

  liveBirth() {
    /* ... */
  }
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }

  speak() {
    /* ... */
  }
}

```

## 使用链式调用


**Bad:**

``` js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car("Ford", "F-150", "red");
car.setColor("pink");
car.save();

```

**Good:**

``` js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}

const car = new Car("Ford", "F-150", "red").setColor("pink").save();

```

## 多用组合少用继承


**Bad:**

``` js
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // ...
}

// Bad because Employees "have" tax data. EmployeeTaxData is not a type of Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}

```

**Good:**

``` js
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary);
  }
  // ...
}

```

## SOLID

### Single Responsibility Principle (SRP) 

单一职责原则，一个类只做一件事情。


**Bad:**

``` js
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}

```

**Good:**

``` js
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}

```

### Open/Closed Principle (OCP)

开放/封闭原则，开发者增加新功能时不应该修改现有代码。


**Bad:**

``` js
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === "ajaxAdapter") {
      return makeAjaxCall(url).then(response => {
        // transform response and return
      });
    } else if (this.adapter.name === "nodeAdapter") {
      return makeHttpCall(url).then(response => {
        // transform response and return
      });
    }
  }
}

function makeAjaxCall(url) {
  // request and return promise
}

function makeHttpCall(url) {
  // request and return promise
}

```

**Good:**

``` js
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }

  request(url) {
    // request and return promise
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }

  request(url) {
    // request and return promise
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then(response => {
      // transform response and return
    });
  }
}

```

### Liskov Substitution Principle (LSP)

里氏变换原则。正式定义为“如果S是T的子类型，则可以用类型S的对象替换类型T的对象（即，类型S的对象可以替换类型T的对象），而无需更改该程序的任何所需属性（正确性，执行的任务等）。”

如您有一个父类和一个子类，则基类和子类可以互换使用而不会得到错误的结果。


**Bad:**

``` js
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  //父子类互换后这里会出错
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach(rectangle => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);

```

**Good:**

``` js
class Shape {
  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes) {
  shapes.forEach(shape => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);

```

### Interface Segregation Principle (ISP)

接口隔离原则，不应强迫客户端依赖其不使用的接口。


**Bad:**

``` js
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName("body"),
  animationModule() {} // Most of the time, we won't need to animate when traversing.
  // ...
});

```

**Good:**

``` js
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName("body"),
  options: {
    animationModule() {}
  }
});

```

### Dependency Inversion Principle (DIP)

依赖反转原则。该原则陈述了两个基本要点：

1、高级模块不应依赖于低级模块。 两者都应依赖抽象。

2、抽象不应依赖细节。 细节应取决于抽象。



**Bad:**

``` js
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items;

    // BAD: We have created a dependency on a specific request implementation.
    // We should just have requestItems depend on a request method: `request`
    this.requester = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach(item => {
      this.requester.requestItem(item);
    });
  }
}

const inventoryTracker = new InventoryTracker(["apples", "bananas"]);
inventoryTracker.requestItems();

```

**Good:**

``` js
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach(item => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ["WS"];
  }

  requestItem(item) {
    // ...
  }
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets.
const inventoryTracker = new InventoryTracker(
  ["apples", "bananas"],
  new InventoryRequesterV2()
);
inventoryTracker.requestItems();

```


选自[ryanmcdermott/clean-code-javascript: Clean Code concepts adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)


## 调用函数的函数和被调函数应放在较近的位置

当函数间存在相互调用的情况时，应将两者置于较近的位置。

理想情况下，应将调用其他函数的函数写在被调用函数的上方。


**Bad:**

``` js
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers");
  }

  lookupManager() {
    return db.lookup(this.employee, "manager");
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();

```

**Good:**

``` js
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, "peers");
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  lookupManager() {
    return db.lookup(this.employee, "manager");
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();

```



## 冻结私有变量

对外暴露可调用的API和私有变量，可以进行冻结，参考[vta](https://github.com/FunnyLiu/vta/blob/readsource/packages/core/src/core/App.ts#L131)

``` js
    this.#prepareHelpers = Object.freeze<PrepareHelpers>({
      app: {
        cwd: this.cwd,
        silent: this.silent,
        config: this.config,
        getArgument: this.getArgument.bind(this),
        resolvePluginOptions: this.resolvePluginOptions.bind(this),
      },
      registPlugin: this.#registPlugin,
      getPlugin: this.#getPlugin,
      registFeature: this.#registFeature,
    });

```

或者通过Object.defineProperty，不设置set，默认writable为false，所以其他人无法修改。

``` js
//判断是否是http头之X-Requested-With defineGetter(req, 'xhr', function xhr(){
var val = this.get('X-Requested-With') || '';
	return val.toLowerCase() === 'xmlhttprequest'; });
/**
* Helper function for creating a getter on an object. *
* @param {Object} obj
* @param {String} name
* @param {Function} getter
* @private
*/
//使用Object.defineProperty来防止篡改这些对象, //因为默认情况下writable为false，所以即使外界设置了值，也无效。 function defineGetter(obj, name, getter) {
Object.defineProperty(obj, name, { 
	configurable: true,
	enumerable: true,
	get: getter
}); }
```
 
参考自[express的源码](https://github.com/FunnyLiu/express/blob/readsource/lib/request.js#L518)


## 私有属性

1、原生实现

 ES2019 中已经增加了对 class 私有属性的原生支持，只需要在属性 / 方法名前面加上 `'#'` 就可以将其定义为私有，并且支持定义私有的 `static` 属性 / 方法。例如：

``` js
class Person {
  
  #name; 

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  greet() {
    console.log(`hi, i'm ${this.#name} and i'm ${this.age} years old`);
  }
}

```

2、WeakMap


上面提到的#操作符，在babel中是通过weakmap来实现



``` js
class Foo {
  constructor() {
    _bar.set(this, {
      writable: true,
      value: "bar",
    });
  }

  test() {
    return _bar.has(this);
  }
}

var _bar = new WeakMap();
```

最大的缺陷则是兼容性带来的内存膨胀问题，在不支持 WeakMap 的浏览器中是无法实现 WeakMap 的弱引用特性，因此实例无法被垃圾回收。 比如示例代码中 privateProp 是一个很大的数据项，无弱引用的情况下，实例无法回收，从而造成内存泄露。


3.Symbol

``` js

const size = Symbol('size');
class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

```

缺点是

写法上稍显别扭，必须为每一个私有成员都创建一个闭包变量让内部方法可以访问。


外部还是可以通过 Object.getOwnPropertySymbols的方式获取实例的 symbol 属性名称



## 重置属性

参考[preload](https://github.com/FunnyLiu/preloader/blob/readsource/lib/index.js#L225)，提供一个reset方法用来重置对象内的所有属性。




