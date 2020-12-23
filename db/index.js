module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})