import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const productsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  imageUrl: String,
  isDeleted: {
    type: Boolean, default: false
  },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User'}
});

const Products = mongoose.model('Products', productsSchema);

export default Products;
