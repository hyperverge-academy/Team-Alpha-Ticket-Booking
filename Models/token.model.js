const dbConstants = require('../constants/db.constants')
const dbModel = require('./db.model')
const jwt = require('jsonwebtoken')
const resConstants = require('../constants/response.constants')
const serviceConstants = require("../constants/service.constants")

const createLoginToken = async function (userData) {
  try {
    const dball = await dbModel.dbConnection()
    const tokenCollection = dball.collection(dbConstants.tokenCollection);

    const token = jwt.sign({ userData }, serviceConstants.serviceConst.securityKey, { expiresIn: '86400s' })

    const update = { $set: { token: token } }
    const tokenExistance = await tokenCollection.findOneAndUpdate({ userId: userData.mobileNumber }, update)
    console.log(tokenExistance)

    if (!tokenExistance) {
      const result = await tokenCollection.insertOne({ token: token, userId: userData.mobileNumber })
      console.log(result)

    }

    const successRes = {
      message: resConstants.loginSuccess,   
      contactNo: userData.mobileNumber,
      role: userData.role,
      token: token
    }
    return successRes

  }
  finally {
    // await client.close();
  }
}


const verifyToken = async function (req, res, next) {
  console.log("verifyToken")
  let token = await req.header("authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized HTTP, Token not provided." });
  }

  token = token.split(" ")[1]
  console.log("token from verifyToken", token);
  try {

    const isVerified = jwt.verify(token, serviceConstants.serviceConst.securityKey)
    console.log("isVerified", isVerified)

    next()
  }
  catch (error) {
    console.log(error)
    return resConstants.unauthorizedError

  }

}

module.exports = {
  createLoginToken,
  verifyToken
}