const name = "陈奕迅"
const age = 31
const job = "Web开发者"
const city = "广州"

// 不使用字符串模板(es5之前)
// html = '<ul>' +
//        '<li>姓名:' +name + '</li>' +
//        '<li>年龄:' + age + '</li>' +
//        '<li>职业:' + job + '</li>' + 
//        '<li>城市:' + city + '</li>' +
//        '</ul>'
// document.body.innerHTML = html

// 使用字符串模板(es6之后)
function hello() {
    return 'hello'
}
html = `
        <ul>
            <li>姓名: ${name}</li>
            <li>年龄: ${age}</li>
            <li>职业: ${job}</li>
            <li>城市: ${city}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? '大于30' : '小于30'}</li>
        </ul>
    `  
document.body.innerHTML = html