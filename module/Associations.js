const Product = require("./Product")
const ProductImage = require('./ProductImage');
const Order = require('./Order');


//one to many product to  order 
Product.hasMany(Order, { foreignKey: 'productId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

//one to many  product to product iamegs
Product.hasMany(ProductImage, { foreignKey: 'productId' });
ProductImage.belongsTo(Product, { foreignKey: 'productId' });

//many to one  order to productimages
Order.hasMany(ProductImage, { foreignKey: 'orderId' });
ProductImage.belongsTo(Order, { foreignKey: 'orderId' });

module.exports = { Order, ProductImage, Product };
