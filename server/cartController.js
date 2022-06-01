require("dotenv").config(); 
const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const { default: Stripe } = require("stripe");
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


  allItems: (req, res) => {
  
    // sequelize.query(`SELECT * FROM items;`).then((dbRes) => {
    //   res.send(dbRes[0]);
    // })
    return res.send(DATABASE_URL)
  },

    addToCart: (req,res)=>{
      let {user_id,item_id,quanity} = req.body
      console.log(req.body)
      user_id = parseInt(user_id)
      console.log(req.body)
      sequelize.query(`INSERT INTO cart (user_id, item_id, quanity) VALUES(${user_id},${item_id},${quanity}); SELECT * FROM cart WHERE user_id = ${user_id}`).then((dbRes)=>{

        return res.status(200).send(dbRes[0])
      }).catch(err => {
        console.log(err);
    })

      
    },
    getCart: (req,res)=>{
      const user_id = parseInt(req.params.user_id)
      sequelize.query(`SELECT * FROM cart WHERE user_id = ${user_id}`).then((dbRes)=>{
        console.log(dbRes)
        return res.status(200).send(dbRes[0])
      })
    },
    getCartItems: (req,res)=>{
      const id = parseInt(req.params.user_id)
      sequelize.query(`
      SELECT * FROM items i
      JOIN cart c on c.item_id = i.id
        WHERE c.user_id = ${id}; `).then((dbRes)=>{
        console.log(dbRes)
        return res.status(200).send(dbRes[0])
      })
    },

    getItem:(req,res)=>{
      const item_id = parseInt(req.params.item_id)
      console.log(item_id)
      sequelize.query(`SELECT * FROM items WHERE id = ${item_id}`).then((dbRes)=>{
        return res.status(200).send(dbRes[0][0])
      })

    },

    cartNumber: (req,res)=>{
      const id =  parseInt(req.params.id)
      sequelize.query(`SELECT COUNT(item_id)FROM cart WHERE user_id = ${id};`).then((dbRes)=>{
        const cartNum = parseInt(dbRes[0][0].count)
        return res.status(200).send(dbRes[0][0].count)
      })
    },

    getCartTotal: (req,res) => {
      const id =  parseInt(req.params.id)

      sequelize.query(`
      SELECT SUM(price) FROM items i
      JOIN cart c on c.item_id = i.id
        WHERE c.user_id = ${id}; `)
        .then((dbRes)=>{
        let sum = dbRes[0][0].sum
        return res.status(200).send(sum)
      
        })
    },
    payment: async(req,res) =>{
      let status , error;
      const {token,amount} = req.body

      try{
        await stripe.charges.create({
          source:token.id,
          amount,
          currency:'usd'
        })
        
        console.log('stripe bakcend firered')
        status='Success'
      }catch(error){
        console.log(error)
        status= 'Failure'
      }
      res.json({error,status})
  
    }
};
