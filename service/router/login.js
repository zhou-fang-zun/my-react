const express = require('express')
const router = express.Router()
const svgCaptcha = require('svg-captcha');
const User = require('../db/model/userModel')

var code = null;

router.post('/login',(req,res)=>{
	const { account, password, code } = req.body
	if(!account || !password) return res.send({ code:-1, success:false, msg:'参数错误' })
	if(code !== code){
		res.send({ code:-1, success:false, msg:'验证码错误'})
		return
	}
	User.find({ account, password }).then(data =>{
		if(data.length > 0){
			res.send({ code:0, success:true, msg:'登录成功' })
		}else{
			res.send({ code:-1, success:false, msg:'用户名密码不正确' })
		}
	}).catch(err =>{
			return res.send({ code:-1, success:false, msg:'内部错误'})
		})
})

router.post('/register',(req,res)=>{
	const { account, password } = req.body
	if(!account || !password) return res.send({ code:-1, success:false, msg:'参数错误'})
	User.find({ account }).then(data =>{
		if(data.length > 0){
			res.send({ code:-1, success:false, msg:'用户已存在' })
		}else{
			return User.insertMany({ account, password })
		}
	}).then(()=>{
		res.send({ code:0, success:true, msg:'注册成功'})
	}).catch(()=>{
		res.send({ code:-1, success:false, msg:'注册失败'})
	})
})

router.post('/code',(req,res)=>{
	var captcha = svgCaptcha.create();
	//req.session.captcha = captcha.text;
	code = captcha.text
	res.type('svg');
	res.send({ code:0, success:true, msg:'获取成功', data: captcha.data })
})

module.exports = router