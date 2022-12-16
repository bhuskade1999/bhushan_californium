
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    BookName: String,
    AutherName: String,
    category: String,
    year : Number,
}, { timestamps: true });



module.exports = mongoose.model('Book', bookSchema)