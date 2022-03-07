require("dotenv").config();
const express = require('express')
const app = express()
// const Sequelize = require('sequelize')
const ctrl = require('./controllers')

const {DATABASE_URI} = process.env

const PORT = 5000


app.use(express.json())


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
app.get('/test2',ctrl.test2)


app.post('/register',ctrl.register)
app.post('/login',ctrl.login)
app.get('/shop',ctrl.allItems)

app.post('/addToCart',ctrl.addToCart)
app.put('/changeQuanity')
app.get('/displayCart/:user_id',ctrl.displayCart)



app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))