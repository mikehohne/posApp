import db from './../models';


const productsController = {};


productsController.post = (req,res) => {
  const {
    title,
    description,
    imageUrl,
    productType,
    userId,
    storeId
  } = req.body;

  const product = new db.Products({
    title,
    description,
    imageUrl,
    productType,
    _creator: userId,
    _Id: storeId
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

productsController.getAll = (req,res) => {
  db.Products.find({}).populate({
    path: '_creator _Id',
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
