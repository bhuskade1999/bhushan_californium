 const jwt = require("jsonwebtoken");


const middle1 = function (req,res,next )
{
    userId = req.params.userId

    let tokens = req.headers["x-auth-token"]
     if(!tokens){
        return res.status(404).send({ status:false, msg : "headers is not  avalable" })
     }

    let decodedToken = jwt.verify(tokens, "functionup");
        if(!decodedToken){
            return res.status(404).send({status:false,msg:"token is invalid"})
        }
           
    let tokenId = decodedToken.userId
    if(tokenId !== userId){
        return res.status(401).send({status:false, msg : "UserId Does Not Match With Token"})
    }

     next()
         
}
 




 module.exports.middle1 = middle1