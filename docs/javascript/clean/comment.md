# 注释

## 函数入参

``` js

// 对象
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function({ name, department }) {
    // ...
};

//数组

/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
Project.prototype.assign = function(employees) {
    // ...
};

//多类型+默认值

/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);
}


//demo
/**
 * 截图
 * @async
 * @function screenShots
 * @example
 * import { screenShots } from '@/utils/imageUtil'
 * await screenShots({
 *   dom: this.$refs.canvas,
 *   config: {
 *     name: 'devops日报表'
 *    }
 * })
 * @param {Object} params - 参数
 * @param {Object} params.dom - 需要截取的dom元素
 * @param {Object} params.canvasParams 透传给html2canvas的配置参数
 * @param {Object} params.config 自用的配置
 * @param {string} params.config.name 图片名称
 */
```


## 函数返回值

``` js
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
    return a + b;
}

//promise
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {Promise} Promise object represents the sum of a and b
 */
function sumAsync(a, b) {
    return new Promise(function(resolve, reject) {
        resolve(a + b);
    });
}


// 多类型

/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @param {boolean} retArr If set to true, the function will return an array
 * @returns {(number|Array)} Sum of a and b or an array that contains a, b and the sum of a and b.
 */
function sum(a, b, retArr) {
    if (retArr) {
        return [a, b, a + b];
    }
    return a + b;
}
```


## 函数标识

``` js
// 异步
/**
 * Download data from the specified URL.
 *
 * @async
 * @function downloadData
 * @param {string} url - The URL to download from.
 * @return {Promise<string>} The data from the URL.
 */
```