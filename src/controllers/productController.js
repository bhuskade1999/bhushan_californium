const { count } = require("console")
const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel= require("../models/userModel")



const createProduct = async function (req,res){
    let data = req.body
    let savedata = await ProductModel.create(data)
    res.send({msg :savedata})
}


module.exports.createProduct = createProduct