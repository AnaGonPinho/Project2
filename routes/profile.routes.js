const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Recipe = require("../models/Recipe.model");
const fileUploader = require("../config/cloudinary.config");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

// GET - Show all recipes list

router.get("/profile", (req, res, next) => {
  const user = req.session.user;
  console.log(user);
  User.findById(user._id)
    .populate("createdRecipes")
    .then((user) => {
      res.render("user/profile", { user });
    });
});

// create my recipe
router.get("/profile/create", (req, res, next) => {
  res.render("user/profile-create");
});

router.post(
  "/profile/create",
  fileUploader.single("recipe-cover-image"),
  (req, res, next) => {
    const { label, image, healthLabels, ingredientLines, preparation } =
      req.body;

    console.log(req.body);
    Recipe.create({
      label,
      image: req.file.path,
      healthLabels,
      ingredientLines,
      preparation,
    })
      .then((newrecipe) => {
        return User.findByIdAndUpdate(req.session.user._id, {
          $push: { createdRecipes: newrecipe._id },
        }).then(() => {
          res.redirect("/profile");
        });
      })

      .catch((error) => next(error));
  }
);

//Edit my recipe

router.get("/profile/:recipeId/edit", (req, res, next) => {
  const { recipeId } = req.params;

  Recipe.findById(recipeId)
    .then((recipeToEdit) =>
      res.render("user/profile-edit", { recipe: recipeToEdit })
    )
    .catch((err) => next(err));
});

router.post("/profile/:recipeId/edit", (req, res, next) => {
  const { recipeId } = req.params;
  Recipe.findByIdAndUpdate(
    recipeId,
    { label, image, healthLabels, ingredientLines, preparation },
    { new: true }
  )
    .then((updatedRecipe) => res.redirect(`/profile/${updatedRecipe.id}`))
    .catch((error) => next(error));
});
//Delete my Recipe

router.post("/profile/:recipeId/delete", (req, res, next) => {
  const { recipeId } = req.params;

  Recipe.findByIdAndDelete(recipeId)
    .then(() => res.redirect("/profile"))
    .catch((error) => next(error));
});

// edit my user
router.get("/profile/edit-user", (req, res, next) => {
  res.render("user/edit-user");
});

router.post("/profile/edit-user", (req, res, next) => {
  res.render("user/edit-user");
});

module.exports = router;
