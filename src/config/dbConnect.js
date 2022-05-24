import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://marcossnikel:123@cluster0.528ak.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

export default db;
