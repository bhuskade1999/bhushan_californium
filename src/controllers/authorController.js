const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let saveData = await AuthorModel.create(data)
    res.send({data: saveData})
}
 


const getAuthorsData= async function (req, res) {
     let authors = await AuthorModel.findOne({ authorName :"Chetan Bhagat"})
  
    res.send({data: authors})
 }

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
//module.exports.getfindOne= getfindOne