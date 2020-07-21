//连接数据库

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/react',{useMongoClient:true})

mongoose.connection.once("open",function(){
	console.log('数据库连接成功')
})

//断开数据库连接
//mongoose.disconnect();