# 基础语法

## 变量

变量声明主要有三种方式：

1.使用关键字 var 来声明；

2.使用 := 的短变量声明方式；

3.使用内置函数 new。


``` go
package main

import "fmt"

// 全局变量
var gg = "global"

func main() {
	// 作用域
	fmt.Println(gg) // 输出 global
	gg = "local"
	fmt.Println(gg) // 输出 local

	// 第一种方式：通过var来声明
	var a = "initial" // 声明单个变量

	var d = true // 声明布尔值

	// 以组的方式声明多个变量
	var (
		b1, c1 int // 默认会赋予0
		b2, c2 = 3, 4
	)
	// 第二种方式：使用短变量声明方式
	// go会自己判断类型
	f := "short"
	// 什么多个值
	g, h := 5, "alwaysbeta"

	fmt.Println(a)
	fmt.Println(d)
	fmt.Println(b1, c1, b2, c2)
	fmt.Println(f, g, h)

	// 赋值 使用=
	var m, n int
	m = 9
	n = 10
	fmt.Println(m, n) // 9, 10
	// 直接交换值
	m, n = n, m
	fmt.Println(m, n) // 10, 9

	// 如果有不需要的变量，使用空标识符 _ 来忽略
	// 空标识符
	r := [5]int{1, 2, 3, 4, 5}
	for _, v := range r {
		// fmt.Println(i, v)
		// fmt.Println(v)   // 定义 i 但不用会报错 i declared but not used
		fmt.Println(v) // 忽略索引
	}
}

```


## 常量


``` go
package main

import "fmt"

func main() {
	// 无类型整型常量
	const n = 500000000

	// 用编译阶段即可计算出值的表达式来赋值
	const d = 3e20 / n
	fmt.Println(d)
	// 无类型浮点常量
	const zero = 0.0

	// 无类型整型和字符串常量
	const a, b, c = 3, 4, "foo"
	fmt.Println(a, b, c)

	// 多个常量
	const (
		size int64 = 1024
		eof        = -1 // 无类型整型常量
	)
	fmt.Println(size, eof)

	// 常量声明还有可以使用常量生成器 iota，它不会显示写出常量的值，而是从 0 开始，逐项加 1。
	// iota 在每个 const 开头被重置为 0。
	// 从 0 值开始，逐项加 1
	const (
		a0 = iota // 0
		a1 = iota // 1
		a2 = iota // 2
	)
	fmt.Println(a0, a1, a2)

	// 简写，表达式相同，可以省略后面的
	const (
		b0 = iota // 0
		b1        // 1
		b2        // 2
	)
	fmt.Println(b0, b1, b2)

	const (
		bb         = iota      // 0
		cc float32 = iota * 10 // 10
		dd         = iota      // 2
	)
	fmt.Println(bb, cc, dd)
}

```

## 基础数据类型

Go 的数据类型分四大类：

基础类型： 数字 number，字符串 string 和布尔型 boolean。

聚合类型： 数组 array 和结构体 struct。

引用类型： 指针 pointer，切片 slice，字典 map，函数 func 和通道 channel。

接口类型： 接口 interface。

其中，基础类型又分为：

整型： int8、uint8、byte、int16、uint16、int32、uint32、int64、uint64、int、uint、uintptr。

浮点型： float32，float64。

复数类型： complex64、complex128。

布尔型： bool。

字符串： string。

字符型： rune。

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20221222103724.png"/>


``` go
package main

import "fmt"

func main() {
	var a int = 10
	var b int32 = 20

	// fmt.Println(a + b)	// 报错 invalid operation: a + b (mismatched types int and int32)
	// 需要强制类型转换
	fmt.Println(a + int(b)) // 输出 30

	// 浮点型转整型
	var c float32 = 10.23
	fmt.Println(int(c)) // 输出 10

	// 取模
	fmt.Println(5 % 3)   // 输出 2
	fmt.Println(-5 % -3) // 输出 -2

	// 除法
	fmt.Println(5 / 3)     // 输出 1
	fmt.Println(5.0 / 3.0) // 输出 1.6666666666666667

	// 比较运算
	var i int32
	var j int64
	i, j = 1, 2

	// if i == j { // 报错 invalid operation: i == j (mismatched types int32 and int64)
	// 	fmt.Println("i and j are equal.")
	// }
	if i == 1 || j == 2 {
		fmt.Println("equal.")
	}

	// 复数
	var x complex64 = 3 + 5i
	var y complex128 = complex(3.5, 10)
	// 分别打印实部和虚部
	fmt.Println(real(x), imag(x)) // 输出 3 5
	fmt.Println(real(y), imag(y)) // 输出 3.5 10

	// 布尔
	ok := true
	fmt.Println(ok)

	// 类型转换
	// var e bool
	// e = bool(1)	// 报错  cannot convert 1 (type untyped int) to type bool

	m := 1
	// if m { // 报错 non-bool m (type int) used as if condition
	// 	fmt.Println("is true")
	// }
	if m == 1 {
		fmt.Println("m is 1")
	}

	// 字符串
	s1 := "hello"
	s2 := "world"

	// 原始字符串
	s := `row1\r\n
	row2`
	fmt.Println(s)

	// 字符串拼接
	s3 := s1 + s2
	fmt.Println(s3)
	// 取字符串长度
	fmt.Println(len(s3))
	// 取单个字符
	fmt.Println(s3[4])
	// 字符串切片
	fmt.Println(s3[2:4])
	fmt.Println(s3[:4])
	fmt.Println(s3[2:])
	fmt.Println(s3[:])

	// 修改报错
	// s3[0] = "H"	// cannot assign to s3[0] (strings are immutable)

	s4 := "hello 世界"

	// 遍历字节数组
	for i := 0; i < len(s4); i++ {
		fmt.Println(i, s4[i])
	}

	// 遍历 rune 数组
	for i, v := range s4 {
		fmt.Println(i, v)
	}
}

```


## 数组

数组有两个特点：

固定长度

元素类型相同


Go 数组是值类型，赋值和传参都会复制整个数组。


代码如下：

``` go
package main

import "fmt"

func main() {
	var a [3]int
	// 输出数组第一个元素
	fmt.Println(a[0]) // 0
	// 输出数组长度
	fmt.Println(len(a)) // 3

	// 数组字面量初始化
	var b [3]int = [3]int{1, 2, 3}
	var c [3]int = [3]int{1, 2}
	fmt.Println(b)    // [1 2 3]
	fmt.Println(c[2]) // 0

	// 使用 ...
	d := [...]int{1, 2, 3, 4, 5}
	fmt.Printf("%T\n", d) // [5]int

	// 指定索引位置初始化
	e := [4]int{5, 2: 10}
	f := [...]int{2, 4: 6}
	fmt.Println(e) // [5 0 10 0]
	fmt.Println(f) // [2 0 0 0 6]

	// 二维数组
	var g [4][2]int
	h := [4][2]int{{10, 11}, {20, 21}, {30, 31}, {40, 41}}
	// 声明并初始化外层数组中索引为 1 和 3 的元素
	i := [4][2]int{1: {20, 21}, 3: {40, 41}}
	// 声明并初始化外层数组和内层数组的单个元素
	j := [...][2]int{1: {0: 20}, 3: {1: 41}}
	// [[0 0] [0 0] [0 0] [0 0]]
	// [[10 11] [20 21] [30 31] [40 41]]
	// [[0 0] [20 21] [0 0] [40 41]]
	// [[0 0] [20 0] [0 0] [0 41]]
	fmt.Println(g, h, i, j)

	// 数组比较
	a1 := [2]int{1, 2}
	a2 := [...]int{1, 2}
	a3 := [2]int{1, 3}
	// a4 := [3]int{1, 2}
	fmt.Println(a1 == a2, a1 == a3, a2 == a3) // true false false
	// fmt.Println(a1 == a4)                     // invalid operation: a1 == a4 (mismatched types [2]int and [3]int)

	// 数组遍历
	for i, n := range e {
		fmt.Println(i, n)
	}
	// 0 5
	// 1 0
	// 2 10
	// 3 0

	// Go 数组是值类型，赋值和传参都会复制整个数组。
	// 数组复制,内容都是相同的，但地址不同
	x := [2]int{10, 20}
	y := x
	fmt.Printf("x: %p, %v\n", &x, x) // x: 0xc00012e020, [10 20]
	fmt.Printf("y: %p, %v\n", &y, y) // y: 0xc00012e030, [10 20]
	test(x)

	// 传参
	modify(x)
	fmt.Println("main: ", x) // main:  [10 20]
}

func test(a [2]int) {
	fmt.Printf("a: %p, %v\n", &a, a) // a: 0xc00012e060, [10 20]
}

func modify(a [2]int) {
	a[0] = 30
	fmt.Println("modify: ", a) // modify:  [30 20]
}

```

## 切片

切片是一种引用类型，它有三个属性：指针，长度和容量。

指针：指向 slice 可以访问到的第一个元素。

长度：slice 中元素个数。

容量：slice 起始元素到底层数组最后一个元素间的元素个数。


<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20221222105055.png"/>



代码如下：

``` go
package main

import "fmt"

func main() {
	// 创建切片第一种方式：基于数组创建切片
	var array = [...]int{1, 2, 3, 4, 5, 6, 7, 8}

	s1 := array[3:6]
	s2 := array[:5]
	s3 := array[4:]
	s4 := array[:]

	fmt.Printf("s1: %v\n", s1) // s1: [4 5 6]
	fmt.Printf("s2: %v\n", s2) // s2: [1 2 3 4 5]
	fmt.Printf("s3: %v\n", s3) // s3: [5 6 7 8]
	fmt.Printf("s4: %v\n", s4) // s4: [1 2 3 4 5 6 7 8]

	// 创建切片第二种方式：使用 make 创建切片
	// len: 10, cap: 10
	a := make([]int, 10)
	// len: 10, cap: 15
	b := make([]int, 10, 15)

	fmt.Printf("a: %v, len: %d, cap: %d\n", a, len(a), cap(a)) // a: [0 0 0 0 0 0 0 0 0 0], len: 10, cap: 10
	fmt.Printf("b: %v, len: %d, cap: %d\n", b, len(b), cap(b)) // b: [0 0 0 0 0 0 0 0 0 0], len: 10, cap: 15

	// 切片遍历,和遍历数组是一样的
	for i, n := range s1 {
		fmt.Println(i, n)
	}

	// 比较
	var s []int
	fmt.Println(len(s) == 0, s == nil) // true true
	s = nil
	fmt.Println(len(s) == 0, s == nil) // true true
	s = []int(nil)
	fmt.Println(len(s) == 0, s == nil) // true true
	s = []int{}
	fmt.Println(len(s) == 0, s == nil) // true false

	// 追加
	s5 := append(s4, 9)
	fmt.Printf("s5: %v\n", s5) // s5: [1 2 3 4 5 6 7 8 9]
	s6 := append(s4, 10, 11)
	fmt.Printf("s6: %v\n", s6) // s5: [1 2 3 4 5 6 7 8 10 11]

	// 追加另一个切片
	s7 := []int{12, 13}
	s7 = append(s7, s6...)
	fmt.Printf("s7: %v\n", s7) // s7: [12 13 1 2 3 4 5 6 7 8 10 11]

	// 复制
	s8 := []int{1, 2, 3, 4, 5}
	s9 := []int{5, 4, 3}
	s10 := []int{6}

	copy(s8, s9)
	fmt.Printf("s8: %v\n", s8) // s8: [5 4 3 4 5]
	copy(s10, s9)
	fmt.Printf("s10: %v\n", s10) // s10: [5]

	// 传参
	modify(s9)
	fmt.Println("main: ", s9) // main:  [30 4 3]
}

// 在 modify 中修改的值会影响到 main 中。
func modify(a []int) {
	a[0] = 30
	fmt.Println("modify: ", a) // modify:  [30 4 3]
}

```


## 字典Map

字典是一种非常常用的数据结构，Go 中用关键词 map 表示，类型是 map[K]V。K 和 V 分别是字典的键和值的数据类型，其中键必须支持相等运算符，比如数字，字符串等。



代码如下：

``` go
package main

import "fmt"

func main() {
	// 字面量方式创建
	var m = map[string]int{"a": 1, "b": 2}
	fmt.Println(m) // map[a:1 b:2]

	// 使用 make 创建
	m1 := make(map[string]int)
	fmt.Println(m1) // map[]

	// 指定长度
	m2 := make(map[string]int, 10)
	fmt.Println(m2) //map[]

	// 零值是 nil
	var m3 map[string]int
	fmt.Println(m3 == nil, len(m3) == 0) // true true
	// nil 赋值报错
	// m3["a"] = 1
	// fmt.Println(m3)	// panic: assignment to entry in nil map

	// 赋值
	m["c"] = 3
	m["d"] = 4
	fmt.Println(m) // map[a:1 b:2 c:3 d:4]

	// 取值
	fmt.Println(m["a"], m["d"]) // 1 4
	fmt.Println(m["k"])         // 0

	// 删除
	delete(m, "c")
	delete(m, "f") // key 不存在也不报错
	fmt.Println(m) // map[a:1 b:2 d:4]

	// 获取长度
	fmt.Println(len(m)) // 3

	// 判断键是否存在
	if value, ok := m["d"]; ok {
		fmt.Println(value) // 4
	}

	// 遍历
	for k, v := range m {
		fmt.Println(k, v)
	}

	// 传参
	// map 是引用类型，所以在函数间传递时，也不会制造一个映射的副本，这点和切片类似，都很高效。
	modify(m)
	fmt.Println("main: ", m) // main:  map[a:1 b:2 d:4 e:10]
}

func modify(a map[string]int) {
	a["e"] = 10
	fmt.Println("modify: ", a) //	modify:  map[a:1 b:2 d:4 e:10]
}
```


## 结构体Struct

结构体是一种聚合类型，包含零个或多个任意类型的命名变量，每个变量叫做结构体的成员。

代码如下：

``` go
package main

import "fmt"

// 声明结构体
type user struct {
	name string
	age  int
}

type admin struct {
	u       user
	isAdmin bool
}

type leader struct {
	u        user
	isLeader bool
}

type admin1 struct {
	user
	isAdmin bool
}

func main() {
	// 初始化
	u1 := user{"zhangsan", 18}
	fmt.Println(u1) // {zhangsan 18}

	// 更好的方式, 按照字段名字来初始化。
	// u := user{
	// 	age: 20,
	// }
	// fmt.Println(u)	// { 20}
	u := user{
		name: "zhangsan",
		age:  18,
	}
	fmt.Println(u) // {zhangsan 18}

	// 访问结构体成员
	fmt.Println(u.name, u.age) // zhangsan 18
	u.name = "lisi"
	fmt.Println(u.name, u.age) // lisi 18

	// 结构体比较
	u2 := user{
		age:  18,
		name: "zhangsan",
	}
	fmt.Println(u1 == u)  // false
	fmt.Println(u1 == u2) // true

	// 结构体嵌套
	a := admin{
		u:       u,
		isAdmin: true,
	}
	fmt.Println(a) // {{lisi 18} true}
	a.u.name = "wangwu"
	fmt.Println(a.u.name)  // wangwu
	fmt.Println(a.u.age)   // 18
	fmt.Println(a.isAdmin) // true

	l := leader{
		u:        u,
		isLeader: false,
	}
	fmt.Println(l) // {{lisi 18} false}

	// 匿名成员, 通过这种方式可以省略掉中间变量，直接访问我们需要的成员变量。
	a1 := admin1{
		user:    u,
		isAdmin: true,
	}
	a1.age = 20
	a1.isAdmin = false

	fmt.Println(a1)         // {{lisi 20} false}
	fmt.Println(a1.name)    // lisi
	fmt.Println(a1.age)     // 20
	fmt.Println(a1.isAdmin) // false
}

```


## ifelse



``` go
package main

import "fmt"

func main() {
	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is odd") // 7 is odd
	}

	if 8%4 == 0 {
		fmt.Println("8 is divisible by 4") // 8 is divisible by 4
	}

	if num := 9; num < 0 {
		fmt.Println(num, "is negative")
	} else if num < 10 {
		fmt.Println(num, "has 1 digit") // 9 has 1 digit
	} else {
		fmt.Println(num, "has multiple digits")
	}
}

```


## switchcase

``` go
package main

import (
	"fmt"
	"time"
)

func main() {
	i := 2
	fmt.Print("write ", i, " as ")
	switch i {
	case 1:
		fmt.Println("one")
	case 2:
		fmt.Println("two") // write 2 as two
		fallthrough
	case 3:
		fmt.Println("three") // three
	case 4, 5, 6:
		fmt.Println("four, five, six")
	}

	switch num := 9; num {
	case 1:
		fmt.Println("one")
	default:
		fmt.Println("nine") // nine
	}

	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("it's the weekend")
	default:
		fmt.Println("it's a weekday") // it's a weekday
	}

	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("it's before noon")
	default:
		fmt.Println("it's after noon") // it's after noon
	}
}

```

## for


直接代码：

``` go
package main

import (
	"fmt"
)

func main() {
	i := 1
	// 只有条件
	for i <= 3 {
		fmt.Println(i) // 1 2 3
		i = i + 1
	}

	// 有变量初始化和条件
	for j := 7; j <= 9; j++ {
		fmt.Println(j) // 7 8 9
	}

	// 死循环
	for {
		fmt.Println("loop")
		break
	}

	// 遍历数组
	a := [...]int{10, 20, 30, 40}
	for i := range a {
		fmt.Println(i) // 0 1 2 3
	}
	for i, v := range a {
		fmt.Println(i, v) // 0 10, 1 20, 2 30, 3 40
	}

	// 遍历切片
	s := []string{"a", "b", "c"}
	for i := range s {
		fmt.Println(i) // 0 1 2
	}
	for i, v := range s {
		fmt.Println(i, v) // 0 a, 1 b, 2 c
	}

	// 遍历字典
	m := map[string]int{"a": 10, "b": 20, "c": 30}
	for k := range m {
		fmt.Println(k) // a b c
	}
	for k, v := range m {
		fmt.Println(k, v)
	}
}

```

## goto

goto 特点：

只能在函数内跳转，需要配合标签一起使用；

不能跳过内部变量声明语句；

只能跳到同级作用域或者上层作用域内，不能跳到内部作用域内。

直接代码

``` go
package main

import (
	"fmt"
)

func main() {
	// 跳出循环
	for i := 0; ; i++ {
		if i == 2 {
			goto L1
		}
		fmt.Println(i)
	}
L1:
	fmt.Println("Done")

	// 跳过变量声明，不允许
	// 	goto L2
	// 	j := 1
	// L2:

	// break 跳转到标签处，然后跳过 for 循环
L3:
	for i := 0; ; i++ {
		for j := 0; ; j++ {
			if i >= 2 {
				break L3
			}
			if j > 4 {
				break
			}
			fmt.Println(i, j)
		}
	}

	// continue 跳转到标签处，然后执行 i++
L4:
	for i := 0; ; i++ {
		for j := 0; j < 6; j++ {
			if i > 4 {
				break L4
			}
			if i >= 2 {
				continue L4
			}
			if j > 4 {
				continue
			}
			fmt.Println(i, j)
		}
	}
}

// 0
// 1
// Done
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
// 1 0
// 1 1
// 1 2
// 1 3
// 1 4
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
// 1 0
// 1 1
// 1 2
// 1 3
// 1 4

```

## 函数

函数包括以下几个部分：关键词 func，函数名，参数列表，返回列表和函数体。

直接上代码：


``` go
package main

import (
	"fmt"
)

func main() {
	funcA() // i am funcA

	// 函数签名
	fmt.Printf("%T\n", add) // func(int, int) int
	fmt.Printf("%T\n", sub) // func(int, int) int

	// 不定参数
	fmt.Println(funcSum(1, 2))    // 3
	fmt.Println(funcSum(1, 2, 3)) // 6

	// slice 参数
	s := []int{1, 2, 3, 4}
	fmt.Println(funcSum(s...)) // 10
	fmt.Println(funcSum1(s))   // 10

	// 多返回值
	fmt.Println(swap(1, 2)) // 2 1

	x, _ := swap(1, 2)
	fmt.Println(x) // 2

	// 匿名函数
	sum := func(a, b int) int { return a + b }
	fmt.Println(sum(1, 2)) // 3

	// 作为参数
	fmt.Println(funcSum2(sum, 3, 5)) // 8

	// 作为返回值
	f := wrap("add")
	fmt.Println(f(2, 4)) // 6

	// 直接调用
	fmt.Println(func(a, b int) int { return a + b }(4, 5)) // 9
}

func funcA() {
	fmt.Println("i am funcA")
}

func add(x int, y int) int {
	return x + y
}

func sub(x int, y int) (z int) {
	z = x - y
	return
}

// 简写形式
func add1(x, y int) int {
	return x + y
}

func sub1(x, y int) (z int) {
	z = x - y
	return
}

// 不定参数
func funcSum(args ...int) (ret int) {
	for _, arg := range args {
		ret += arg
	}
	return
}

// slice 参数
func funcSum1(args []int) (ret int) {
	for _, arg := range args {
		ret += arg
	}
	return
}

// 多返回值
func swap(x, y int) (int, int) {
	return y, x
}

// 匿名函数作为参数
func funcSum2(f func(int, int) int, x, y int) int {
	return f(x, y)
}

// 匿名函数作为返回值
func wrap(op string) func(int, int) int {
	switch op {
	case "add":
		return func(a, b int) int {
			return a + b
		}
	case "sub":
		return func(a, b int) int {
			return a + b
		}

	default:
		return nil
	}
}

```