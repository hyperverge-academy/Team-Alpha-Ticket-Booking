const busesService=require('../services/bus.services')

const postingData=async function (req,res){
    
    const insertingDetails=req.body
    const returnData=await busesService.validation(insertingDetails)
    // res.status(returnData.statusCode).json(returnData)
    res.send(returnData)
}

module.exports={postingData}