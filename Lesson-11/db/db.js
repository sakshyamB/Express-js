const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://root:MONGODB@cluster07.fnp4ofz.mongodb.net/?appName=cluster07');
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;