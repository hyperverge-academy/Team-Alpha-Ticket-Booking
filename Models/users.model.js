let{ MongoClient} = require("mongodb")
const dbConstants = require('../constants/db.constants')
const resConstants = require('../constants/response.constants')
const tokenService = require('../services/token.services')
const dbModel = require('./db.model')
const serConst = require("../constants/service.constants")

const registerAdmin= async function(){
  try{
    const dbCall = await dbModel.dbConnection()
    const collection = dbCall.collection(dbConstants.userCollection);
    const details = await collection.findOne({"mobileNumber": serConst.serviceConst.adminData.mobileNumber});

    if(details){
      return true;
    }
    else{
      await collection.insertOne(serConst.serviceConst.adminData)
      return true;
    }

  }
  catch(error){
    console.error(" error: ", error);
    return false;
  }
}

const booking = async function insertBooking(bookingDoc) {
    const client = new MongoClient(dbConstants.uri)
    try {
      const database = client.db(dbConstants.dbName);
      const info = database.collection(dbConstants.bookingCollection);
      
      const result = await info.insertOne(bookingDoc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      const message = {
        message: "You have booked your seat seccessfully. "
      }
      return message
    } finally {
      await client.close();
    }
}


const registration = async function insertUserDetails(userDetail) {
  const client = new MongoClient(dbConstants.uri)
  try {
    const database = client.db(dbConstants.dbName);
    const collection = database.collection(dbConstants.userCollection);

    const {mobileNumber} = userDetail
    const mobileDetail = await collection.findOne({"mobileNumber": mobileNumber});

    if(mobileDetail){
      return resConstants.alreadyRegistered

    }
    userDetail.role="user"
    const result = await collection.insertOne(userDetail);
    return resConstants.registrationSuccess
  }
  catch (error) {
    console.error("registration error: ", error);
    return resConstants.internalServerError
  } 
  finally {
    await client.close();
  }
} 

const loginfun = async function findingDetails(userDetail) {
  try {
    const dbCall = await dbModel.dbConnection()
    const collection = dbCall.collection(dbConstants.userCollection);
    const {mobileNumber, password} = userDetail
    const details = await collection.findOne({"mobileNumber": mobileNumber});

    if(!details){
      return resConstants.loginUserNotfound
    }
    
    if(details.password === password){
      const data ={
        mobileNumber:userDetail.mobileNumber,
        role: details.role
      }
      return tokenService.saveToken(data)
    }
    else{
      return resConstants.loginDataError
    }
  }
  catch (error) {
    console.error("login error: ", error);
    return resConstants.internalServerError
  } 
  // finally {
  //   await client.close();
  // }
}

module.exports = {
  booking,
  registration,
  loginfun,
  registerAdmin
}