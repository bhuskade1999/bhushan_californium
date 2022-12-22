const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
     
	    name:String,
		author:    {
            type : ObjectId,
            ref : 'New_Author',
            required: [true, 'please enter Author']    
         },          
	    price:Number,
		ratings:Number,
		publisher:{
            type : ObjectId,
            ref : 'New_Publisher'  

        },
        isHardCover:{
            type:Boolean,
            default:false
        }


}, { timestamps: true });


module.exports = mongoose.model('New_Book', bookSchema)
