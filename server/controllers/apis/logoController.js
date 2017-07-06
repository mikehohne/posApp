var clearbit = require('clearbit')('sk_ea947fce829611c2dd49aa293fd851f1');

const logoController = {};

//color api controller
logoController.get = (req,res) => {

  var Person = clearbit.Person;
Person.find({email: 'kaylamhorn@gmail.com'})
  .then(function (person) {
    console.log('Name: ', person.name.fullName);
  })
  .catch(Person.QueuedError, function (err) {
    console.log(err); // Person is queued
  })
  .catch(Person.NotFoundError, function (err) {
    console.log(err); // Person could not be found
  })
  .catch(function (err) {
    console.log('Bad/invalid request, unauthorized, Clearbit error, or failed request');
  });
};

export default logoController;
