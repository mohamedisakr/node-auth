const express = require('express')
const session = require('express-session')
const {SESSION_OPTIONS} = require('./config')
const {serverError, notFound} = require('./middleware')
const {register, login} = require('./routes')

const createApp = (store) => {
  const app = express()
  app.use(express.json())

  app.use(session({...SESSION_OPTIONS, store}))

  app.use(register)
  app.use(login)

  app.use(notFound)

  app.use(serverError)
  return app
}

module.exports = createApp
