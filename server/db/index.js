//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderDetails = require("./models/OrderInfo");

User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(OrderInfo);
OrderDetails.belongsTo(Order);
OrderDetails.belongsTo(Product);
Product.hasMany(OrderInfo);

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderInfo,
  },
};
