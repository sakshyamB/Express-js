const mongoose = require('mongoose');

const url = "mongodb+srv://root:MONGODB@cluster07.fnp4ofz.mongodb.net/hoteldb?appName=cluster07";

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB Connected Successfully");

    } catch (err) {
        console.log("DB connection error:", err);
    }
};

module.exports = connectDB;