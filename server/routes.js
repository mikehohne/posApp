import express from 'express';

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import productsController from './controllers/productsController';




const routes = express();

//basic routes
routes.get('/', basicController.get);

//user routes
routes.post('/signup', userController.post);

//product routes
routes.post('/product', productsController.post);
routes.get('/products', productsController.getAll);



export default routes;
