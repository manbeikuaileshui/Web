console.log(greet("刘", "德华")) // 调用函数放在这里没有问题  原因：函数声明会变量提升
// 函数声明 
function greet(firstName = "Li", lastName = "Ben") { // 调用函数不设置参数，默认使用所给参数(es6之后的做法)

    // 调用函数不设置参数，就默认使用下面的参数 (es6之前的做法)
    // if (typeof firstName === 'undefined') {
    //     firstName = 'Li'
    // }
    // if (typeof lastName === 'undefined') {
    //     lastName = 'Ben'
    // }



    return "Hello " + firstName + " " + lastName
}
console.log(greet("Ben", "Li"))
console.log(greet())


// 函数表达式
console.log(square(4)) //函数调用放在这里直接报错 原因：函数表达式不会变量提升
const square = function (x = 3) {
    return x * x
}

console.log(square(8))
console.log(square())