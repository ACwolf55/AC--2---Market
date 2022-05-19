const express = require('express')
const app = express()
const userCtrl = require('./userController')
const cartCtrl = require('./cartController')
const cors = require('cors')
const bodyParser = require('body-parser');

require("dotenv").config(); 
const {MongoClient} = require('mongodb')
const { MongoURI } = process.env;


const PORT = 5000
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

async function mongoDBconnect (){
    const uri = 'mongo URI here'

    const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})

    try {
    await client.connect()
    await listDatabases(client)
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

mongoDBconnect()


app.get('/test2',userCtrl.test2)


app.post('/register', userCtrl.register)



app.post('/login', userCtrl.login)


app.get('/shop', cartCtrl.allItems)


  
app.post('/addToCart',cartCtrl.addToCart)

app.get('/getCart/:user_id',cartCtrl.getCart)
app.get('/getItem/:item_id',cartCtrl.getItem)
app.get('/cartNumber/:id',cartCtrl.cartNumber)
app.get('/getCartTotal/:id',cartCtrl.getCartTotal)


app.post('/payment', cartCtrl.payment)


app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))