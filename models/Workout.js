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
        required: 'Enter workout name'
      },
      type: {
        type: String,
        trim: true,
        required: 'Enter a type'
      },
      weight: {
        type: Number,
        required: 'Enter a weight'
      },
      sets: {
        type: Number,
        required: 'Enter how many sets'
      },
      reps: {
        type: Number,
        required: 'Enter how many reps'
      },
      duration: {
        type: Number,
        required: 'Enter workout duration'
      }
    }
  ]
}, { timestamps: true })

module.exports = model('Workout', Workout)