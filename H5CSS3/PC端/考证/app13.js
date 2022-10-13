const color = "红色"

switch (color) {
    case "红色":
        console.log("颜色是红色")
        break
    case "蓝色":
        console.log("颜色是蓝色")
        break
    default:
        console.log("颜色不是红色或蓝色")
        break
}

let day
switch(new Date().getDay()) {
    case 0:
        day = "星期天"
        break
    case 1:
        day = "星期一"
        break
    case 2:
        day = "星期二"
        break
    case 3:
        day = "星期三"
        break
    case 4:
        day = "星期四"
        break
    case 5:
        day = "星期五"
        break
    case 6:
        day = "星期六"
        break
}
console.log(`今天是${day}`)