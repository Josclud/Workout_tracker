const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Enter type of workout'
      },
      duration: {
        type: Number,
        required: 'Enter a workout duration in minutes'
      },
      weight: {
        type: Number,
        required: 'Enter value of weights'
      },
      reps: {
        type: Number,
        required: 'Enter the amount of reps'
      },
      sets: {
        type: Number,
        required: 'Enter the amount of sets'
      }
    }
  ]
})

module.exports = model('Workout', Workout)