const router = require('express').Router()
const { Workout } = require('../models')

router.post('/workout', (req, res) => {
  Workout.create({})
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.put('/workout/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { tasks: req.body } },
    { new: true, runValidators: true }
    )
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.get('/workout', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

router.get('/workout/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
  .sort({ _id: -1 })
  .limit(7)
    .then(workouts => res.json(workouts))
  .catch(err => console.log(err))
})

router.delete('/workout', (req, res) => {
  Workout.findByIdAndDelete(req.body.id)
    .then(() => res.json(true))
    .catch(err => console.log(err))
})

module.exports = router
