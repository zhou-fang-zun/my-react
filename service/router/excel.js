const express = require('express')
const router = express.Router()
const xlsx = require('xlsx')

router.post('/excel',(req,res)=>{
	if (!req.files || req.files.length === 0) {
		return res.send({ text: '请选择文件上传' })
	}
	const { originalname, buffer } = req.files[0]
	if (!originalname.endsWith('xls') && !originalname.endsWith('xlsx')) {
		return res.send({ text: '请上传xls或xlsx格式的文件' })
	}
	// 解析excel文件
	const workbook = xlsx.read(buffer, { type: "buffer" })
	const sheet = workbook.Sheets[workbook.SheetNames[0]] // 选择第一个工作簿
	const result = xlsx.utils.sheet_to_json(sheet)

	return res.send(result)
})

module.exports = router




// // 上传图片
// app.route("/upload_image")
//   .post(upload.any(), async (req, res) => {
//     const files = req.files || []

//     let success = 0 // 成功上传数量
//     const promises = files.map(async (file) => {
//       try {
//         const filePath = `${__dirname}/${file.originalname}`
//         // 判断文件是否存在, 若存在先删除原有文件，再写入新文件
//         const is_have = await fs.existsSync(filePath)
//         if (is_have) {
//           await fs.unlinkSync(filePath)
//         }
//         await fs.writeFileSync(filePath, file.buffer)
//         success ++ // 成功次数+1
//       } catch (err) {
//         console.error(err)
//       }
//     })
//     // 异步存储图片
//     await Promise.all(promises)

//     return res.json({ text: `已成功上传${success}个文件` })
//   })

// // 下载图片
// app.route("/download_image")
//   .post(async (req, res) => {
//     res.download(`${__dirname}/vampire.jpg`);
//   })

// // 上传excel
// app.route("/upload_excel")
//   .post(upload.any(), (req, res) => {
//     if (!req.files || req.files.length === 0) {
//       return res.json({ text: '请选择文件上传' })
//     }

//     const { originalname, buffer } = req.files[0]
//     if (!originalname.endsWith('xls') && !originalname.endsWith('xlsx')) {
//       return res.json({ text: '请上传xls或xlsx格式的文件' })
//     }
//     // 解析excel文件
//     const workbook = xlsx.read(buffer, { type: "buffer" })
//     const sheet = workbook.Sheets[workbook.SheetNames[0]] // 选择第一个工作簿
//     const result = xlsx.utils.sheet_to_json(sheet)

//     return res.json(result)
//   })