const { getDB } = require("../db/db");
const { ObjectId } = require("mongodb");

// GET ALL
exports.getAllHotels = async () => {
    const db = getDB();
    return await db.collection("hotels").find().toArray();
};

// ADD (you already have this, just in case)
exports.addHotel = async (hotel) => {
    const db = getDB();
    return await db.collection("hotels").insertOne(hotel);
};

// FIND BY ID
exports.getHotelById = async (id) => {
    const db = getDB();
    return await db.collection("hotels").findOne({ _id: new ObjectId(id) });
};

// UPDATE
exports.updateHotel = async (id, updatedData) => {
    const db = getDB();

    return await db.collection("hotels").updateOne(
        { _id: new ObjectId(id) },
        {
            $set: updatedData
        }
    );
};

// DELETE
exports.deleteHotel = async (id) => {
    const db = getDB();

    return await db.collection("hotels").deleteOne({
        _id: new ObjectId(id)
    });
};