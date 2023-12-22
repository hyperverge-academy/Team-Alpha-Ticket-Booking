const usersService = require('../services/users.services')

const bookingData = async function(req,res){
    const {busId,passangerName,gender,departureDateAndTime,arrivalDateAndTime,from,to,seatNumber,price} = req.body
    const ticketData = req.body
    const response = await usersService.validate(ticketData)
    res.send(response)
}

const registrationData = async function(req,res){
    const {fullName, mobileNumber, password} = req.body
    const userDetails = req.body
    const userData = await usersService.registrationValidation(userDetails)
    res.send(userData)
}
module.exports = {bookingData, registrationData}