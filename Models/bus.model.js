const {MongoClient}=require('mongodb')
const dbConstants = require('../constants/db.constants')

async function insertBusDetails(doc){
    const client = new MongoClient(dbConstants.uri);
    try{
        const database=client.db(dbConstants.dbName);
        const collection=database.collection(dbConstants.busCollection)

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