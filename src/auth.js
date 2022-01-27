const login = (req, userId) => {
  req.session.userId = userId
}

const isLoggedIn = (req) => {
  !!req.session.userId
}

module.exports = {login, isLoggedIn}
