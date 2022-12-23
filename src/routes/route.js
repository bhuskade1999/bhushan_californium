const express = require('express');
const router = express.Router();
 
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
/*-----------------------------------------------------------------------*/

router.get("/check1", BookController.check1  )

router.get("/check2", BookController.check2  )



module.exports = router;