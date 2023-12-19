require("dotenv").config(); 
const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');
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

  register: async (req, res) => {
    try {
      let { username, password } = req.body;
      username = username.toLowerCase();
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
  
      // Check if the username already exists
      const existingUser = await sequelize.query(
        'SELECT * FROM users WHERE username = :username',
        {
          replacements: { username: username },
          type: QueryTypes.SELECT
        }
      );
  
      if (existingUser.length > 0) {
        return res.status(409).send('Username already exists');
      }
  
      // Create a new user
      const newUser = await sequelize.query(
        'INSERT INTO users (username, password) VALUES (:username, :password) RETURNING username',
        {
          replacements: { username: username, password: hash },
          type: QueryTypes.INSERT
        }
      );
  
      return res.status(200).send(newUser[0].username);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  },
  
  login: async (req, res) => {
    try {
      let { username, password } = req.body;
      username = username.toLowerCase();
  
      // Find the user by username
      const user = await sequelize.query(
        'SELECT * FROM users WHERE username = :username',
        {
          replacements: { username: username },
          type: QueryTypes.SELECT
        }
      );
  
      if (user.length === 0) {
        return res.status(401).send('User not found');
      }
  
      // Check password
      const isAuth = bcrypt.compareSync(password, user[0].password);
      if (!isAuth) {
        return res.status(401).send('Incorrect password');
      }
  
      // Return user information
      return res.status(200).send({ username: user[0].username, id: user[0].id });
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  },
};
