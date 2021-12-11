// 1.案例一:
var foo = () => {
  console.log(arguments,111)
}

foo()

// 2.案例二:
function foo() {
  var bar = () => {
    console.log(arguments)  //根据原型链寻找到 foo 的 arguments 而非 bar本身的arguments
  }
  return bar
}

var fn = foo(123)
fn()

// 3.案例三:   没有arguments 但是es6新增的 reset 剩余参数 也可以获取到函数接收的参数
var foo = (...args) => {
  console.log(args)
}

foo(10, 20, 30, 40, 50)
