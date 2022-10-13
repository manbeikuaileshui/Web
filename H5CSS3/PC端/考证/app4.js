let val
// String 
// Number -> String
// val = String(25)

// Boolean -> String
// val = String(true)

// Date -> String 
// val = String(new Date())

// Array -> String 
// val = String([1,2,3,4])


// to String 
// val = (25).toString()
// val = (false).toString()

// console.log(val)
// console.log(typeof val)
// console.log(val.length)


// String -> Number 
// val = Number('25')

// Boolean -> Number 
// val = Number(true)

// Null -> Number 
// val = Number(null)

// val = Number('Hello')

// val = Number([1,2,3])

// val = parseInt('100.30') // 把字符串转换成整型数字

// val = parseFloat('100.304') // 把字符串转换成浮点型数字

// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed(2)) // 保留几位小数

const val1 = '5'
const val2 = 6
const sum = val1 + val2 //  +号：把6转换成字符串再跟字符串5拼接
const jian = val1 - val2 // -号：把5转换成数字再跟数字6相减
console.log(sum)
console.log(jian)
console.log(typeof sum)
console.log(typeof jian)