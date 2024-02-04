const jwt = require('jsonwebtoken')
const resConstants = require('../constants/response.constants')
const serviceConstants = require("../constants/service.constants")

const verifyToken = async function (req, res, next) {
    let token = await req.header("authorization");
    if (!token) {
      return res.json( resConstants.unauthorizedError);
    }
    token = token.split(" ")[1]

    try {
    
      const userId = req.params.userId
      const isVerified = jwt.verify(token, serviceConstants.serviceConst.securityKey, (err, decoded)=>{
        if (err) {
          if (err.name === serviceConstants.serviceConst.tokenExpire) {
            return res.json(resConstants.tokenExpiredError);
          }
          else {
            return res.json(resConstants.unauthorizedError);
          }

        }
        if(userId !== decoded.userData.mobileNumber) {
          return res.json(resConstants.unauthorizedError)
        } 
        console.log(decoded)
        req.user = decoded;
        next()
      })
     
    }
    catch (error) {
      console.log(error)
      return resConstants.internalServerError 
    }
  }

module.exports = {
    verifyToken,
}