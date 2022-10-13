const express = require('express')
const app = express()
// 导入 Node.js 内置的 querystring 模块
const qs = require('querystring')

app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1.定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    // 2.监听 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk
    })
    // 3.监听 req 的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的请求体数据
        // console.log(str)
        // TODO：把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        // console.log(body);
        // 将解析出来的请求体对象，挂载为 req.body 属性，供下游的中间件或路由使用
        req.body = body
        // 最后一定要调用 next() 函数，执行后续的业务逻辑
        next()
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, (req, res) => {
    console.log('http://127.0.0.1')
})