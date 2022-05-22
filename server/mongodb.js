require("dotenv").config(); 
const {MongoClient} = require('mongodb')
const { MongoURI } = process.env;
const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})





module.exports = {

    listDatabases: async (req,res)=>{
        try {
            await client.connect()

            const dbList = await client.db().admin().listDatabases();
        
            dbList.databases.forEach(db => console.log(` - ${db.name}`))
            return res.send(dbList)

            } catch (e){
                console.error(e)
            } finally {
                await client.close()
            }
        

    },

    newOrder: async (req, res) => {
        const {order} = req.body
        try {
            await client.connect()
            const postedOrder = await client.db('AC-2-Market').collection('orders').insertOne(order)
            return res.send(postedOrder.insertedId)

            } catch (e){
                console.error(e)
            } finally {
                await client.close()
            }
    }



}
// -----                          INDEX.JS mongoDB code                    ----------------//

// async function mongoDBconnect (){
//     const uri = 'mongo URI here'

//     const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})

   
//     try {
//     await client.connect()
//     // await createOrder(client,order)
//     } catch (e){
//         console.error(e)
//     } finally {
//         await client.close()
//     }
// } 

// async function listDatabases(client){
//     const dbList = await client.db().admin().listDatabases();

//     console.log(dbList)
//     dbList.databases.forEach(db => console.log(` - ${db.name}`))
// }


// mongoDBconnect()

