const userModel = require('../Models/users.model')
const responseConst = require('../constants/response.constants')

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


const registrationValidation = function (userInfo){
  if(!userInfo.fullName || !userInfo.mobileNumber || !userInfo.password){
    return responseConst.missingFieldValidationError
  }

  if(isNaN(userInfo.mobileNumber)){
    return responseConst.nanMobileValidation
  }

  if(userInfo.mobileNumber.length!=10){
    return responseConst.mobileNumberLenghtValidation
  }

  if(userInfo.password.length<6 || userInfo.password.length>20 ){
    return responseConst.passwordValidation 
  }

  return userModel.registration(userInfo)
}

const loginValidation = function (loginData){
  if(!loginData.mobileNumber || !loginData.password){
    return responseConst.missingFieldValidationError
  }
  if( loginData.mobileNumber.length !== 10 ){
    return responseConst.mobileNumberLenghtValidation
  }
  if(loginData.password.length<6 || loginData.password.length>20 ){
    return responseConst.passwordValidation 
  }

  return userModel.loginfun(loginData)
}

module.exports = {
  validate, 
  registrationValidation,
  loginValidation
}