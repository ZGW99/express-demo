const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const session = require('express-session');
const { expressjwt: expressJWT } = require('express-jwt');

// const parser = require('body-parser');

// 引入转译中间件
// app.use(parser);
app.use(express.urlencoded({ extended: false }));

// token字符串解析中间件
const secretKey = 'asdkljfas haha';
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'], credentialsRequired: false }).unless({ path: [/^\/api\//] }))

// token错误捕获处理中间件
app.use((err,req,res,next)=>{
  if(err.name === 'UnauthorizedError'){
    return res.send({
      status: 401,
      msg: '无效token'
    });
  }
  res.send({
    status: 500,
    msg: '其他错误'
  })
  next()
})

// 再路由之前引入session中间件
// app.use(session({
//   secret: 'zhou',
//   resave: false,
//   saveUninitialized: true
// }));

app.use(cors());
app.use(router);

// 创建服务器监听
app.listen(3007,(req,res)=>{
  console.log('服务器正在监听 http://127.0.0.1:3007');
});