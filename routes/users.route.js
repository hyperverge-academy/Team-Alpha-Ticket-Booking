const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')


router.post('/users/:user_id/bookings',usersController.bookingData),


module.exports = router