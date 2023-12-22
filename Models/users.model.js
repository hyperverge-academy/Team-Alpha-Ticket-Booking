let{ MongoClient} = require("mongodb")
const dbConstants = require('../constants/db.constants')

const booking = async function insertBooking(bookingDoc) {
    const client = new MongoClient(dbConstants.uri)
    try {
      const database = client.db(dbConstants.dbName);
      const info = database.collection(dbConstants.busCollection);
      
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

  const registration = async function insertUserDetails(userDoc) {
    const client = new MongoClient(dbConstants.uri)
    try {
      const database = client.db(dbConstants.dbName);
      const collection = database.collection(dbConstants.userCollection);
      const result = await collection.insertOne(userDoc);
    
      const message = {
        message: "You have registered seccessfully. "
      }
      return message 
    } finally {
      await client.close();
    }
  } 

  module.exports = {
    booking,
    registration
  }