const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database successfully!"))
    .catch(err => console.error("Database connection failed:", err));
}

module.exports = connectToDb;
