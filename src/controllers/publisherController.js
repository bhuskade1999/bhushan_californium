const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisher= require("../models/publisherModel")


const createPublisher= async function (req, res) {
    let book = req.body
    let saveData = await publisher.create(book)
    res.send({data: saveData})
}

module.exports.createPublisher= createPublisher