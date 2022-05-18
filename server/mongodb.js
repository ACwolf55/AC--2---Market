require("dotenv").config(); 
const {MongoClient} = require('mongodb')
const { MongoURI } = process.env;

async function main (){
    const uri = 'mongo URI here'

    const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})

    try {
    await client.connect()
    } catch (e){
        console.error(e)
    } finally {
        await client.close()
    }
} 

async function listDatabases(client){
    const dbList = await client.db().admin().listDatabases();

    console.log(dbList)
    dbList.databases.forEach(db => console.log(` - ${db.name}`))
}


