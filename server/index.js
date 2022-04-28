const express = require('express')
const app = express()
// const Sequelize = require('sequelize')
const userCtrl = require('./userController')
const cartCtrl = require('./cartController')
const cors = require('cors')
const bodyParser = require('body-parser');

const PORT = 5000


app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


const testCart = [
    {name:"apple",
    price:.50}
    ,
    {name:"mango",
    price:.50}
]


app.get('/test',(req,res)=>{
    res.send(testCart)
    })

app.get('/test2',userCtrl.test2)


app.post('/register',userCtrl.register)
app.post('/login',userCtrl.login)


app.get('/shop', cartCtrl.allItems)

app.post('/addToCart',cartCtrl.addToCart)
app.get('/getCart/:user_id',cartCtrl.getCart)
app.get('/getItem/:item_id',cartCtrl.getItem)
app.get('/cartNumber/:id',cartCtrl.cartNumber)
app.get('/getCartTotal/:id',cartCtrl.getCartTotal)

// app.post('/payment', cors(), cartCtrl.payment)


app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))