const usersService = require('../services/users.services')


const bookingData = async function(req,res){
    const {busId,passangerName,gender,bookingDateAndTime,from,to,seatNumber} = req.body
    const ticketData = req.body
    const response = await usersService.validationError(ticketData)
    res.send(response)
}
module.exports = {bookingData}