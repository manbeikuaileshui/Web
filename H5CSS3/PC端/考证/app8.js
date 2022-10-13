// 数组的元素可以不限制数据类型
const numbers = [43,45,34,33,23,56,57]
const numbers2 = [34,45,67,89,90,23]
const fruit = ["苹果", "香蕉", "橙子", "李子"]
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()]

let val
// 获得数组的长度
val = numbers.length
// 检查是否为数组
val = Array.isArray(numbers)
// 从数组获得某一成员的值
val = numbers[3]
// 赋值
numbers[2] = 100
// 获得某一成员的索引
val = numbers.indexOf(33)
// 更改数组成员  
// 从数组的最后插入值
numbers.push(240)
// 从数组的最前插入值
numbers.unshift(120)
// 从数组的最后删除值
numbers.pop()
// 从数组的最前删除值
numbers.shift()

// splice()
numbers.splice(1,2) // 从索引1的位置开始删除2个成员
numbers.splice(1,2,20) // 从索引1的位置开始删除2个成员，并在此位置插入20

// 反转
numbers.reverse()

// 合并数组
val = numbers.concat(numbers2)

// 排序
val = numbers.sort()
val = fruit.sort()

// 使用比较函数
val = numbers.sort(function(x,y) {
    return x - y
})

// 检索
function under50(num) {  // 查找第一个小于50的元素
    return num < 50
}
val = numbers.find(under50)


console.log(numbers)
console.log(val)