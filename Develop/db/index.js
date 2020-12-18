module.exports = require('mongoose').connect('mongodb://localhost/plans_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
