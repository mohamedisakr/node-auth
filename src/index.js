const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const connectRedis = require('connect-redis')
const Redis = require('ioredis')
const {
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  APP_PORT,
  MONGODB_URI,
  MONGODB_OPTIONS,
} = require('./config')

;(async () => {
  await mongoose.connect(MONGODB_URI, MONGODB_OPTIONS)
  const RedisStore = connectRedis(session)
  const client = new Redis(REDIS_OPTIONS)

  const app = express()

  app.use(session({...SESSION_OPTIONS, store: new RedisStore({client})}))

  app.get('/', (req, res) => {
    res.status(200).json({message: 'done'})
  })

  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
})()
