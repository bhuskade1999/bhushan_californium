 
const BookModel= require("../models/bookModel")

const createSchema= async function (req, res) {
    let data = req.body
    let StoreData= await BookModel.create(data)
    res.send({msg: StoreData})
}


const getSchema= async function (req, res) {
    let FetchUsers= await BookModel.find()
    res.send({msg: FetchUsers})
}


module.exports.createSchema = createSchema
module.exports.getSchema = getSchema