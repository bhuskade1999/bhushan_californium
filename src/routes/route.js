const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');

/*---------------------------------- Problem -1 --------------------------------*/

router.get("/movies", function(req, res){
    const movies =[ "Bhaijaan","Dilwale","Chichhore","pushpa","K.G.F-2","Sultan"]  
    res.send(`  ${movies}`)
})

/* ------------------------------Problem - 2 & -3  ----------------------------------*/

     router.get("/movies/:indexNumber", function(req, res){
     let value = req.params.indexNumber
     let number = parseInt(value)
     const movies = [ "Golmal Again","Dilwale","Chichhore","pushpa","K.G.F-2","Sultan","Holiday"]
     let result ="Please Use Valid Index"
    function findindex(){
        for(let i = 0;i<movies.length;i++){
            if(i === number){
                result = movies[i]
                return result
            }

        }
        return result
    }

    res.send( findindex() )
     
})


/* ------------------------------------ Problem no - 4 ---------------------------------- */

router.get('/films', function(req, res){
const arr = [
    {
        id: 1,
        Name: "Rang De Basanti",
         
    },
    {
        id: 2,
        Name: "Dilwale",
         
    },
    {
        id: 3,
        Name: "Golmaal Return",
         
    },
    {
        id: 4,
        Name: "Pushpa",
         
    },
    {
        id: 5,
        Name :"Chhichore"
        
    },
];
let num = [...arr]
res.send(num)
 
})


/*------------------------------- Problem - 5 --------------------------------------- */
 

router.get('/films/:filmId', function(req, res){

     let value = req.params.filmId
     let num = parseInt(value)

const arr = [
    {
        id: 1,
        Name: "Sultaan",
         
    },
    {
        id: 2,
        Name: "Dilwale",
         
    },
    {
        id: 3,
        Name: "Golmaal Return",
         
    },
    {
        id: 4,
        Name: "Pushpa",
         
    },
    {
        id: 5,
        Name :"Chhichore"
        
    },
];

let result = "No movie exists with this id"
function myfunction(){
for(i =0; i<arr.length; i++ ){
    const profile = arr[i]
    if(profile.id === num)
      {
           result = profile.Name    
           return result
         
     }    
}
      return result
}
     res.send( `The Movie Name Is =>  ${ myfunction() } ` )
})

/*----------------------------------------------------------------------------*/







router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

module.exports = router;