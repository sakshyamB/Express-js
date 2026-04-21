const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil')
//fake database
const HotelDetail = [];

module.exports = class Home {
    constructor (name, location, price, rating){
        this.name = name;
        this.location = location;
        this.price = price;
        this.rating = rating;
    }
    save() {
    HotelDetail.push(this);
    const filePath = path.join(rootDir, 'data', 'home.json');
    fs.writeFile(filePath, JSON.stringify(HotelDetail), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data saved successfully");
        }
    });
}

    static fetchAll(){
        return HotelDetail;
    }
}