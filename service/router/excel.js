const express = require('express')
const router = express.Router()
const multer = require('multer')
const xlsx = require('xlsx')
const fs = require('fs')
const node_xlsx = require('node-xlsx')
const nodeExcel = require("excel-export") //首先，引入excel模块;
//const moment = require('moment') //时间格式化
const User = require('../db/model/userModel')

const upload = multer()
router.post('/upload_excel',upload.fields([{name:'inputFile',maxCount: 1}]),(req,res)=>{
	// const file = req.files;
	// const content = file['inputFile'][0].buffer.toString()
	if (!req.files || req.files.length === 0) {
		return res.send({ text: '请选择文件上传' })
	}
	const { originalname, buffer } = req.files['inputFile'][0]
	if (!originalname.endsWith('xls') && !originalname.endsWith('xlsx')) {
		return res.send({ text: '请上传xls或xlsx格式的文件' })
	}
	// 解析excel文件
	const workbook = xlsx.read(buffer, { type: "buffer" })
	const sheet = workbook.Sheets[workbook.SheetNames[0]] // 选择第一个工作簿
	const result = xlsx.utils.sheet_to_json(sheet)
	
	res.send({ code:0, success:true, data:result })
})

router.post('/download',(req,res)=>{
	// res.attachment('文件.xlsx')
	// res.set('Content-Type','text/xml')
	// res.body = fs.readFileSync('./文件.xlsx');
	res.send({ code:0, success:true, message:'请求成功!'})
})

/* 
<form action="http://localhost:7878/upload/upload_excel" method="post" enctype="multipart/form-data">
	<input type="file" name="inputFile" />
	<input type="submit">
</form> 
*/
// router.post('/tolead/excel',upload.single('file'),(req,res,next)=>{
// 	var fileName = req.file.filename;
// 	let splitFileName = fileName.split('.');
// 	let ExcelType = splitFileName[splitFileName.length-1];
// 	let types = ['xlsx','xls','xlsm','xltx','xltm','xlsb','xlam'];
// 	if(!ExcelType.includes(types)){
// 		res.status(200).json({
// 			code: -1,
// 			success: false,
// 			message: '文件类型错误,请上传Excel文件!',
// 			data:{}
// 		})
// 		return
// 	}
	
// 	//定义实体类数组
// 	let TableName = 'Test';
// 	let cityArray = ['']
// })


router.get('/download/excel',(req,res)=>{
	var conf = {}; //创建一个写入格式map，其中cols(表头)，rows(每一行的数据);
	//var cols = ['城市编码', '所属省份', '所属市', '城市名称', '城市英文名称']; //手动创建表头中的内容
	var cols = ['序号', '账户', '密码'];
	conf.cols = []; //在conf中添加cols
	for(let i = 0; i < cols.length; i++){
		var tits = {}; //创建表头数据所对应的类型,其中包括 caption内容 type类型
		tits.caption = cols[i]; //添加内容
		tits.type = 'string'; //添加对应类型，这类型对应数据库中的类型，入number，但data一般导出的都是转换为string类型的
		conf.cols.push(tits); //将每一个表头加入cols中
	}
	let fields = {
		// id: '',
		// provinceZn: '',
		// leaderZh: '',
		// cityZh: '',
		// cityEn: ''
		// account: '',
		// password: ''
	}
	User.find(fields).then(data => {
		if(!data){
			res.send({ code:-1, success:false, message:'数据库没有数据' })
		}else{
			//var tows = ['id', 'provinceZh', 'leaderZh', 'cityZh', 'cityEn'];//创建一个和表头对应且名称与数据库字段对应数据，便于循环取出数据
			var tows = ['_id', 'account', 'password'];
			var datas = [];//用于承载数据库中的数据
			let towsLen = tows.length;
			let dataLen = data.length;
			for(let i = 0; i < dataLen; i++){ ////循环数据库得到的数据，因为取出的数据格式为
				//[{"id" : "101010100","provinceZh" : "北京","leaderZh" : "北京","cityZh" : "北京","cityEn" : "beijing"},{…………},{…………}]
				let row = []; //用来装载每次得到的数据
				for(let j = 0; j < towsLen; j++){ //内循环取出每个
					row.push(data[i][tows[j]].toString());//row.push((data[i].tows[j]).toString());两种形式都是相同的
				}
				datas.push(row);//将每一个{ }中的数据添加到承载中
			}
			conf.rows = datas;//将所有行加入rows中
			var result = nodeExcel.execute(conf);//将所有数据写入nodeExcel中
			res.setHeader('Content-Type', 'application/vnd.openxmlformats');//设置响应头
			//设置下载文件命名 支持的excel文件类有.xlsx .xls .xlsm .xltx .xltm .xlsb .xlam等
			//res.setHeader("Content-Disposition", "attachment; filename=city"+moment(new Date().getTime()).format('YYYYMMDDhhmmss')+".xlsx");
			res.setHeader("Content-Disposition", "attachment; filename=account.xlsx");
			res.end(result, 'binary');//将文件内容传入
		}
	})
})

module.exports = router