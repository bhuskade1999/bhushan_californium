const BookModel= require("../models/bookModel")
const UserModel= require("../models/userModel")
 
    


/*----------------------------------------- Problem no -1--------------------------*/

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
 
/*----------------------------------------------------------------------------------------------*/

module.exports.createBook= createBook
 
 