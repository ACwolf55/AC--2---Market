const express = require('express')
require("dotenv").config();
const app = express()

const PORT = 5000

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

app.post('./register')

app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))