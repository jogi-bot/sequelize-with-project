const express = require('express')
const router = express.Router()
const controller = require('../controller/contoller');
const { Module } = require('module');
 

//router  for Product 

router.get('/products', controller.createProduct);
   
//router for Oredr

router.get('/Order',  controller.createOrder)

//router for images

router.get('/images', controller.createProductImage )

//router for orderid and product id 
router.post('/orders/:orderId/products/:productId', controller.orderAndProductidAssociate);
router.post('/orders/:orderId/productimages/:productImageId', controller.orderandImageAssociate );

module.exports = router



