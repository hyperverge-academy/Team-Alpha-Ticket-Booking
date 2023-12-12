let{ MongoClient} = require("mongodb")
const uri = "mongodb://127.0.0.1:27017/"

const booking = async function insertBooking(bookingDoc) {
    const client = new MongoClient(uri)
    try {
      const database = client.db("busBooking");
      const info = database.collection("bookings");
      
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
  module.exports = {booking}