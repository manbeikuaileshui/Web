// 导入 express 模块
const express = require('express')
// 调用 Router() 函数
const router = express.Router()

// 在这里挂载对应的路由
// 定义GET接口
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用res.send() 方法，向客户端响应处理的结果
    res.send({
        status: 0,  // 0表示处理成功，1表示处理失败
        meg: 'GET 请求成功！',  // 状态的描述
        data: query // 需要响应给客户端的数据
    })
})
// 定义POST接口
router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body
    // 调用 res.send() 方法，向客户端响应结果
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    })
})

// 定义 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功'
    })
})

// 暴露router，供外界使用
module.exports = router