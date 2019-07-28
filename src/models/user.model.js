const { model } = require('mongoose')
const Bcrypt = require('bcrypt')

const User = model('User', {
  name: String,
  email: String,
  encryptedPassword: String,
})

User.create = async ({ name, email, password }) => {
  const user = new User({ name, email })
  user.encryptedPassword = await Bcrypt.hash(password, 10)
  return user.save()
}

User.authenticate = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (user && await Bcrypt.compare(passowrd, user.encryptedPassword)) {
    return user
  }
  return false
}

module.exports = User
