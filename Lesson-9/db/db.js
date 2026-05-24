const { MongoClient } = require("mongodb");

const url = "mongodb+srv://root:MONGODB@cluster07.fnp4ofz.mongodb.net/?appName=cluster07";

const client = new MongoClient(url);

let db;

const connectDB = async () => {
    try {
        await client.connect();

        db = client.db("hoteldb");

        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.log("DB connection error:", err);
    }
};

const getDB = () => {
    if (!db) {
        throw new Error("DB not initialized yet");
    }
    return db;
};

module.exports = { connectDB, getDB };