//const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data =req.body.data
//     let allBooks= await  BookModel.create(data)   
// }

const check1 = async function (req, res) {
     res.send({msg:"the first controlller executed (1)"})
}

const check2 = async function (req, res) {
     res.send({msg:"the second controlller executed (2)"})
}



/*----------------------------------------------------------------------------------------------*/

module.exports.check1 = check1
module.exports.check2 = check2
 