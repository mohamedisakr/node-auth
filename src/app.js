const express = require('express')
const session = require('express-session')
const {SESSION_OPTIONS} = require('./config')
const {register} = require('./routes')

const createApp = (store) => {
  const app = express()
  app.use(express.json())

  app.use(session({...SESSION_OPTIONS, store}))

  app.use(register)

  return app
}

module.exports = createApp
