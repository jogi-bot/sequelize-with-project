// productImage.js

const { DataTypes } = require('sequelize');
const sequelize = require('../module/index'); 

const ProductImage = sequelize.define('ProductImage', {
  
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

sequelize.sync()
  .then(() => {
    console.log('Database synchronized with productimages.');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });
module.exports = ProductImage;
