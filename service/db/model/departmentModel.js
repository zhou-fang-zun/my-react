const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
	name: { type:String, required:true },
	number: { type:Number, required:true},
	status: { type:Boolean, required:true },
	note: { type:String}
})

const Department = mongoose.model('department',departmentSchema)

module.exports = Department