module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})