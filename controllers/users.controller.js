const usersService = require('../services/users.services')

const bookingData = async function(req,res){
    const {busId,passangerName,gender,departureDateAndTime,arrivalDateAndTime,from,to,seatNumber,price} = req.body
    const ticketData = req.body
    const response = await usersService.validate(ticketData)
    res.send(response)
}

const registrationData = async function(req,res){
    const userDetails = req.body
    console.log(userDetails)
    const userData = await usersService.registrationValidation(userDetails)
    res.send(userData)
}

const loginData = async function(req, res){
    const checkDetails = req.body
    const loginOutput = await usersService.loginValidation(checkDetails)
    res.send(loginOutput)
}

module.exports = {bookingData, registrationData, loginData}