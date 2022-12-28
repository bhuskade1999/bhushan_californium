const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/* ======================================================================== */

const createUsers = async function (req,res){
  try{
  let data = req.body
  let savedata = await userModel.create(data)
  res.status(201).send({msg: savedata})

  }
  catch(error){
    res.send({msg:error.message})
  }




}

/* ======================================================================== */
const loginUser = async function(req,res){
  try{
  let userId = req.body.userId
  let password1 = req.body.password1
  let  checkuser = await userModel.findOne({emailId: userId, password:password1})
  
   if(!checkuser){
       return res.status(404).send({status :false , msg : "User Not Found"})
   }
      let token = jwt.sign({userId: checkuser._id.toString(),},"functionup" );
      res.send({ status: true, token: token });

  }catch(error){
    res.send({msg:error.message})
  }



};

/* ======================================================================================================== */


const getUser = async function (req,res){ 

  let userId = req.params.userId
  let savedata =await userModel.findById(userId)
  if(!savedata){
  return res.send({status:false , msg:"User Not Found"})
 }
      res.send({msg : savedata})
}


/* ======================================================================== */

const updateUser = async function (req,res){
userId =req.params.userId
data =req.body
let savedata = await userModel.findOneAndUpdate({_id:userId},data,{new:true})
 

}

/* ====================================================================================================== */

const deleteUser = async function(req,res){
  try{
  userId = req.params.userId
  let savedata = await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted :true}},{new:true})
  res.send({msg :savedata})
  }
catch(error){



}






}


/* ===================================================================================================================== */

 

//module.exports.fetchUser = fetchUser
 module.exports.deleteUser = deleteUser
module.exports.updateUser = updateUser


module.exports.loginUser = loginUser
module.exports.createUsers = createUsers;
module.exports.getUser = getUser;
 