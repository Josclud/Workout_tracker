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
        required: 'Enter a exercise name'
      },
      duration: {
        type: Number,
        required: 'Enter a exercise duration'
      }
    }
  ]
})

module.exports = model('Workout', Workout)