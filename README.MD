# myFridge

## Description

## User Stories

- First 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.

- Second 500 - As a user I want to see a nice error page when the team screws it up so that I know that is not my fault.

- Third Homepage - As a user I want to be able to access the homepage with a brief description and a search bar to type the ingredients, log in and sign up. 

- Fourth Sign up - As a user I want to sign up on the web page so that I can add favourite recipes and most used ingredients to my list.

- Fifth Login - As a user I want to be able to log in on the web page so that I can get in my account.

- Sixth Logout - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.

- Seventh (If a User) - Profile: As a user I want to see the list of my favourites recipes and be able to click on each one to see the details. I want to be able to delete them.
  I also want to be able to see my own creations, be able to click on them to see the details and delete them.

- Eigth Profile create - I want to be able to create new “my creations recipes” and edit them.


- Nineth Result - As a user I want to see the list of recipes which includes the ingredients that I added.

- Tenth Recipe listing- As a user I want to see more details of the recipe with the link for the website that explains the preparation. I also want to be able to save that recipe as a favourite.

Method|Route|Description|Request-Body |
GET | / | Main page route. Renders home index view. |

GET | /login |Renders login form view. |

POST | /login | Sends Login form data to the server. |{ email, password } |

GET |/signup |Renders signup form view. |

POST| /signup | Sends Sign Up info to the server and creates user in the DB |{ email, password } |

GET|/profile/ |Private route. Render 2 sections: favorites + myCreations |

DELETE |/profile/:recipeId |Private route. Deletes the existing favorite from the current user. |

POST |/profile/create |Private route. Create a new recipe | {recipeName, ingredient, description} |

DELETE|/profile/:myCreations/delete |Private route. Delete a recipe in the user myCreations section |

Post | /profile/:myCreations/edit | Private route. Edit a recipe in the user myCreations section |{ label, ingredientLines, healthLabels, preparation } |

GET|/recipes-list |Renders recipes-list view. |

GET|/recipes/details/:recipeId |Renders recipes-details view for the particular recipe. |

POST |/recipes/detailsId/:recipeId/add-favorite | Private route. Adds a new favorite for the current user.|

## Models

### User model

**user**

const userSchema = new Schema({
  name: {
    type: String,
     unique: true 

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  favoriteRecipes: [
    {
      name: String,
      imgUrl: String,
      uri: String,
    },
  ],
  createdRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

const User = model("User", userSchema);

**Recipe Model**

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
      " https://cdn.xxl.thumbs.canstockphoto.com.br/garfo-armando-lugar-faca-prato-vazio-%C3%ADcone-desenho_csp67400895.jphttps://www.kindpng.com/picc/m/29-299742_rice-bowl-filled-icon-vector-rice-bowl-icon.png",
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
    type: [String],
  },

  ingredientLines: {
    type: [String],
  },

  preparation: {
    type: String,
  },
});

const Recipe = model("Recipe", recipeSchema);


