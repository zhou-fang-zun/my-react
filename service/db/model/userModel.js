const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	account:{ type:String, required:true },
	password:{ type:Number, required:true }
})

//将schema对象转化为数据模型
//该数据对象和集合关联{'集合名',schema对象}
const User = mongoose.model('user',userSchema)

module.exports = User