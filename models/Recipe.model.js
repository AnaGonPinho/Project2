 const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const recipeSchema = new Schema({
  label: {
    type: String,
    required: true,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  image: {
    type: String,
    required: true,
    default:
      " https://cdn.xxl.thumbs.canstockphoto.com.br/garfo-armando-lugar-faca-prato-vazio-%C3%ADcone-desenho_csp67400895.jpg",
  },

  source: {
    type: String,
  },

  url: {
    type: String,
  },

 /*  yield: {
    type: integer, 
  }, */

  healthLabels: {
    Array: [String],
  },

  ingredientLines: {
    Array: [String],
  },

  preparation: {
    type: String,

  }


});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
 