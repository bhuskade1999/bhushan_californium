const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://nishant55:1234@nishant99.et97kst.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use(
        function(req,res,next){
           let ip = req.ip
           let url = req.originalUrl
           let date = new Date()
           let Dates = date.getDate()
           let Months = date.getMonth()+1
           let year =  date.getFullYear()
           let hour = date.getHours()
           let minute = date.getMinutes()
           let second = date.getSeconds()
           

          console.log(Dates+"-"+Months+"-"+year+","+hour+":"+minute+":"+second)  
          console.log(ip)     
          console.log(url)     
    
     next()
        }
    );



 app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
