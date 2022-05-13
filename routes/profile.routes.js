const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Recipe = require("../models/Recipe.model");
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
  res.render("user/profile-create");
});

// edit my user
router.get("/profile/edit-user", (req, res, next) => {
    res.render("user/edit-user");
  });

router.post("/profile/edit-user", (req, res, next) => {
  res.render("user/edit-user");
});
