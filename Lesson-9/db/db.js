const { MongoClient } = require("mongodb");

const url = "mongodb+srv://root:<password>@cluster07.fnp4ofz.mongodb.net/?appName=cluster07";

const client = new MongoClient(url);

let db;

const connectDB = async () => {
    await client.connect();
    db = client.db("hoteldb");
    console.log("MongoDB Connected Successfully");
};

const getDB = () => {
  if (!db) throw Error("DB not initialized yet");
  return db;
};

module.exports = { connectDB, getDB };