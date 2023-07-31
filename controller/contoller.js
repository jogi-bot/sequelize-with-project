// controllers/controller.js
const { Order, Product, ProductImage } = require('../module/Associations');

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      productId: req.body.productId,
     
    });     
    res.status(201).json(newOrder);

  } catch (error) {
    res.status(500).json({ error: 'Internal server error', error });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', error });
  }
};

const createProductImage = async (req, res) => {
  try {
    const newProductImage = await ProductImage.create({
      ...req.body,
      
    });
    res.status(201).json(newProductImage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error', error });
  }
};

const orderAndProductidAssociate = async(req, res) => {
  try{
   let {orderId, productId} = req.params

   const order = await Order.findByPk(orderId)
   const product = await Product.findByPk(productId)
   


   if(!order || !product){
    res.status(404).json({error:'order and product not found '})
   }
   await order.addProduct(product);

   res.status(200).json({message:"order and product Associate"})
  }

  catch(err){
    res.status(404).json({error:'internal server error', err})

  }


}

const orderandImageAssociate  = async(req, res) => {
  try{
    let {orderId , productImageId} = req.params

    const order = await Order.findByPk(orderId)
    const productImage = await ProductImage.findByPk(productImageId)

    if(!order || !productImage){
      return res.status(404).json({error:'order and product not found '})
    }
    
    await order.addProductImage(productImage);
    res.status(200).json({message:"order and productImages are assocoted"})
  }
  catch(err){
    res.status(404).json({error:'internal server error ', err})

  }
}


module.exports = { createOrder, createProduct, createProductImage, orderAndProductidAssociate, orderandImageAssociate };
