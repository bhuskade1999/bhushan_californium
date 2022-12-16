const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const BookModel = require("../models/bookModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/*---------------------------Problem ----------------------------------------*/

router.post("/createSchema", BookController.createSchema  )

router.get("/getSchema", BookController.getSchema)



/*----------------------------------------------------------------------------*/


router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)





module.exports = router;