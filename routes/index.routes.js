const router = require("express").Router();

//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
