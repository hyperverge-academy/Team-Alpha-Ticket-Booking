const dbConstants = require('../constants/db.constants')
const dbModel = require('./db.model')
const jwt = require('jsonwebtoken')
const resConstants = require('../constants/response.constants')
const serviceConstants = require("../constants/service.constants")

const createLoginToken = async function (userData) {
  try {
    const dball = await dbModel.dbConnection()
    const tokenCollection = dball.collection(dbConstants.tokenCollection);

    const token = jwt.sign({ userData }, serviceConstants.serviceConst.securityKey, { expiresIn: '24h' })

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


const auth = async function (req, res) {
  try {
    const token = await req.headers.authorization
    if (token) {
      token = token.split(" ")[1]
      const user = jwt.verify(token, securityKey)
    }
    else {
      return resConstants.unauthorizedError
    }
  }
  catch (error) {
    console.log(error)
    return resConstants.unauthorizedError

  }

}

module.exports = {
  createLoginToken,
  auth
}