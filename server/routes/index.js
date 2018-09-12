var express = require('express');
var router = express.Router();

const users = [
    {
        username: 'yao',
        password: '123456'
    }
]
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(username,password)
    let loginSuccess = false
    users.forEach(item => {
        if (item.username === username && item.password === password)
            loginSuccess = true
    })
    if (loginSuccess) {
        res.json({
            code: 200,
            msg: '登陆成功'
        })
    }else{
        res.json({
            code:400,
            msg:'登录失败'
        })
    }
})
module.exports = router;
