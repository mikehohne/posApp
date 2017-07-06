import request from 'request';

const colorController = {};

//color api controller
colorController.get = (req,res) => {

  const options = {
    method: 'GET',
    url: 'http://www.colr.org/json/schemes/random/7'
   };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var result = JSON.parse(body);
    res.json({
      success: true,
      data: result
    });
  });
};

export default colorController;
