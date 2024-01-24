const jwt = require('jsonwebtoken')
const resConstants = require('../constants/response.constants')
const serviceConstants = require("../constants/service.constants")

const verifyToken = async function (req, res, next) {
    console.log("verifyToken")
    let token = await req.header("authorization");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized HTTP, Token not provided." });
    }
    token = token.split(" ")[1]
    console.log("token from verifyToken", token);

    try {
      const userId = req.params.userId
      const isVerified = jwt.verify(token, serviceConstants.serviceConst.securityKey, (err, decoded)=>{
        if (err) {
          if (err.name === 'TokenExpiredError') {
            return res.json(resConstants.tokenExpiredError);
          }
          else {
            return res.status(401).json({ error: 'Unauthorized', message: 'Invalid token.' });
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