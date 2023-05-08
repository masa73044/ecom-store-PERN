const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("orderInfo", {
  numberOfItems: {
    type: Sequelize.INTEGER,
  },
  totalPrice: {
    type: Sequelize.DECIMAL(10, 2),
  },
});
