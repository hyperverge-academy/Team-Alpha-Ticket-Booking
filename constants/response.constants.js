
const resconst = {
    missingFieldValidationError : {
        "message":"please fill all required details",
        "status": false,
        "statusCode": 400
    },

    seatRangeValidationError : {
        "message":"please provide all seat numbers.",
        "status": false,
        "statusCode": 400
    },

    seatValueTypeValidationError :{
        "message":"please provide week days in array.",
        "status": false,
        "statusCode": 400
    },

    daysValueValidationError : {
        "message":"please fill week days in required format.",
        "status": false,
        "statusCode": 400
    },

    successStatus:{
        "message": "successfully inserted",
        "status": "success",
        "statusCode":200
    },

    nanMobileValidation: {
        "message":"Only digitgs(numeric values) are allowed",
        "status": false,
        "statusCode": 400 
    },

    mobileNumberLenghtValidation: {
        "message":"Mobile number must be 10 digits.",
        "status": false,
        "statusCode": 400 
    },

    passwordValidation: {
        "message":"password lenght should greater than 5 and less than 20.",
        "status": false,
        "statusCode": 400 
    },

    registrationSuccess: {
        "message": "You have registered successfully.",
        "status": true,
        "statusCode":200
    },
    internalServerError: {
        "message": "Interval server error. We are looking into this.",
        "status": false,
        "statusCode":500
    },

    loginSuccess: {
        "message": "You have login successfully.",
        "status": "success",
        "statusCode":200
    },

    loginUserNotfound :{
        success : false,
        statusCode : 204 ,
        message : "user not found"
    },

    loginDataError :{
        success : false,
        statusCode : 401 ,
        message : "password and mobile number are invalid"
    },

    unauthorizedError: {
        success : false,
        statusCode : 401 ,
        message : "Unauthorized usre(Invalid credentials or missing authentication token)"
    },

    alreadyRegistered:{
        success : false,
        statusCode : 409 ,
        message : "You have already registered."
    },

    tokenExpiredError:{
        success : false,
        statusCode: 401,
        message: "The provided token has expired. Please obtain a new token."
    }

}

module.exports = resconst