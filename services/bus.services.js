const busesModels=require('../Models/bus.model')

const validation=function(bodyData){
    if (!bodyData.busName || !bodyData.intermediateDestinations || !bodyData.finalRoute || !bodyData.days || !bodyData.totalSeats){
    
        const validationError={
            "message":"please fill all Bus details",
            "status": "false",
            "statusCode": 400
        }
        return validationError
    }
    return busesModels.insertBusDetails(bodyData)
}

module.exports = {validation}