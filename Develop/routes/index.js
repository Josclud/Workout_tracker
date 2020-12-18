const router = require('express').Router()

router.use('/api', require('./planRoutes.js'))

module.exports = router
