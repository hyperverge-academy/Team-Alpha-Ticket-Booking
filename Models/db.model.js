let{ MongoClient} = require("mongodb")
const dbConstants = require('../constants/db.constants')
const client = new MongoClient(dbConstants.uri)

const dbConnection = async function (){
    await client.connect()
    console.log("database connection established")
    const database = client.db(dbConstants.dbName);
    return database
}

module.exports = {dbConnection}