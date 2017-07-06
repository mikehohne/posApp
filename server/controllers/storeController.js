import db from './../models';


const storeController = {};


storeController.post = (req,res) => {

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
  db.Stores.find({}).populate({
    path: '_creator'
  }).then((stores) =>{
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

storeController.getOne = (req,res) => {
  var id = req.params;
  db.Stores.findOne({_id: id}).populate({
    path: '_creator'
  }).then((store) => {
    return res.status(200).json({
      success: true,
      data: store
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};


export default storeController;
