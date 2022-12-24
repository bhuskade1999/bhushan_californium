const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
   bookName: {
       type: String,
   },
   
   authorName: String,
   tags: [ String ], //array of strings
   year:{
     type:Number,
     default:2021
   },
   isPublished: {
       type: Boolean, //Boolean
       default: false
   },
   prices: {
       indianPrice: String,
       europeanPrice: String,
   },
   totalPages: {
       type: Number,
       default : 0
   },
   stockAvailable:{
     type:Boolean,
     default:false
} 
 
}, {timestamps: true} )
 
module.exports = mongoose.model('Book', bookSchema )
