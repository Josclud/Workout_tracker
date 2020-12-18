const { Plan } = require('../models')

const planSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    tasks: [
      {
        name: 'Take out trash',
        duration: 5
      },
      {
        name: 'Do laundry',
        duration: 10
      }
    ]
  },
  {
    day: new Date(),
    tasks: [
      {
        name: 'Cook dinner',
        duration: 60
      },
      {
        name: 'Walk the dog',
        duration: 30
      }
    ]
  }
]

require('mongoose').connect('mongodb://localhost/plans_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    
    Plan.deleteMany({})
      .then(() => Plan.insertMany(planSeed))
      .then(() => {
        console.log('records inserted!')
        process.exit()
      })
      .catch(err => console.log(err))

  })
  .catch(err => console.log(err))
