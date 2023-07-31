// order.js

const { DataTypes } = require('sequelize');
const sequelize = require('../module/index'); 





const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true
    
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
});

sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized with order.');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });

module.exports = Order;
