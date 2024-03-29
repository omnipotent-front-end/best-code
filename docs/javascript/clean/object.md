# 对象


## 使用计算属性而不是新增赋值

``` js
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good getKey('enabled')是动态属性名
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

## 对象属性缩写前置

``` js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

## 使用扩展运算符而不是Object.assign

``` js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good es6扩展运算符 ...
const original = { a: 1, b: 2 };
// 浅拷贝
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

// rest 赋值运算符
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

## 使用setter和getter


**Bad:**

``` js
function makeBankAccount() {
  // ...

  return {
    balance: 0
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;

```

**Good:**

``` js
function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance
  };
}

const account = makeBankAccount();
account.setBalance(100);

```


## 使用函数解决引用问题

由于 js 中的对象是引用，因此赋默认值的时候最好通过函数，每次都返回一个新对象。这样就不需要深拷贝啦，比如先看反例：

``` js
const defaultCondition = {
  name: '',
  conditionList: [
    {
      conditionCode: '',
      conditionValue: null,
    },
  ],
}
export default {
    data() {
        return {
            condition: {...defaultCondition},
        };
    },
    methods: {
        closeDialog() {
            this.condition =  {...defaultCondition};
            this.configId = null;
            this.$refs.form.resetFields();
        },
    },
};
```

再看正面案例：

``` js
// 通过一个函数来返回新对象
const getDefaultCondition = () => ({
  name: '',
  conditionList: [
    {
      conditionCode: '',
      conditionValue: null,
    },
  ],
})
export default {
    data() {
        return {
            condition: getDefaultCondition(),
        };
    },
    methods: {
        closeDialog() {
            this.condition = getDefaultCondition();
            this.configId = null;
            this.$refs.form.resetFields();
        },
    },
};
```