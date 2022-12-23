const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
     
     name : String,
     author_id : Number,
     price:Number,
     rating :Number


}, 
{ timestamps: true });


module.exports = mongoose.model('Bookm', booksSchema) //users



// Books:
//     { 
//         name:"Two states",
//         author_id:1,
//         price:50,
//         ratings:4.5,
//     } ,
