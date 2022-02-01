
const {DATABASE_URI} = process.env
const Sequelize = require('sequelize')
const bcrypt = require("bcryptjs");

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(DATABASE_URI, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    
    test2:(req,res)=>{
        res.send('test2')
    },

    register:(req,res)=>{
        console.log("register")
        let{username,password} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
    
        sequelize.query(`INSERT INTO users (username, password) VALUES ('${username}', '${hash}') returning username;`)
            .then(dbRes => res.status(200).send(dbRes[0][0]))
            .catch(err => console.log(err))
    }



}