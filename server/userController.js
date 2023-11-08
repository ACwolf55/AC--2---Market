require("dotenv").config(); 
const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  test2: (req, res) => {
    res.send("test2");
  },

  register: (req, res) => {
    let { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

  
    sequelize.query(`SELECT * FROM users WHERE username = '${username}';`)
      .then((dbRes) => {
        console.log(dbRes[0][0])
        if (dbRes[0][0]){
          return res.send('username already exists')
        }
        sequelize
          .query(
            `INSERT INTO users (username, password) VALUES ('${username}', '${hash}') returning username;`
          )
          .then((dbRes) => res.status(200).send(dbRes[0][0]))
          .catch((err) => console.log(err));
      })
      
   

  },

  login: (req, res) => {
    let { username, password } = req.body;
     sequelize.query(`SELECT * FROM users WHERE username = '${username}';`)
      .then((user) => {
        user = user[0][0];
        if(!user){
          return res.status(401).send('User not found')
        }
        let isAuth = bcrypt.compareSync(password, user.password);
        if (!isAuth) {
          return res.status(401).send("incorrect password");
        }
        return res.status(200).send({ username: user.username, id: user.id });
      })
     
  },

};
