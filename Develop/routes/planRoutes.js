const router = require('express').Router()
const { Plan } = require('../models')

router.post('/plans', (req, res) => {
  Plan.create({})
    .then(plan => res.json(plan))
    .catch(err => console.log(err))
})

router.put('/plans/:id', (req, res) => {
  Plan.findByIdAndUpdate(
    req.params.id,
    { $push: { tasks: req.body } },
    { new: true, runValidators: true }
    )
    .then(plan => res.json(plan))
    .catch(err => console.log(err))
})

router.get('/plans', (req, res) => {
  Plan.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$tasks.duration'
        }
      }
    }
  ])
    .then(plans => res.json(plans))
    .catch(err => console.log(err))
})

router.get('/plans/range', (req, res) => {
  Plan.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$tasks.duration'
        }
      }
    }
  ])
  .sort({ _id: -1 })
  .limit(7)
  .then(plans => res.json(plans))
  .catch(err => console.log(err))
})

router.delete('/plans', (req, res) => {
  Plan.findByIdAndDelete(req.body.id)
    .then(() => res.json(true))
    .catch(err => console.log(err))
})

module.exports = router
