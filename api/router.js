const express = require('express');
const router = express.Router();
// const { expressjwt: expressJWT } = require('express-jwt');
const routerHandler = require('./routerHandler')

// app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'], credentialsRequired: false }).unless({ path: [/^\/api\//] }))

// 登录session
router.post('/login', routerHandler.login);
// 退出登录清空session
router.post('/logout', routerHandler.logout);
// token解码
router.post('/logintoken/resovle', routerHandler.tokenresovle);

module.exports = router;