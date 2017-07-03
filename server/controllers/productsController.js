import db from './../models';


const productsController = {};


productsController.post = (req,res) => {
  const {
    title,
    description,
    imageUrl,
    userId
  } = req.body;

  const product = new db.Products({
    title,
    description,
    imageUrl,
    _creator: userId
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
    path: '_creator',
    select: 'username createdAt'
  }).then((products) =>{
    return res.status(200).json({
      success: true,
      data: products
    })
  });
};


export default productsController;
