const usersService = require('../services/users.services')

const bookingData = async function(req,res){
    const {busId,passangerName,gender,travellingDateAndTime,from,to,seatNumber} = req.body
    const ticketData = req.body
    const response = await usersService.validate(ticketData)
    res.send(response)
}
module.exports = {bookingData}