const {MongoClient}=require('mongodb')
const uri="mongodb://127.0.0.1:27017/";

async function insertBusDetails(doc){
    const client = new MongoClient(uri);
    try{
        const database=client.db("busBooking");
        const collection=database.collection("Buses")

        const result = await collection.insertOne(doc);
        resBody={
            "message": "successfully inserted"
        }
        return resBody
    }finally{
        await client.close();
    }
}

module.exports = {insertBusDetails};