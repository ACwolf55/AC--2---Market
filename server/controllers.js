const { DATABASE_URI } = process.env;
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(DATABASE_URI, {
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

    sequelize
      .query(
        `INSERT INTO users (username, password) VALUES ('${username}', '${hash}') returning username;`
      )
      .then((dbRes) => res.status(200).send(dbRes[0][0]))
      .catch((err) => console.log(err));
  },

  login: async (req, res) => {
    let { username, password } = req.body;
    await sequelize
      .query(`SELECT * FROM users WHERE username = '${username}';`)
      .then((user) => {
        user = user[0][0];
        let isAuth = bcrypt.compareSync(password, user.password);
        if (!isAuth) {
          return res.status(403).send("Incorrect Password");
        }
        return res.status(200).send({ username: user.username, id: user.id });
      })
      .catch((err) => console.log("username not found"));
  },
  allItems: (req, res) => {
    sequelize.query(`SELECT * FROM items;`).then((dbRes) => {
      res.send(dbRes[0]);
    });
  },
    addToCart: (req,res)=>{
      let {user_id,item_id,quanity} = req.body
      user_id = parseInt(user_id)
      console.log(req.body)
      sequelize.query(`INSERT INTO cart (user_id, item_id, quanity) VALUES(${user_id},${item_id},${quanity}); SELECT * FROM cart WHERE user_id = ${user_id}`).then((dbRes)=>{
        console.log('db .then')
        return res.status(200).send(dbRes[0])
      }).catch(err => {
        console.log(err);
    })

      
    },
    getCart: (req,res)=>{
      const user_id = parseInt(req.params.user_id)
      console.log('test')
      sequelize.query(`SELECT * FROM cart WHERE user_id = ${user_id}`).then((dbRes)=>{
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
    }
};
