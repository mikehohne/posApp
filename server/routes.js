import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import productsController from './controllers/productsController';
import storeController from './controllers/storeController';





const routes = express();

//basic routes
routes.get('/', basicController.get);

//user routes
routes.post('/signup', userController.post);
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





export default routes;
