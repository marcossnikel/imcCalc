import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    weigth: { type: Number, required: true },
    heigth: { type: Number, required: true },
    age: { type: Number, required: true },

  },
  {
    versionKey: false,
  },
);

const user = mongoose.model('user', userSchema);

export default user;
