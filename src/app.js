const express = require('express')
const session = require('express-session')
const cors = require('cors')
const morgan = require('morgan')
const {SESSION_OPTIONS} = require('./config')
const {serverError, notFound, active, catchAsync} = require('./middleware')
const {register, login, home} = require('./routes')

const createApp = (store) => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.use(morgan('combined'))

  app.use(session({...SESSION_OPTIONS, store}))

  app.use(catchAsync(active))
  app.use(home)
  app.use(register)
  app.use(login)

  app.use(notFound)

  app.use(serverError)
  return app
}

module.exports = createApp
