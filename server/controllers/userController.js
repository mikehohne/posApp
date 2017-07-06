import db from './../models';

const userController = {};


userController.post = (req,res) => {

  const { username, password } = req.body;

  //Validation
  //sk_ea947fce829611c2dd49aa293fd851f1


  const user = new db.User({
    username,
    password
  });

  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      data: newUser
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
}


userController.getAll = (req,res) => {
  db.User.find({}).then((user) =>{
    return res.status(200).json({
      success: true,
      data: user
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};


userController.getOne = (req,res) => {
  var id = req.params;
  db.User.findOne({_id: id}).populate({
    path: '_creator'
  }).then((user) => {
    return res.status(200).json({
      success: true,
      data: user
    })
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });
};


export default userController;
