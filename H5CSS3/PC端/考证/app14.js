// for循环
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log("2是我最喜欢的数字")
        continue
    }
    if (i === 5) {
        console.log("停止循环")
        break
    }
    console.log("数字" + i)
}
console.log('---------------------------')

// while循环
let i = 0
while (i < 10) {
    console.log("数字" + i)
    i++
}
console.log("-----------------------------")

// do while循环
i = 0
do {
    console.log("数字" + i)
    i++
} while(i < 10)