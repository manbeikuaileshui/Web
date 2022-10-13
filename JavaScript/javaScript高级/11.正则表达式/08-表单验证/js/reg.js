window.onload = function () {
    // 正则表达式
    var regtel = /^1[3|4|5|7|8]\d{9}$/  // 手机号码的正则表达式
    var regqq = /^[1-9]\d{4,}$/  // QQ号，从10000开始
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/  // 昵称，2-8位中文
    var regmsg = /^\d{6}$/  // 短信验证码，6位
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/  // 密码 6-16位

    // 获取元素
    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var surepwd = document.querySelector('#surepwd')

    regexp(tel, regtel)  // 验证手机号码
    regexp(qq, regqq)  // 验证QQ号码
    regexp(nc, regnc)  // 验证昵称
    regexp(msg, regmsg)  // 短信验证
    regexp(pwd, regpwd)  // 短信验证

    // 表单验证失去焦点事件函数
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
                this.nextElementSibling.className = 'success'
            } else {
                // console.log('不正确');
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入'
                this.nextElementSibling.className = 'error'
            }
        }
    }

    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
            this.nextElementSibling.className = 'success'
        } else {
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码输入不一致'
            this.nextElementSibling.className = 'error'
        }
    }
}