const express = require('express')
const router = express.Router()
const Department = require('../db/model/departmentModel.js')
const initData = require('../initdata/department.js')

router.post('/add',(req,res) => {
	const { name, number, status, note } = req.body
	if( !name||!number||status ){
		res.send({ code:-1, success:false, message:'缺少参数' })
		return
	}
	Department.insertMany({ name, number, status, note }).then(() => {
		res.send({ code:0, success:true, message:'添加成功' })
	})
})

router.get('/list',(req,res)=>{
	const { pageNumber, pageSize } = req.params
	Department.find().then(data => {
		res.send({ code:0, success:true, data:initData })
	})
})

module.exports = router