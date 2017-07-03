import db from './../models';


const storeController = {};


storeController.post = (req,res) => {
  console.log(req.body);
  const { name, userId, username, password  } = req.body;

  //Validation


  const store = new db.Stores({
    name,
    _creator: userId
  });


  store.save().then((newStore) => {
    res.status(200).json({
      success: true,
      data: newStore
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};

storeController.getAll = (req,res) => {
  db.Stores.find({}).then((stores) =>{
    return res.status(200).json({
      success: true,
      data: stores
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};


export default storeController;
