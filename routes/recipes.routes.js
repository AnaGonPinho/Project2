//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

//const { route } = require("./auth.routes");
const router = require("express").Router();
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model");
const axios = require("axios");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");

//Display a list of recipes depending on the search

router.get("/recipes-list", (req, res, next) => {
  console.log(req.query);
  // console.log(req.query.ingredients)
  const { ingredients } = req.query;
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
    .then((response) => {
      let recipesList = response.data.hits;

      recipesList.forEach((element) => {
        element.id = element.recipe.uri.split("recipe_")[1];
      });
      console.log(recipesList);
      res.render("results/recipes-list", { recipesList, user:req.session.user });
    })
    .catch((err) => console.log("Error", err));
});

//Display one recipe in detail

router.get("/recipes-list/:recipeId", (req, res, next) => {
  const { recipeId } = req.params;
  console.log(req.params.recipeId);
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
    .then((response) => {
      console.log(
        "______________________________________________",
        response.data.recipe
      );
      let recipe = response.data.recipe;
      res.render("results/recipes-details", {recipe, user:req.session.user});
    })
    .catch((err) => console.log("Error", err));
});

router.post("/recipes-list/add-favorite", isLoggedIn, (req, res) => {
  const currentUser = req.session.user._id;
  let { uri, name, imgUrl } = req.body;
  console.log(req.body);

  uri = uri.split("recipe_")[1];
  User.findByIdAndUpdate(
    currentUser,
    { $push: { favoriteRecipes: { name, uri, imgUrl } } },
    { new: true }
  )
    .then((updatedUser) => {
      console.log(updatedUser);
      req.session.user = updatedUser
      res.redirect("/profile");
    })
    .catch((err) =>
      console.log("Error while adding a recipe to the favorites list: ", err)
    );
});

















module.exports = router;
