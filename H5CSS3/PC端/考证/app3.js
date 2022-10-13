/*
    基本数据类型：存储在内存的栈(Stack)中，变量能直接访问
    引用数据类型：通过索引访问，存储在内存的堆(Heap)中，通过指针访问

    6种基本数据类型：
        String      字符串
        Number      数字
        Boolean     布尔值
        NULL        空值
        Undefined   未定义
        Symbols     (es6)

    引用数据类型：
        Array           数组
        Object Literal  对象
        Function        函数
        Date            日期
        其它

    JS 是动态类型语言
        变量不区分数据类型，但是具体的值有数据类型
        同一个变量可以存放不同数据类型的值
        声明变量时，无须指定数据类型
        JS超子集提供静态类型检查(Typescript)
*/

// 基本数据类型
// String
const name = '陈奕迅'
console.log(typeof name)

// Number
const age = 45
console.log(typeof age)

// Boolean
const hadKids = true
console.log(typeof hadKids)

// Null
const car = null
console.log(typeof car)

// undefined
let test
console.log(typeof test)

// Symbol
const sym = Symbol()
console.log(typeof sym)


// 引用数据类型
// Array
const hobbies = ['电影','音乐']
console.log(typeof hobbies)
console.log(hobbies)

// Object Literal
const address = {
    city: '广州',
    province: '广东'
}
console.log(typeof address)
console.log(address)

// Date
const today = new Date()
console.log(typeof today)
console.log(today)
