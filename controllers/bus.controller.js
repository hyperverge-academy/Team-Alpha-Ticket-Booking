const busesService=require('../services/bus.services')

const busDetails=async function (req,res){
    const insertingDetails=req.body
    const addBusData=await busesService.validatingBusCreation(insertingDetails)
    res.send(addBusData)
}

module.exports={busDetails}