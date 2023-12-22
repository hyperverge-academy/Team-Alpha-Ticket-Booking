const busesModels=require('../Models/bus.model')
const responseConst = require('../constants/response.constants')
const serviceConst = require('../constants/service.constants')

const validatingBusCreation=function(bodyData){
    if (!bodyData.busName || !bodyData.intermediateDestinations || !bodyData.finalRoute || !bodyData.days || !bodyData.totalSeats){
        return responseConst.missingFieldValidationError 
    }
    if (bodyData.totalSeats < 0 && bodyData.totalSeats <=40){
        return responseConst.seatRangeValidationError
    }
    if (bodyData.days.length == 0 || !Array.isArray(bodyData.days) ){
        return responseConst.seatValueTypeValidationError
    }

    const days = serviceConst.serviceConst.weekDays
    for(i=0; i<bodyData.days.length; i++){
        if(!days.includes(bodyData.days[i])){
            return responseConst.daysValueValidationError
        }
    }
    
    return busesModels.insertBusDetails(bodyData)
}

module.exports = {validatingBusCreation}