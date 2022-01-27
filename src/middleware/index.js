const {guest, auth} = require('./auth')
const {catchAsync, serverError, notFound} = require('./errors')

module.exports = {guest, auth, catchAsync, serverError, notFound}
