const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

//----------------problem -1 ---------------------------

const createBook= async function (req, res) {

    let data =req.body
    let allBooks= await  BookModel.create(data)  
    res.send({msg:allBooks}) 
}

 
//--------------------------problem -2 -----------------------

const bookList = async function(req,res){

     let savedata = await bookModel.find().select({bookName:1, authorName:1,_id:0})
     res.send({msg:savedata})
} 


//-------------------------problem -3 --------------------------------


const getBooksInYear =async function(req,res){

     let year = req.body.year
     let savedata = await bookModel.find({year :year})
     res.send({msg:savedata})

}

/*---------------------------------problem -4 -------------------------------------------------------------*/

const getParticularBooks =async function(req,res){

 let name = req.body.name
 let years = req.body.years
 let savedata = await bookModel.find({$or:[{bookName :name},{year :years}]})
 res.send({msg:savedata})

}

/*---------------------------------problem -5 -------------------------------------------------------------*/

const getXINRBooks =async function(req,res){

     let savedata = await bookModel.find({'prices.indianPrice':{$in:["100INR","250INR","500INR"]}})
     res.send({msg:savedata})
}

/*---------------------------------problem - 6 -------------------------------------------------------------*/


const getRandomBooks =async function(req,res){

     let savedata =await bookModel.find({ $or:[ {stockAvailable:true}, {totalPages :{$gt : 500 } } ] })
     res.send({msg :savedata})

}




module.exports.createBook = createBook

module.exports.bookList = bookList

module.exports.getBooksInYear = getBooksInYear
 
module.exports.getParticularBooks = getParticularBooks

module.exports.getXINRBooks = getXINRBooks

module.exports.getRandomBooks = getRandomBooks
