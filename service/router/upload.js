const express = require('express')
const router = express.Router()
const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
	destination: function(req,file,cb){
		//指定文件保存的路径
		cb(null,'./public/image')
	},
	filename: function(req,file,cb){
		let exts = file.originalname.split('.');
		let ext = exts[exts.length-1]
		let tempname = moment.now() + '-' +parseInt(Math.random()*9999)
		console.log(file)
		console.log(file.fieldname)
		cb(null,`${file.fieldname}-${tempname}.${ext}`)
	}
})

const upload = multer({
	storage
})

router.post('/upload',upload.single('test'),(req,res)=>{
	let { size,mimetype,path } = req.file
	let types = ['jpg','jpeg','png','gif']  //允许上传的数据类型
	let tempType = mimetype.split('/')[1]
	if(size > 500000){
		return res.send({err:-1,msg:'尺寸过大'})
	}else if(!types.includes(tempType)){
		return res.send({err:-2,msg:'媒体类型错误'})
	}else{
		let url = `public/image/${req.file.filename}`
		res.send({err:0,msg:'上传成功',url:url})
	}
})

module.exports = router