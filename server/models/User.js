import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters or more']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 8 characters or more']
  },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

export default User;
