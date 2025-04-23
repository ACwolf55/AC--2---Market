//npm i express cors dotenv sequelize pg pg-hstore 
const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize');
require("dotenv").config(); 

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 5000

const {DATABASE_URL} = process.env

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))   

  app.get('/allItems',(req, res) => {
    sequelize.query('SELECT * FROM items;').then((dbRes) => {
      console.log(dbRes);
      res.send(dbRes[0]);
    });
  })

app.post('/register', (req,res)=>{
    const {username,password} = req.body
    sequelize.query(
        'INSERT INTO users (username, password) VALUES (:username, :password) RETURNING username',
        {
          replacements: { username: username, password: password },
          type: QueryTypes.INSERT
        }
      ).then((dbRes)=>{
        res.send(dbRes[0])
      })

})

app.get('/', (req, res) => res.send('Hello World!'))
