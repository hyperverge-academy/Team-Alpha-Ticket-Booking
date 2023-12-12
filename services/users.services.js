const userModel = require('../Models/users.model')

const validate = function (doc){
  if(!doc.busId || !doc.passangerName || !doc.gender || !doc.departureDateAndTime || !doc.arrivalDateAndTime || !doc.from || !doc.to || !doc.seatNumber || !doc.price){
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
  if(new Date(doc.departureDateAndTime) < new Date() ){
    const validation ={
      "status": "false",
      "message": "please choose appropriate Date.",
      "statusCode": 400
    }
    return validation
  }

  if(doc.price > 10000){
    const validation ={
      "status": "false",
      "message": "please provide price under 10000.",
      "statusCode": 400
    }
    return validation
  }
  
  // TODO: Implement busId validation

  return userModel.booking(doc)
}

module.exports = {validate}