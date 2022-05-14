//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

//const { route } = require("./auth.routes");
 const router = require("express").Router();
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model"); 

//Display one recipe in detail

/* router.get("/recipes/details/:recipeId ", (req, res, next) => {
    const { id } = req.params;
    console.log(id);
  
    axios
      .get(`https://api.edamam.com/api/recipes/v2?q=${q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
      })
      .then((results) => {
        console.log(results.data);
        res.render("results/recipe-detail");
      })
      .catch((err) => next(err));
  });  */

  //OU?

/* router.get('/books/:bookId', (req, res, next) => {
    const { bookId } = req.params;
   
    Book.findById(bookId)
      .then(theBook => res.render('books/book-details.hbs', { book: theBook }))
      .catch(error => {
        console.log('Error while retrieving book details: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  }); */
module.exports= router; 