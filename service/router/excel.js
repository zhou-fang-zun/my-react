const express = require('express')
const router = express.Router()
const multer = require('multer')
const xlsx = require('xlsx')

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
	
	console.log(result)
	return res.send(result)
})

router.post('download',(req,res)=>{
	res.attachment('文件.xlsx')
	res.set('Content-Type','text/xml')
	res.body = fs.readFileSync('./文件.xlsx');
})

/* 
<form action="http://localhost:7878/upload/upload_excel" method="post" enctype="multipart/form-data">
	<input type="file" name="inputFile" />
	<input type="submit">
</form> 
*/

module.exports = router