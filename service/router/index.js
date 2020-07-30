const login = require('./login')
const excel = require('./excel.js')

module.exports = (app) => {
	app.use('/admin',login),
	app.use('/excel',excel)
}