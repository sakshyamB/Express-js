const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'MONGODB',
    database: 'hoteldb'
});

db.connect((error)=>{
    if(error){
        console.log("Failed to connect to Database")
    }
    else{
        console.log("Database connected succesfully")
    }
});

module.exports = db;