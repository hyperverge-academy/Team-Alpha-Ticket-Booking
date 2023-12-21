const busesModels=require('../Models/bus.model')
const responseConst = require('../constants/response.constants')

const validation=function(bodyData){
    if (!bodyData.busName || !bodyData.intermediateDestinations || !bodyData.finalRoute || !bodyData.days || !bodyData.totalSeats){
        return responseConst.missingFieldValidationError 
    }
    if (bodyData.totalSeats < 0 && bodyData.totalSeats <=40){
        return responseConst.seatRangeValidationError
    }
    if (bodyData.days.length == 0 || !Array.isArray(bodyData.days) ){
        return responseConst.seatValueTypeValidationError
    }
         
    if (!bodyData.days=="Monday" || !bodyData.days == "Tuesday" || !bodyData.days == "Wednesday" || !bodyData.days == "Thursday" || !bodyData.days == "Friday" || !bodyData.days == "Saturday" || !bodyData.days == "Sunday" ){
        return responseConst.daysValueValidationError
    } 
    
    return busesModels.insertBusDetails(bodyData)
}

module.exports = {validation}