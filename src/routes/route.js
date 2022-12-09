const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const logger =require('../logger/logger')
const helper = require('../util/helper')
const formatter =require('../Validator/formatter')
const un= require('underscore')
const ab = require('lodash')
 
router.get('/test-me', function (req, res) {


    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('sabiha')
    console.log("email from employee module", employee.myEmail)
    



    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = un.first(days, 2)
    console.log(result)


   //------------------------------Problem -1 (String)-----------------------------------------------//

        logger.welcome("Nishant")
    

    //---------------------------------Problem -2 (printdate)----------------------------------------//
          helper.printDate();
          helper.printMonth();
          helper.getBatchInfo();


  /* ------------------------------ Problem 3 (upper/lower/trim) ---------------------------------------*/
         formatter.upper("bhushan bhuskade")
         formatter.lower("NISHANT BHUSKADE")
         formatter.trim ("         Backend Batch")

     //-----------------------------problem -4 (chunk)-------------------------------------------//
   
        const arr=["January","February", "March", "April", "May", "June" ,"July", "August", "September", "October" ,"November","December"]
        let month = [...arr]
        let result1 = ab.chunk(month, 3)
        console.log(result1)

   //---------------------------------------tail -----------------------------------//

       const odd = [1,3,5,7,9,11,13,15,17,19]
       let final = ab.tail(odd)
       console.log([...final])


   //-----------------------union--------------------------------------//

      const numbers= [[1,2],[2,3],[3,4],[4,5],[5,6]]
      let b = ab.union(...numbers);
      console.log(b)


    //-----------------------------------frompair---------------------------//

    const pair= [['Mahidra', "Thar"], ['Honda', "Activa"],['Bajaj', "pulser150"]]
    let result4 = ab.fromPairs(pair);
    console.log(result4)




    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;