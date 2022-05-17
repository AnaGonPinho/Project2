const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Recipe = require("../models/Recipe.model");  

 const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
 

//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

// GET - Show all recipes list
 
router.get("/profile", (req, res, next) => {
  res.render("user/profile");
});

// create my recipe
router.get("/profile/create", (req, res, next) => {
    res.render("user/profile-create");
  });

router.post("/profile/create", (req, res, next) => {
   const { label, image, source, url, healthLabels, ingredientLines, preparation } = req.body;
  Recipe.create({ label, image, source, url, healthLabels, ingredientLines, preparation })
  .then(newrecipe => console.log(`New recipe created: ${newrecipe.label}.`))
  .catch(error => next(error));
  res.render("user/profile"); 
});


//Edit my recipe 

router.get("/profile/:recipeId/edit"), (req,res,next) => {
  const {recipeId} = req.body;

    Recipe.findByIdAndUpdate(recipeId, { label, image, source, url, healthLabels, ingredientLines, preparation }, { new: true })
    .then(updatedRecipe => res.redirect(`/profile/${updatedRecipe.id}`)) 
    .catch(error => next(error));
  }
  

// edit my user
router.get("/profile/edit-user", (req, res, next) => {
    res.render("user/edit-user");
  });


router.post("/profile/edit-user", (req, res, next) => {
  res.render("user/edit-user");
}); 

/* router.post('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
  const { title, description, author, rating } = req.body;
 
  Book.findByIdAndUpdate(bookId, { title, description, author, rating }, { new: true })
    .then(updatedBook => res.redirect(`/books/${updatedBook.id}`)) // go to the details page to see the updates
    .catch(error => next(error));
});
  */

//DELETE 

/* router.post('/books/:bookId/delete', (req, res, next) => {
  const { bookId } = req.params;
 
  Book.findByIdAndDelete(bookId)
    .then(() => res.redirect('/books'))
    .catch(error => next(error));
});
  */

module.exports= router;