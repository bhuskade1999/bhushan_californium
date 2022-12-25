const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type:objectId,
        ref : "user_document"
    },
        
	productId: {
        type: objectId,
        ref :"product_document"
    },
	amount:Number, 
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });


module.exports = mongoose.model('Order_Document', orderSchema) //users
