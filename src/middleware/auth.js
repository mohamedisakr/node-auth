const {isLoggedIn} = require('../auth')
const {BadRequest, Unauthorized} = require('../errors')

const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest('Your are already logged in'))
  }
  next()
}

const auth = (req, res, next) => {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized('Your must be logged in'))
  }
  next()
}

module.exports = {guest, auth}
