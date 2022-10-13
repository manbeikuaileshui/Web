// 全局作用域
var a = 1
let b = 2
const c = 3

// 函数作用域
function test() {
    var a = 4
    let b = 5
    const c = 6
    console.log("函数作用域：", a, b, c)
}
test()

// 块级作用域
if (true) {
    var a = 4
    let b = 5
    const c = 6
    console.log("IF块级作用域：", a, b, c)
}

// for循环作用域
for (let a = 0; a < 10; a++) {
    console.log(`循环块级作用域：${a}`)
}

console.log("全局作用域：", a, b, c)