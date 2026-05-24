const { getDB } = require("../db/db");
const { ObjectId } = require("mongodb");

exports.getAllHotels = async () => {
    const db = getDB();
    return await db.collection("hotels").find().toArray();
};

exports.addHotel = async (hotel) => {
    const db = getDB();
    return await db.collection("hotels").insertOne(hotel);
};

exports.getHotelById = async (id) => {
    const db = getDB();
    return await db.collection("hotels").findOne({ _id: new ObjectId(id) });
};

exports.updateHotel = async (id, updatedData) => {
    const db = getDB();

    return await db.collection("hotels").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: updatedData
        }
    );
};

exports.deleteHotel = async (id) => {
    const db = getDB();

    return await db.collection("hotels").deleteOne({
        _id: new ObjectId(id)
    });
};