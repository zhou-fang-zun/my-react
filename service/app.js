const express = require('express')
const app = express()

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))   //解析表单数据
app.use(bodyparser.json())   //解析json数据

const db = require('./db/connect') //连接数据库
const router = require('./router')

app.all('*',(req,res,next)=>{
	const { origin, Origin, referer, Referer} = req.headers;
	const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header("Access-Control-Allow-Origin", allowOrigin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("Content-Type", "application/json;charset=utf-8");
	res.header("X-Powered-By", 'Express');
	if(req.url === '/favicon.ico'){
		return
	}
	if(req.method === 'OPTIONS'){
		res.send(200)
	}else{
		next()
	}
})

router(app)

app.use('/public',express.static('public'))

app.listen(8009,()=>{
	console.log('服务器启动')
})