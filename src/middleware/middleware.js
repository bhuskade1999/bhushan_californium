const jwt = require("jsonwebtoken");


const middle1 = function (req,res,next )
{
    let tokens = req.headers["x-auth-token"]
     if(!tokens){
        return res.send({ status:false, msg : "headers is not  avalable" })
     }else{
        let decodedToken = jwt.verify(tokens, "functionup");
        if(decodedToken){
            next()
        }else{
            return res.send({status:false,msg:"token is invalid"})
        }
     }

}
module.exports.middle1 = middle1