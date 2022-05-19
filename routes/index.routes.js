const router = require("express").Router();
const mongoose = require("mongoose");


router.get("/", (req, res, next) => {
res.render("index", {user:req.session.user});
    })
 



  
module.exports = router;
