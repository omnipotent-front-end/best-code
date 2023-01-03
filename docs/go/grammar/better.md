# 高级语法

## defer




# defer

延迟函数调用，defer 后边会接一个函数，但该函数不会立刻被执行，而是等到包含它的程序返回时（包含它的函数执行了 return 语句、运行到函数结尾自动返回、对应的 goroutine panic），defer 函数才会被执行。

通常用于资源释放、打印日志、异常捕获等。

**使用 defer 语句进行延迟调用，用来关闭或释放资源**。



代码：

``` go
package main

import (
	"fmt"
)

func main() {
	// defer 语句的执行是按调用 defer 语句的倒序执行。
	defer func() {
		fmt.Println("first") // 5.  first
	}()

	defer func() {
		fmt.Println("second") // 4.  second
	}()

	fmt.Println("done") // 1. done

	fmt.Println(triple(4)) //3. 12
}

func double(x int) (result int) {
	// defer 语句在 return 语句之后执行
	defer func() {
		fmt.Printf("double(%d) = %d\n", x, result) //2. double(4) = 8
	}()

	return x + x
}

func triple(x int) (result int) {
	defer func() {
		result += x
	}()

	return double(x)
}

```


## panic和recover

**使用 panic 和 recover 来抛出错误和恢复**。

使用 panic 一般有两种情况：

1.程序遇到无法执行的错误时，主动调用 panic 结束运行；

2.在调试程序时，主动调用 panic 结束运行，根据抛出的错误信息来定位问题。

为了程序的健壮性，可以使用 recover 捕获错误，恢复程序运行。


一般情况下，在程序里记录错误日志，就可以帮助我们在碰到异常时快速定位问题。

但还有一些错误比较严重的，比如数组越界访问，程序会主动调用 panic 来抛出异常，然后程序退出。

如果不想程序退出的话，可以使用 recover 函数来捕获并恢复。

感觉挺不好理解的，但仔细想想其实和 try-catch 也没什么区别。


代码：


``` go
package main

import (
	"fmt"
)

func main() {
	G()
}

func G() {
	defer func() {
		fmt.Println("c") //4.  c
	}()
	F()
	fmt.Println("继续执行") // 3.  继续执行
}

func F() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("捕获异常:", err) // 1.  捕获异常：a
		}
		fmt.Println("b") // 2.  b
	}()
	panic("a")
}

```


## 方法method

方法可以看作是某种**特定类型的函数**，是 Go 面向对象编程的第一步。用好方法，具备面向对象编程思想是关键。

方法的声明和函数类似，他们的区别是：方法在定义的时候，会在 func 和方法名之间增加一个参数，这个参数就是接收者。

接收者有两种类型：值接收者和指针接收者。不管是使用值接收者，还是指针接收者，一定要搞清楚类型的本质：对类型进行操作的时候，是要改变当前值，还是要创建一个新值进行返回？这些就可以决定我们是采用值传递，还是指针传递。

最后就是方法的调用，可以直接使用 . 操作符调用，还可以使用方法变量和方法表达式。

代码如下：

``` go
package main

import (
	"fmt"
)

type Person struct {
	name string
}

type Point struct {
	x, y int
}

func main() {
	p := Person{name: "zhangsan"}

	// 调用方法
	fmt.Println(p.String()) // 1. person name is zhangsan

	// 值接收者，不会改变原始值
	p.Modify()
	fmt.Println(p.String()) // 2. person name is zhangsan
	// 等价于
	(&p).Modify()
	fmt.Println(p.String()) // 3. person name is zhangsan

	// 指针接收者，会改变原始值
	p.ModifyP()
	fmt.Println(p.String()) // 4. person name is lisi
	// 等价于
	(&p).ModifyP()
	fmt.Println(p.String()) // 5. person name is lisi

	// 方法变量
	p1 := Point{1, 2}
	q1 := Point{3, 4}
	f := p1.Add
	fmt.Println(f(q1)) // 6. {4 6}

	// 方法表达式
	f1 := Point.Add
	fmt.Println(f1(p1, q1)) // 7. {4 6}
}

func (p Person) String() string {
	return "person name is " + p.name
}

// 方法在定义的时候，会在 func 和方法名之间增加一个参数，
// 这个参数就是接收者
// 分为值接收者
func (p Person) Modify() {
	p.name = "lisi"
}

// 和指针接收者
func (p *Person) ModifyP() {
	p.name = "lisi"
}

func (p Point) Add(q Point) Point {
	return Point{p.x + q.x, p.y + q.y}
}

```


## 接口interface

之前介绍的类型都是具体类型，而接口是一种抽象类型，是多个方法声明的集合。在 Go 中，只要目标类型实现了接口要求的所有方法，我们就说它实现了这个接口。

接口赋值，空接口，类型断言和类型查询

代码如下：

``` go
package main

import "fmt"

// 定义接口，包含 Eat 方法
type Duck interface {
	Eat()
}

type Duck1 interface {
	Eat()
	Walk()
}

// 定义 Cat 结构体，并实现 Eat 方法
type Cat struct{}

func (c *Cat) Eat() {
	fmt.Println("cat eat")
}

// 定义 Dog 结构体，并实现 Eat 方法
type Dog struct{}

func (d *Dog) Eat() {
	fmt.Println("dog eat")
}

func (d *Dog) Walk() {
	fmt.Println("dog walk")
}

func main() {
	var c Duck = &Cat{}
	c.Eat() // 1. cat eat

	var d Duck = &Dog{}
	d.Eat() // 2. do eat

	s := []Duck{
		&Cat{},
		&Dog{},
	}
	for _, n := range s {
		n.Eat() // 3. cat eat 4. dog eat
	}

	var c1 Duck1 = &Dog{}
	var c2 Duck = c1
	c2.Eat() // 5. dog eat

	// 类型断言
	var n interface{} = 55
	assert(n) // 6. 55
	var n1 interface{} = "hello"
	// assert(n1) // panic: interface conversion: interface {} is string, not int
	assertFlag(n1) // 不是int类型，不会输出
	// 类型断言
	assertInterface(c) // 7.  &{}

	// 类型查询
	searchType(50)         // 8. Int: 50
	searchType("zhangsan") // 9. String: zhangsan
	searchType(c1)         // 10. dog eat
	searchType(50.1)       // 11.  Unknown type

	// 空接口
	s1 := "Hello World"
	i := 50
	strt := struct {
		name string
	}{
		name: "AlwaysBeta",
	}
	test(s1)   // Type = string, value = Hello World
	test(i)    // Type = int, value = 50
	test(strt) // Type = struct { name string }, value = {AlwaysBeta}
}

func assert(i interface{}) {
	// 类型断言是作用在接口值上的操作，x.(T)
	// 如果是，则输出 x 的值；如果不是，程序直接 panic。
	s := i.(int)
	fmt.Println(s)
}

func assertInterface(i interface{}) {
	// 类型断言是作用在接口值上的操作，x.(T)
	// 如果是，则输出 x 的值；如果不是，程序直接 panic。
	s := i.(Duck)
	fmt.Println(s)
}

func assertFlag(i interface{}) {
	if s, ok := i.(int); ok {
		fmt.Println(s)
	}
}

func searchType(i interface{}) {
	// 语法类似类型断言，只需将 T 直接用关键词 type 替代。
	switch v := i.(type) {
	case string:
		fmt.Printf("String: %s\n", i.(string))
	case int:
		fmt.Printf("Int: %d\n", i.(int))
	case Duck:
		v.Eat()
	default:
		fmt.Printf("Unknown type\n")
	}
}

func test(i interface{}) {
	fmt.Printf("Type = %T, value = %v\n", i, i)
}



```



## goroutine

Go 语言的并发执行体称为 goroutine，使用关键词 go 来启动一个 goroutine。

go 关键词后面必须跟一个函数，可以是有名函数，也可以是无名函数，函数的返回值会被忽略。

go 的执行是非阻塞的。


当一个程序启动时，只有一个 goroutine 来调用 main 函数，称为主 goroutine。新的 goroutine 通过 go 关键词创建，然后并发执行。当 main 函数返回时，不会等待其他 goroutine 执行完，而是直接暴力结束所有 goroutine。

代码：

``` go
package main

import (
	"fmt"
	"time"
)

func main() {
	// 并不阻塞
	go spinner(100 * time.Millisecond)
	const n = 45
	// 计算斐波那契数列
	fibN := fib(n)
	fmt.Printf("\rFibonacci(%d) = %d\n", n, fibN) // Fibonacci(45) = 1134903170
}

func spinner(delay time.Duration) {
	for {
		// 转小菊花
		for _, r := range `-\|/` {
			fmt.Printf("\r%c", r)
			time.Sleep(delay)
		}
	}
}

func fib(x int) int {
	if x < 2 {
		return x
	}
	return fib(x-1) + fib(x-2)
}

```

## channel

一般写多进程程序时，都会遇到一个问题：进程间通信。常见的通信方式有信号，共享内存等。goroutine 之间的通信机制是通道 channel。

``` go
package main

import "fmt"

func Add(x, y int, ch chan int) {
	z := x + y
	ch <- z
}

// 通道支持三个主要操作：send，receive 和 close。
// ch <- x // 发送
// x = <-ch // 接收
// <-ch // 接收，丢弃结果

// close(ch) // 关闭
func counter(out chan<- int) {
	for x := 0; x < 10; x++ {
		out <- x
	}
	close(out)
}

// 类型 chan<- int 是一个只能发送的通道，类型 <-chan int 是一个只能接收的通道。
func squarer(out chan<- int, in <-chan int) {
	for v := range in {
		out <- v * v
	}
	close(out)
}

func printer(in <-chan int) {
	for v := range in {
		fmt.Println(v)
	}
}

func main() {
	// 使用 make 创建通道：
	// make 函数接受两个参数，第二个参数是可选参数，表示通道容量。不传或者传 0 表示创建了一个无缓冲通道。
	// 无缓冲通道上的发送操作将会阻塞，直到另一个 goroutine 在对应的通道上执行接收操作
	// 所以，无缓冲通道是一种同步通道
	n := make(chan int)
	s := make(chan int)

	go counter(n)
	go squarer(s, n)
	printer(s)
	// 0 1 4 9 16 25 36 49 64 81

	ch := make(chan int)
	for i := 0; i < 10; i++ {
		go Add(i, i, ch)
	}

	for i := 0; i < 10; i++ {
		fmt.Println(<-ch)
		//随机的： 0 8 2 4 6 12 10 14 16
	}
}

```

## sync

sync 包提供了两种锁类型：sync.Mutex 和 sync.RWMutex，前者是互斥锁，后者是读写锁。

当一个 goroutine 获取了 Mutex 后，其他 goroutine 不管读写，只能等待，直到锁被释放。

RWMutex 属于经典的单写多读模型，当读锁被占用时，会阻止写，但不阻止读。而写锁会阻止写和读。

互斥锁代码：

``` go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	// 互斥锁
	// 当一个 goroutine 获取了 Mutex 后，其他 goroutine 不管读写，只能等待，直到锁被释放
	var mutex sync.Mutex
	wg := sync.WaitGroup{}

	// 主 goroutine 先获取锁
	fmt.Println("Locking  (G0)") // 1. Locking  (G0)
	mutex.Lock()
	fmt.Println("locked (G0)") // 2. locked (G0)

	wg.Add(3)
	for i := 1; i < 4; i++ {
		go func(i int) {
			// 由于主 goroutine 先获取锁，程序开始 5 秒会阻塞在这里
			fmt.Printf("Locking2 (G%d)\n", i)
			// 345三个结果是随机
			// 3. Locking2 (G3)
			// 4. Locking2 (G1)
			// 5. Locking2 (G2)
			mutex.Lock()
			fmt.Printf("locked2 (G%d)\n", i)

			time.Sleep(time.Second * 2)
			mutex.Unlock()
			fmt.Printf("unlocked2 (G%d)\n", i)
			// 8 10 12之间间隔两秒
			// 8. locked2 (G3)
			// 9. unlocked2 (G3)
			// 10. locked2 (G1)
			// 11. unlocked2 (G1)
			// 12. locked2 (G2)
			// 13. unlocked2 (G2)
			wg.Done()
		}(i)
	}

	// 主 goroutine 5 秒后释放锁
	time.Sleep(time.Second * 5)
	fmt.Println("ready unlock (G0)")
	// 6. ready unlock (G0)
	mutex.Unlock()
	fmt.Println("unlocked (G0)")
	// 7. unlocked (G0)

	wg.Wait()
}

```


读写锁代码：

``` go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	// RWMutex 属于经典的单写多读模型，当读锁被占用时，会阻止写，但不阻止读。而写锁会阻止写和读。

	var rwMutex sync.RWMutex
	wg := sync.WaitGroup{}

	Data := 0
	wg.Add(20)
	for i := 0; i < 10; i++ {
		go func(t int) {
			// 第一次运行后，写解锁。
			// 循环到第二次时，读锁定后，goroutine 没有阻塞，同时读成功。
			fmt.Println("Locking")
			// 1. 连续10个Locking
			rwMutex.RLock()
			defer rwMutex.RUnlock()
			fmt.Printf("Read data: %v\n", Data)
			wg.Done()
			time.Sleep(2 * time.Second)
		}(i)
		go func(t int) {
			// 写锁定下是需要解锁后才能写的
			rwMutex.Lock()
			defer rwMutex.Unlock()
			Data += t
			fmt.Printf("Write Data: %v %d \n", Data, t)
			wg.Done()
			time.Sleep(2 * time.Second)
		}(i)
	}

	wg.Wait()
}

```
