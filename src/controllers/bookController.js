const BookModel= require("../models/bookModel")

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find() 
    res.send({msg: allBooks})
    
}


/*----------------------------------------- Problem no -1--------------------------*/

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
/*------------------------------------ problem no -2---------------------------------------------------*/

const BookList= async function (req, res) {
      
    let allBooks= await BookModel.find().select({ bookName : 1, authorName: 1, _id : 0})
    res.send({msg: allBooks})
    
}


/*----------------------------------problem no -3------------------------------------------------------*/

const getBooksInYear= async function (req, res) {
    years =req.query.years
    let allBooks= await BookModel.find({ year:years})  
    res.send({msg: allBooks})
   
}

/*-----------------------------------problem no -4 -------------------------------------------------------*/

const getParticularBooks= async function (req, res) {
    input =req.query.input
    let allBooks= await BookModel.find({bookName :input }).select({ bookName : 1, year: 1, _id : 0})
    res.send({msg: allBooks})
   
}

/*-------------------------------------problem -5 --------------------------------------------------------*/


const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({price: {indianPrice:{ $in : [ "100INR","250INR","500INR" ] } } })
   res.send({msg: allBooks})

}

/*--------------------------------------------------------------------------------------------*/

const getRandomBooks= async function (req, res) {   
    let allBooks= await BookModel.find({ $or:[ {stockAvailable : true } , {totalPages :{$gt :500}}] }) 
        res.send({msg: allBooks})
        
    }
 
/*----------------------------------------------------------------------------------------------*/

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.BookList= BookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks