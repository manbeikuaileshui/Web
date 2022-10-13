const firstName = 'Ben'
const lastName = 'Li'
let val
const age = 40
const str = 'Hello there my name is hings'
const tags = 'web开发，前端开发，后端开发'

// 合并字符串
val = firstName + ' ' + lastName

// Apend
val = 'Hing'
val += 'Li'
val = '你好，我的名字是' + firstName + '，我今年' + age

// 长度
val = firstName.length

// concat(合并)
val = firstName.concat(' ', lastName)

// 改变大小写
val = firstName.toUpperCase() // 全部转为大写
val = firstName.toLowerCase() // 全部转为小写

// 获取字符串的值
val = firstName[0]

// 获得字符的索引
val = firstName.indexOf('e')

// charAt() 提供位置获取字符串对应的值
val = firstName.charAt('2')

// 获得最后一个字符
val = firstName.charAt(firstName.length - 1)

// substring() 在给定范围内获取子字符串
val = firstName.substring(0,2) // 左闭右开

// slice() 
val = firstName.slice(-2) // 从右边数两个字符作为子字符串

// split() 字符串分割
val = str.split(' ') // 以空格分割，分割后存储到数组中
val = tags.split('，') // 以逗号分割，分割后存储到数组中

// replace() 替换字符串内容
val = str.replace('hings', 'Jack')

// includes() 匹配字符串
val = str.includes('Hello')

console.log(val)