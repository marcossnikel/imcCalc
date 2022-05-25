import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {

    name: { type: String },
    weigth: { type: Number },
    heigth: { type: Number },
    age: { type: Number },

  },
  {
    versionKey: false,
  },
);

const user = mongoose.model('user', userSchema);

export default user;
