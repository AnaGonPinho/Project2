# myFridge

## Description

## User Stories

- First 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.

- Second 500 - As a user I want to see a nice error page when the team screws it up so that I know that is not my fault.

- Third Homepage - As a user I want to be able to access the homepage with a brief description and a search bar to type the ingredients, to store the typed ingredients below the search bar, log in and sign up. Bonus: social authentication. Bonus: As a user, i want to filter my type of diet (Paleo, vegan, etc).

- Fourth Sign up - As a user I want to sign up on the web page so that I can add favourite recipes and most used ingredients to my list.

- Fifth Login - As a user I want to be able to log in on the web page so that I can get in my account.

- Sixth Logout - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.

- Seventh (If a User) - Profile: As a user I want to see the list of my favourites recipes and be able to click on each one to see the details. I want to be able to delete them.
  I also want to be able to see my own creations, be able to click on them to see the details and delete them.

- Eigth Profile create - I want to be able to create new “my creations recipes” and edit them.

- Nineth Edit user - As a user I want to be able to edit and delete my profile.

- Tenth Result - As a user I want to see the list of recipes which includes the ingredients that I added.

- Eleventh Recipe listing- As a user I want to see more details of the recipe with the link for the website that explains the preparation. I also want to be able to save that recipe as a favourite.

Method|Route|Description|Request-Body
GET | / | Main page route. Renders home index view.

GET | /login |Renders login form view.

POST | /login | Sends Login form data to the server. |{ email, password }

GET |/signup |Renders signup form view.

POST| /signup | Sends Sign Up info to the server and creates user in the DB |{ email, password }

GET |/profile/edit-user |Private route. Renders edit-user form view.

PUT | /profile/edit-user |Private route. Sends edit-user info to server and updates user in DB. |{ email, password, [firstName], [lastName], [imageUrl] }

DELETE|/profile/edit-user| Private route. Deletes user in DB.

GET|/profile/ |Private route. Render 3 sections: favorites + myCreations+ user information view.

DELETE |/profile/:recipeId |Private route. Deletes the existing favorite from the current user.

POST/PUT? |/profile/create |Private route. Create a new recipe only available for the user. | {recipeName, ingredient, description}

DELETE|/profile/:myCreations/delete |Private route. Delete a recipe in the user myCreations section

Post | /profile/:myCreations/edit|Private route. Edit a recipe in the user myCreations section |{recipeName, ingredient, description}

GET|/recipes-list |Renders recipes-list view.

GET|/recipes/details/:recipeId |Renders recipes-details view for the particular recipe.

POST |/recipes/detailsId/:recipeId/add-favorite | Private route. Adds a new favorite for the current user.?

## Models

### User model

**user**
{
name: {type: String}
email: { type: String, required: true },
password: { type: String, required: true },
favoriteRecipes [{ type: Schema.Types.ObjectId, ref: Recipes}],

}

**Recipes Details** ??????? Recipes + search?

{
id:
Type?
name: {type: String},
App\_ id?
ingredients: [ingredientsID]
Description: {type: String}
Image:

}

**Mycreations model**

{
recipeId:
RecipeName,
Ingredient,
description}
}
