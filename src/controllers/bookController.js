const { find } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
 

const createBook= async function (req, res) {

    const{name,author,price,ratings,publisher} = req.body
     
    if(!author)   {
       return  res.send({status: false, massage: 'Please Enter Author Details'})
    }

     if(!publisher)   {
       return  res.send({status: false, msg: 'Please Enter Publisher Details'})
    }

    // it will strore all Authors details of using _id
     let authorDetails = await authorModel.findOne({_id : author})

     if(!authorDetails)   {
       return  res.send({status: false, msg: 'Authors Details Not Exist '})
    }

    // it will strore all Publisher details of using _id
    let publisherDetails = await publisherModel.findOne({_id : publisher})

    if(!publisherDetails)   {
       return  res.send({status: false, msg: 'publisher Details Not Exist '})
    }

    // if All  condtion are satisfied then it will store the details in Db
    let bookCreated = await bookModel.create(req.body)
    res.send({data: bookCreated})

}
 
const getBook = async function(req,res){
    let saveData= await bookModel.find().populate("author").populate("publisher")
    res.send({msg:saveData})

}
/*--------------------------------------------------------------------*/

  const updateBook = async  function (req,res){

   let savedata = await publisherModel.find({name:{ $in:[ "Penguin", "HaperCollins" ]}})

   let get_id =savedata.map((x) => x._id )
 
   let bookData = await bookModel.updateMany(
    {publisher :{ $in : get_id }},
     {$set:{ isHardCover : true}},
     {new:true})  
     let showData= await bookModel.find( {publisher :{ $in : get_id }})

    res.send({ msg: showData})

  }
  //---------------------------------------------------------------------------
   
   const updateAuthors = async function(req,res){

     /* to find authors rating is greater than 3.5 */
    findAuthors = await authorModel.find({rating:{$gt :3.5}})
    //res.send({msg:findAuthors})

    get_id = findAuthors.map((x) => x._id)
    //res.send({msg:get_id})
   
    updateprice = await bookModel.updateMany({author :{ $in : get_id }},{ $inc: { price :10 }} )
    //res.send({msg: updateprice})
         
       
       res.send({msg: findAuthors})

   }


 module.exports.createBook= createBook

 module.exports.getBook= getBook

 module.exports.updateBook = updateBook

 module.exports.updateAuthors = updateAuthors