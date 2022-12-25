const { type } = require("express/lib/response")
const UserModel= require("../models/userModel")
const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")


const createUser = async function (req,res){
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({msg : savedData })

}



 
module.exports.createUser= createUser
 

 