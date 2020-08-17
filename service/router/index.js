const login = require('./login')
const excel = require('./excel.js')
const department = require('./department.js')

module.exports = (app) => {
	app.use('/admin',login),
	app.use('/excel',excel),
	app.use('/department',department)
}