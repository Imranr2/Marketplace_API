import React from "react";
import { GrFormClose } from "react-icons/gr";

//This function is only for rendering, the data and method will come from CreateRecipe.js
// if the input is empty, the ingredient box will be rendered by below div
// required: 1. remove method 2. ingredient list from CreateRecipe() function

function IngredientList(props) {
  //if the ingredient list is empty return no-ingredent image
  if (props.ingredients.length == 0) {
    return (
      <div className="no-ingredient-content">
        <img
          className="no-ingredient-img"
          src="./image/empty states.png"
          alt="No ingredient yet"
        />
        <p>No ingredients yet</p>
        <p>add ingredients using the input box</p>
      </div>
    );
  }
  return props.ingredients.map((ingredient, index) => (
    <div>
      <p>{ingredient}</p>
      <GrFormClose
        className="remove-ingredient-icon"
        onClick={() => props.removeIngredient(ingredient)}
      />
    </div>
  ));
}

export default IngredientList;
