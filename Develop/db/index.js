module.exports = require('mongoose').connect('mongodb://localhost/Workouts_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
