const mysql = require('mysql');

// 连接数据库，
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'nodedb'
});

// 执行sql语句
// db.query('select * from member_table',(err,res)=>{
//   if(err){
//     console.log(err);
//     return
//   }   
//   console.log(res);
// });

// 执行插入sql语句
// const data = { number: 9, gender: '男', name: '欧阳',createTime: '2022-8-20' };
// const str = 'insert into member_table (id,number,gender,name,createTime) values (?,?,?,?,?)'
// db.query(str,[data.id,data.number,data.gender,data.name,data.createTime],(err,res)=>{
//   if(err){
//     console.log(err.message);
//     return
//   }
//   if(res.affectedRows){
//     console.log('数据插入成功');
//   }
// });

// 更新代码
const data = {id: 3, number: 9, gender: '男', name: '欧阳',createTime: '2022-8-20' };
const str = 'update member_table set ? where id=?'
db.query(str,[data,data.id],(err,res)=>{
  if(err){
    console.log(err.message);
    return
  }
  if(res.affectedRows){
    console.log('数据插入成功');
  }
})