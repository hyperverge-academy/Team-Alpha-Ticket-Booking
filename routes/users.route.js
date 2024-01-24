const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')
// const tokenModel = require('../Models/token.model')
const tokenMiddleware = require('../middleware/tokenMiddleware')


router.post('/users/:userId/bookings', tokenMiddleware.verifyToken, usersController.bookingData)
router.post('/users/registration',usersController.registrationData)
router.post('/users/login', usersController.loginData)

module.exports = router