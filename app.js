const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Oxana:oBemGbR9whNZ5Tud@cluster0.wm2gu6f.mongodb.net/books_books?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect succes"))
    .catch(error => console.log(error.message));