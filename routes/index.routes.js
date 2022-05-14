const router = require("express").Router();
const mongoose = require("mongoose");

//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

/* GET home page */
router.get("/", (req, res, next) => {
/*  const { q } = req.query;
console.log(process.env.APP_KEY);
 
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?q=${q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
    .then((results) => {
      console.log(results); */
      res.render("index");
    })
   /*  .catch((err) => next(err));
});  */
 
  /*  res.render("results/recipes-list", { }); */



  
module.exports = router;
