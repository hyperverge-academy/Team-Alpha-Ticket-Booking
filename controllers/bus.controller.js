const busesService=require('../services/bus.services')

const busDetails=async function (req,res){
    const insertingDetails=req.body
    const addBusData=await busesService.validatingBusCreation(insertingDetails)
    res.send(addBusData)
}

const allBusesData = async function (req, res){
    const busData = await busesService.getAllBuses()
    res.send(busData)
}

module.exports={busDetails,
    allBusesData,
    }