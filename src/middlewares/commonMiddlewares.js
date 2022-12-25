
const middle1 = function (req,res,next){
 let isFreeAppUser = req.headers['isfreeappuser']

 if(isFreeAppUser){
    next()
 }
else{
   return  res.send({ msg : "isFreeAppUser is Missing"})
}

}




module.exports.middle1 = middle1



//-----------------------------------------------------------------------------------------------


 
 



 