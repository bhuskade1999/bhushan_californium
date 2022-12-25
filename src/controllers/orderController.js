const { count } = require("console")
const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel= require("../models/userModel")

const createOrder= async function (req, res) { 
    let { userId,  productId, amount, isFreeAppUser, date } =  req.body
    let result={}

    //to find price of product 
    let findDeatails = await ProductModel.findOne({_id:productId})
    get_Price = findDeatails.price

    //  to find the balance of user
    let findUsers = await UserModel.findOne({_id:userId})
    let get_Balance = findUsers.balance 

    //to Check the user is valid or not
    let checkUser = await UserModel.find({_id :userId})
    if(!checkUser){
        return res.send({msg :" UserId Is Invalid "})
       }

    // to Check the product is valid or not
    let checkProduct = await ProductModel.find({_id:productId}) 
    if(!checkProduct){
           return res.send({msg :" ProductId Is Invalid "})
       }

 // to check the headers isFreeAppUser is True or Not
    if(req.headers.isfreeappuser === "true"){
        req.body.amount = 0
        req.body.isFreeAppUser = req.headers.isfreeappuser
        let savedData = await OrderModel.create(req.body)
         result = savedData
      }

    

// to chceck the headers isFreeAppUser is false  or Not
    if(req.headers.isfreeappuser === "false") {
        if(get_Balance < get_Price) { //chech balance is sufficient or Not
            result = "User Has Insuffienct Balance"
        } 
         else {
                   //if user Balance is Suffiencient 
           let difference = get_Balance - get_Price
           let update_Balance = await UserModel.findOneAndUpdate({_id:userId} , {$set:{balance :difference} } , {new :true} ) 
           req.body.amount = get_Price
           req.body.isFreeAppUser = req.headers.isfreeappuser
           let savedData = await OrderModel.create(req.body)
           result = savedData
        }
      }

        // to send final responce to the client
       res.send({msg :result})

     
}



module.exports.createOrder = createOrder

//-------------------------------------end-------------------------------------------------------------------------------





 


 
 




 
