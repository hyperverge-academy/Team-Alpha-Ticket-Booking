const busesService=require('../services/bus.services')

const busDetails=async function (req,res){
    const insertingDetails=req.body
    const addBusData=await busesService.validation(insertingDetails)
    // res.status(returnData.statusCode).json(returnData)
    res.send(addBusData)
}

module.exports={busDetails}