const userModel = require('../Models/users.model')

const validate = function (doc){
  if(!doc.busId || !doc.passangerName || !doc.gender || !doc.travellingDateAndTime || !doc.from || !doc.to || !doc.seatNumber){
    const validation ={
      "status": "false",
      "message": "please fill all required information.",
      "statusCode": 400
    }
    return validation
  }
  if(doc.seatNumber <=0){
    const validation ={
      "status": "false",
      "message": "please book one seat.",
      "statusCode": 400
    }
    return validation
  }
  if(!doc.gender== "F" || !doc.gender== "M" || !doc.gender== "Female" || !doc.gender== "Male"){
    const validation ={
      "status": "false",
      "message": "please choose one of them (M or F or Female or Male).",
      "statusCode": 400
    }
    return validation
  }
  if(new Date(doc.travellingDateAndTime) < new Date() ){
    const validation ={
      "status": "false",
      "message": "please choose appropriate Date.",
      "statusCode": 400
    }
    return validation
  }
  
  // TODO: Implement busId validation

  return userModel.booking(doc)
}

module.exports = {validate}