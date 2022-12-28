const jwt = require('jsonwebtoken');
const secretKey = 'asdkljfas haha';

exports.login = (req, res) => {
  // 获取查询数据
  const body = req.body;
  // 判断用户登录是否正确
  if (body.username !== 'zhouguowei' || body.password !== '123456789') {
    res.send({
      data: null,
      success: false,
      status: 500,
      msg: '登录失败！'
    })
    return console.log('用户名或密码错误');
  }

  // 登陆成功将用户信息保存到session中
  // console.log(req);
  // req.session.userInfo = body;
  // req.session.isLogin = true;
  // const token = jwt.sign({ username: body.username }, secretKey, { expiresIn: '1s' });

  res.send({
    data: null,
    success: true,
    status: 200,
    msg: '登录成功！',
  });
}

exports.logout = (req, res) => {
  res.send({
    data: null,
    success: true,
    status: 200,
    msg: '登录成功！',
  });
}

// token解码
exports.tokenresovle = (req, res) => {
  console.log(req.auth);

  res.send({
    status: 200,
    msg: '获取用户信息成功',
    data: req.auth
  })
}