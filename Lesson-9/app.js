const express = require('express');
const RoutesManager = require('./routes/RoutesManager');
const { connectDB } = require('./db/db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(RoutesManager);

const PORT = 3000;

// WAIT FOR DB FIRST
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
    });
});