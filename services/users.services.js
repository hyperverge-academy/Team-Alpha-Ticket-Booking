const userModel = require('../Models/users.model')

const validationError = function (doc){
  if(!doc.busId || !doc.passangerName || !doc.gender || !doc.bookingDateAndTime || !doc.from || !doc.to || !doc.seatNumber){
    const validation ={
      "status": "false",
      "message": "please fill all required information.",
      "statusCode": 400
    }
    return validation
  }
  if(doc.seatNumber.count>1){
    const validation ={
      "status": "false",
      "message": "please book only one seat.",
      "statusCode": 400
    }
    return validation
  }
    return userModel.booking(doc)
}
module.exports = {validationError}