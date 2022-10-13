// var let const

/*
// var
var name = '陈奕迅'
console.log(name)
name = "张学友"
console.log(name)

// 初始化变量
var greeting
console.log(greeting)
greeting = 'hello'
console.log(greeting)

//命名方式：字母、数字、_、$组成，不能以数字开头
var name = '陈奕迅'

// 多个单词变量
var firstName = 'John' // 驼峰命名法
var first_name = 'Sara' // 下划线命名法
var FirstName = 'Tom' // Pascal命名法 大驼峰命名法
var firstname = 'Mdg'
*/


/*
// let
let name = '陈奕迅'
console.log(name)
name = "张学友"
console.log(name)
*/


 // const
 const name = '陈奕迅' 
 console.log(name)
 // name = '张学友'// const声明的变量无法重新赋
 // 初始化时必须赋值
 // const greetin
 // 使用const创建的对象、数组，可以改变对象的属性
 const person = {
     name: '陈奕迅',
     age: 30
 }
 console.log(person)
 person.name = '张学友'
 person.age = 32
 console.log(person)
 const numbers = [1,2,3,4,5]
 console.log(numbers)
 numbers.push(7)
 numbers[5] = 6
 console.log(numbers)