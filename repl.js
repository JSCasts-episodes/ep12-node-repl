require('dotenv').config()

const repl = require('repl')
const mongoose = require('mongoose')

const run = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  const r = repl.start('jscasts > ')

  r.context.User = require('./src/models/user.model')
}

run()
