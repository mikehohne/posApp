import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';



mongoose.connect('mongodb://localhost:27017/pos', () => {
  console.log('Connected to mongodb');
});

import routes from './routes'

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);


export default app;
