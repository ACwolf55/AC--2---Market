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
};
