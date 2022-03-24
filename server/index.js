const express = require('express')
const app = express()
// const Sequelize = require('sequelize')
const ctrl = require('./controllers')

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
app.get('/getCart/:user_id',ctrl.getCart)
app.get('/getItem/:item_id',ctrl.getItem)
app.get('/cartNumber/:id',ctrl.cartNumber)


app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))