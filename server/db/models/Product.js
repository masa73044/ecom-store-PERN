const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("product", {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  //   size: {
  //     type: Sequelize.DECIMAL(10, 1),
  //     allowNull: false,
  //     validate: { notEmpty: true },
  //   },
  //   color: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //     validate: { notEmpty: true },
  //   },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: { type: Sequelize.TEXT, defaultValue: "" },
  stockCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  imageURL: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [
      "https://m.media-amazon.com/images/I/81BWlge-0fL._AC_SX679_.jpg",
    ],
  },
});
