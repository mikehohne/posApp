import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true
    },
  _creator: { type: Schema.ObjectId, ref: 'User'},
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
});

const Store = mongoose.model('Store', storeSchema);

export default Store;
