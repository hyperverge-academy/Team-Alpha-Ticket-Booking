const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')
const tokenModel = require('../Models/token.model')



router.post('/users/:userId/bookings', tokenModel.verifyToken, usersController.bookingData)
router.post('/users/registration',usersController.registrationData)
router.post('/users/login', usersController.loginData)

module.exports = router