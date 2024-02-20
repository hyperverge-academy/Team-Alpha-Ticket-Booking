const {MongoClient}=require('mongodb')
const dbConstants = require('../constants/db.constants')
const resConstants = require('../constants/response.constants')
const dbModel = require('./db.model')

async function insertBusDetails(doc){
    const client = new MongoClient(dbConstants.uri);
    try{
        const database=client.db(dbConstants.dbName);
        const collection=database.collection(dbConstants.busCollection)
        const result = await collection.insertOne(doc);
        return resConstants.successStatus
    }finally{
        await client.close();
    }
}

async function allBusDetails(){
    const dbCall = await dbModel.dbConnection()
    try{
        const collection = dbCall.collection(dbConstants.busCollection);
        const query = {}
        const result =  collection.find(query);
        
        if ((await collection.countDocuments(query))===0){
            return resConstants.missingDocument
        }
        
        const busesArray = []
        for await(const doc of result){
            busesArray.push(doc)
        }
        return busesArray

    }catch(error){
        console.error("error: ", error);
        return resConstants.internalServerError  
    }
    finally{
    }
}

module.exports = {
    insertBusDetails,
    allBusDetails,
};