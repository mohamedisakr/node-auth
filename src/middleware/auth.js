const {isLoggedIn} = require('../auth')

const guest = (req, res, next) => {
  if (isLoggedIn(req)) {
    return next(new Error('Your are already logged in'))
  }
  next()
}

module.exports = {guest}
