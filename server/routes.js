import express from 'express';


import basicController from './controllers/basicController';
import userController from './controllers/userController';
import productsController from './controllers/productsController';
import storeController from './controllers/storeController';
import giphyController from './controllers/apis/giphyController';
import colorController from './controllers/apis/colorController';
import logoController from './controllers/apis/logoController';







const routes = express();

//basic routes
routes.get('/', basicController.get);

//user routes
routes.post('/login', userController.post);
routes.get('/users', userController.getAll)
routes.get('/user/:_id', userController.getOne);


//product routes
routes.post('/product', productsController.post);
routes.get('/products', productsController.getAll);
routes.get('/product/:_id', productsController.getOne);


//store routes
routes.post('/store', storeController.post);
routes.get('/stores', storeController.getAll);
routes.get('/store/:_id', storeController.getOne);

//giphy routes
routes.get('/call', giphyController.get);

//color routes
routes.get('/colors', colorController.get);

//logo routes
routes.get('/logoGenerator', logoController.get);








export default routes;
