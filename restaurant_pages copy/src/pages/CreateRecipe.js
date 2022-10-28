import React, { useState } from "react";
import IngredientList from "./IngredientList";

import MyHeader from "./MyHeader";
import NavBar from "./NavBar";

// This function is redering the creat recipe page and handle the entire create recipe form
//Ingredient list need to be a state of this funcion

function CreateRecipe() {
  // handle ingredients list
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const handleIngredientChange = (event) => {
    setNewIngredient(event.target.value);
  };

  //add new element to the list
  const addIngredientHandler = (event) => {
    if (!newIngredient || /^\s*$/.test(newIngredient)) return;
    event.preventDefault();
    const updatedList = [newIngredient, ...ingredients];
    setIngredients(updatedList);
    setNewIngredient("");
    console.log(ingredients);
  };
  // delete element from the list
  const removeIngredient = (ingredient) => {
    let updatedList = ingredients.filter(
      (listIngredient) => listIngredient !== ingredient
    );

    setIngredients([...updatedList]);
    console.log(ingredients);
  };
  // ==============================================================

  return (
    <div>
      <NavBar />
      <MyHeader headerText={"create recipe"} />
      <form className="create-recipe-form">
        <div className="create-recipe-col1">
          <div className="create-recipe-col1-row1">
            <label for="recipe-name">Recipe Name</label>
            <input id="recipe-name" type="text" placeholder="Recipename" />
          </div>
          <div className="create-recipe-col1-row2">
            <textarea
              className="create-recipe-description"
              placeholder="A short description of the recipe ..."
            ></textarea>
          </div>
          <div className="create-recipe-col1-row3">
            <label>Preparation detail</label>
            <textarea
              className="preparation-detail"
              placeholder="List steps on how to prepare this dish..."
            ></textarea>
          </div>
        </div>
        <div className="create-recipe-col2">
          <div className="create-recipe-col2-row1">
            <label for="ingredient-name">Ingredient Name</label>
            <input
              type="text"
              id="ingredient-name"
              value={newIngredient}
              onChange={handleIngredientChange}
            />
            <button onClick={addIngredientHandler}>add to recipe</button>
          </div>
          <div className="create-recipe-col2-row2">
            <IngredientList
              ingredients={ingredients}
              removeIngredient={removeIngredient}
            />
          </div>
          <div className="create-recipe-col2-row3">
            <div className="create-recipe-col2-row3-content">
              <label for="create-recipe-price">Set price of the dish</label>
              <input type="text" id="create-recipe-price" placeholder="CAD$" />
            </div>
          </div>
        </div>
        <div className="create-recipe-col3">
          <div className="create-recipe-col3-row1">
            <label>Product Image</label>
            <div className="product-img-container">
              <img src="./image/Property 1=no image.png" alt="none"></img>
              <p>No Image Selected</p>
              <button className="browse-img-btn">Browse</button>
            </div>
          </div>
          <div className="create-recipe-col3-row2"></div>
          <div className="create-recipe-col3-row3">
            <button className="add-recipe-btn">Add recipe</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
