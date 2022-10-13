// 单行注释
/*
    多行注释
*/

var greeting = 'Hello'
console.log(greeting)

console.log('Hello World')//字符串
console.log(123)//整数
console.log(true)//布尔类型
console.log([1,2,3,4])//数组
console.log({a:1,b:2})//对象
console.table({a:1,b:2})//对象

console.error('这是一个错误')//输出错误
// console.clear()//清除
console.warn('这是一个警告')//警告

console.time('Hello')
    console.log('Hello world!')
    console.log('Hello world!')
    console.log('Hello world!')
    console.log('Hello world!')
    console.log('Hello world!')
    console.log('Hello world!')
    console.log('Hello world!')
console.timeEnd('Hello')