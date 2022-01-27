const {Router} = require('express')
const {registerSchema} = require('../validation/auth')
const {User} = require('../models')
const {login} = require('../auth')
const {guest} = require('../middleware')
const router = Router()

router.post('/register', guest, async (req, res) => {
  await registerSchema.validateAsync(req.body, {abortEarly: false})
  const {email, name, password} = req.body

  const found = await User.exists({email})
  if (found) {
    throw new Error('Invalid Email')
  }

  const user = await User.create({email, name, password})
  login(req, user.id)
  return res.json({message: 'ok'})
})

module.exports = {router}
