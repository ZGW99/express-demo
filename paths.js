// 导入path路径模块
const path = require('path');
const fs = require('fs');

// 拼接文件路径
const pathStr = path.join('/a','/b/c','../../','/d','/e') // \a\d\e

fs.readFile(path.join(__dirname, '/1.txt'),'utf-8',function(err,data){
  if(err){
    console.log('读取文件失败' + err.message);
    return err.message
  }
  console.log('读取文件成功');
})


// 获取文件名
const fname = '/a/b/c/index.html';
const fileName = path.basename(fname);
const fileNames = path.basename(fname, '.html');
console.log(fileNames);