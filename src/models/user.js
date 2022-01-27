const {Schema, model} = require('mongoose')

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {timestamps: true},
)

const User = model('user', userSchema)
module.exports = User
