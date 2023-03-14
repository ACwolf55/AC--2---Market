const express = require('express')
const app = express()
const userCtrl = require('./userController')
const cartCtrl = require('./cartController')
const MongoCtrl = require('./mongodb')
const cors = require('cors')
const path =require('path')
const bodyParser = require('body-parser');

require("dotenv").config(); 
const {MongoClient} = require('mongodb')
const { MongoURI } = process.env;


const {PORT} = process.env
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
//for heroku deployement
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))

///endpoints / controllers

app.post('/newOrder',MongoCtrl.newOrder)
app.get('/mongoDBtest',MongoCtrl.listDatabases)
app.get('/userOrders/:user_id',MongoCtrl.userOrders)

app.get('/test2',userCtrl.test2)


app.post('/register', userCtrl.register)
app.post('/login', userCtrl.login)


app.get('/allItems', cartCtrl.allItems )
app.post('/addToCart',cartCtrl.addToCart)

app.get('/getCart/:user_id',cartCtrl.getCart)
app.get('/getItem/:item_id',cartCtrl.getItem)
app.get('/getCartItems/:user_id',cartCtrl.getCartItems)

app.get('/cartNumber/:id',cartCtrl.cartNumber)
app.get('/getCartTotal/:id',cartCtrl.getCartTotal)


app.post('/payment', cartCtrl.payment)

