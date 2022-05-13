const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Recipe = require("../models/Recipe.model");
const isLoggedIn = require("../middleware/isLoggedIn");

//AXIOS GET - EM TODAS AS ROUTES ONDE VAMOS PRECISAR DE NOSA API

// GET - Show all recipes list

router.get("/profile", (req, res, next) => {});
