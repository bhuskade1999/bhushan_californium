const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MiddleWare = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUsers  )


router.post("/login", userController.loginUser)


router.get("/getUser/:userId", MiddleWare.middle1, userController.getUser)


router.put("/updateUser/:userId",MiddleWare.middle1, userController.updateUser)

 router.delete("/deleteUser/:userId" ,MiddleWare.middle1 ,userController.deleteUser)


//router.get("/fetchUser" ,userController.fetchUser)

module.exports = router;