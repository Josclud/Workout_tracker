module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})