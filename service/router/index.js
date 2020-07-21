const login = require('./login')

module.exports = (app) => {
	app.use('/admin',login)
}