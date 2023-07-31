// product.js

const { DataTypes } = require('sequelize');
const sequelize = require('../module/index');


const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
   
    autoIncrement:true,

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized with product.');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });

module.exports = Product;
