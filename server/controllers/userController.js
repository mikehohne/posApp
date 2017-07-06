import db from './../models';
import passport from 'passport';
import local from 'passport-local';
var LocalStrategy = require('passport-local').Strategy;

const userController = {};


userController.post = (req,res) => {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
};


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
