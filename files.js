const fs = require('fs');

// 读取指定文件内容
fs.readFile('./1.txt', 'utf-8',function(err,data){
  console.log(err);
  console.log(data);
});

// 向指定文件写入对应内容
// 文件写入成功打印的err会返回null；文件写入成功打印的err会返回一个错误对象
fs.writeFile('./1.txt', '这是新写入的',function(err){
  console.log(err);
});