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
// app.get('/test2',(req,res)=>{
//     console.log('asdasd')
//     res.send('test2')
//    })

app.post('/register',ctrl.register)

// app.post('/register', (req,res)=>{
       
//     let{username,password} = req.body
//     const salt = bcrypt.genSaltSync(10)
//     const hash = bcrypt.hashSync(password, salt)

//     sequelize.query(`INSERT INTO users (username, password) VALUES (
//         ${username},${hash});`)
// })


app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))