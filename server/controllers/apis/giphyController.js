import request from 'request';

const giphyController = {};

//giphy test api controller
giphyController.get = (req,res) => {

  const options = {
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/random',
    headers: {
      'cache-control': 'no-cache',
       api_key: '6ada7d85b543495b802a5c5c0643b5d2' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var result = JSON.parse(body);
    res.json({
      success: true,
      data: result.data
    });
  });
};

export default giphyController;
