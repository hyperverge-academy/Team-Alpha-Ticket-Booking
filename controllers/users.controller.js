const usersService = require('../services/users.services')

const bookingData = async function(req,res){
    const {busId,passangerName,gender,departureDateAndTime,arrivalDateAndTime,from,to,seatNumber,price} = req.body
    const ticketData = req.body
    const response = await usersService.validate(ticketData)
    res.send(response)
}
module.exports = {bookingData}