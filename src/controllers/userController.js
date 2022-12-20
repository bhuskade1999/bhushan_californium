const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
 

const getBookById= async function (req, res) {
     
    let get_obj= await UserModel.findOne({ author_name :"Chetan Bhagat" }) 
    let get_id =get_obj.author_id
     let savedData= await BookModel.find({ author_id : get_id }) 
     res.send({msg: savedData})
}

const findAndUpdate= async function (req, res) {
      
     let findName= await BookModel.findOneAndUpdate(
        { name : "Two states" },
        {$set:{price:100}}, 
        {new:true} )
        
        let get_id = findName.author_id
         
    let author_Details = await UserModel.findOne({author_id : get_id}) 
    let final = {
       author_Name : author_Details.author_name,
       price :findName.price

    } 
    res.send({msg:final})


}



const findBook = async function (req, res) {
     
    let savedData= await BookModel.find({price :{$gte:50, $lte:100}}).select({author_id :1, _id:0})
     
     let final = savedData.map((x)=> x.author_id)

     
     let unique = [...new Set(final)]
      
     let author_Name = []

     for(let i=0;i<unique.length;i++){
        let name = await UserModel.findOne({author_id :unique[i]})
        author_Name.push(name.author_name)
     }
     
     res.send({msg:author_Name})



     
     
}




module.exports.createAuthor= createAuthor
module.exports.getBookById= getBookById
module.exports.findAndUpdate= findAndUpdate
module.exports.findBook= findBook