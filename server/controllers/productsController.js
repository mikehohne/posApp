import db from './../models';


const productsController = {};


//post product to db
productsController.post = (req,res) => {

  const {
    title,
    description,
    price,
    imageUrl,
    productType,
    userId,
    storeId
  } = req.body;

  const product = new db.Products({
    title,
    description,
    price,
    imageUrl,
    productType,
    _creator: userId,
    _store: storeId
  });

  product.save().then((newProduct) => {
    return res.status(200).json({
      succes: true,
      data: newProduct
    })
  }).catch((err) => {
    console.log(err)
  })
};


//get all products from db
productsController.getAll = (req,res) => {
  db.Products.find({}).populate({
    path: '_creator _store',
  }).then((products) =>{
    return res.status(200).json({
      success: true,
      data: products
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};


export default productsController;
