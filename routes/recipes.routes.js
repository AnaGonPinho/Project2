//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

//const { route } = require("./auth.routes");
 const router = require("express").Router();
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model"); 
const axios = require("axios");

//Display a list of recipes depending on the search

router.get("/recipes-list", (req, res, next) => {
  console.log(req.query)
 // console.log(req.query.ingredients)
  const { ingredients } = req.query
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
  .then((response)=> {
  /*   let uriSplit=[]
     uriSplit = response.data.hits.recipe.uri.split('recipe_')[1]
    
    response.data.hits.forEach(() =>{ console.log(uriSplit)} ) 
    //
    console.log(recipeId)
    console.log(response.data.hits) */
  res.render("results/recipes-list", {recipesList : response.data.hits}) 

  })
  .catch((err)=> console.log('Error', err))
})
 
 
 //Display one recipe in detail
 
 
 router.get("/recipes-list/:recipeId", (req, res, next) => {
   const {recipeId} = req.params;
   console.log(req.params.recipeId)
   axios.get(`https://api.edamam.com/api/recipes/v2?/{recipeId}&type=public&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
   .then((response)=> {
    console.log(response.data.hits)
   res.render("results/recipes-details")
  })
  .catch((err)=> console.log('Error', err))
 })
 
 
 
 
 
 
 
 
 
  /*  const { q } = req.query;
  console.log(process.env.APP_KEY);
   
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?q=${q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
      )
      .then((results) => {
        console.log(results); */
       
     
     /*  .catch((err) => next(err));

router.get("/recipes/recipeID")

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