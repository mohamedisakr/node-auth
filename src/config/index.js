const {IN_PROD, APP_PORT} = require('./app')
const {REDIS_OPTIONS} = require('./cache')
const {SESSION_OPTIONS} = require('./session')
const {MONGODB_URI, MONGODB_OPTIONS} = require('./db')

module.exports = {
  IN_PROD,
  APP_PORT,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  MONGODB_URI,
  MONGODB_OPTIONS,
}
