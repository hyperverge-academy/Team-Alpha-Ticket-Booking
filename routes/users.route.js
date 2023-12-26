const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

router.post('/users/:user_id/bookings',usersController.bookingData)
router.post('/users/registration',usersController.registrationData)

module.exports = router