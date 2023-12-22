const resconst = {
    missingFieldValidationError : {
        "message":"please fill all Bus details",
        "status": "false",
        "statusCode": 400
    },

    seatRangeValidationError : {
        "message":"please provide all seat numbers.",
        "status": "false",
        "statusCode": 400
    },

    seatValueTypeValidationError :{
        "message":"please provide week days in array.",
        "status": "false",
        "statusCode": 400
    },

    daysValueValidationError : {
        "message":"please fill week days in required format.",
        "status": "false",
        "statusCode": 400
    },

    successStatus:{
        "message": "successfully inserted",
        "status": "success",
        "statusCode":"200"
    },

    registrationMissingField: {
        "message":"please fill all required details",
        "status": "false",
        "statusCode": 400  
    },

    nanMobileValidation: {
        "message":"Only digitgs(numeric values) are allowed",
        "status": "false",
        "statusCode": 400 
    },

    mobileNumberLenghtValidation: {
        "message":"Mobile number must be 10 digits.",
        "status": "false",
        "statusCode": 400 
    },

    passwordValidation: {
        "message":"password lenght should greater than 5 and less than 20.",
        "status": "false",
        "statusCode": 400 
    },

    registrationSuccess: {
        "message": "You have registered seccessfully.",
        "status": "success",
        "statusCode":"200"
      }

}

module.exports = resconst