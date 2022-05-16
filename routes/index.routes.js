const router = require("express").Router();
const mongoose = require("mongoose");


router.get("/", (req, res, next) => {
res.render("index");
    })
 



  
module.exports = router;
