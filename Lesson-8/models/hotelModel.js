const db = require('../db/db');

exports.getAllHotels = (callback) => {
    db.query('SELECT * FROM hotels', callback);
};

exports.addHotel = (data, callback) => {
    db.query(
        'INSERT INTO hotels(name, location, price, rating) VALUES (?,?,?,?)',
        [data.name, data.location, data.price, data.rating],
        callback
    );
};

exports.deleteHotel = (id, callback) => {
    db.query('DELETE FROM hotels WHERE id = ?', [id], callback);
};

exports.getHotelById = (id, callback) => {
    db.query('SELECT * FROM hotels WHERE id = ?', [id], callback);
};

exports.updateHotel = (data, id, callback) => {
    db.query(
        'UPDATE hotels SET name=?, location=?, price=?, rating=? WHERE id=?',
        [data.name, data.location, data.price, data.rating, id],
        callback
    );
};