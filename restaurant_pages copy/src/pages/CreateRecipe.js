import React from "react";
import MyHeader from "./MyHeader";
import NavBar from "./NavBar";

function CreateRecipe() {
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
            <input type="text" id="ingredient-name" />
          </div>
          <div className="create-recipe-col2-row2">
            <div className="no-ingredient-content">
              <img
                className="no-ingredient-img"
                src="./image/empty states.png"
                alt="No ingredient yet"
              />
              <p>No ingredients yet</p>
              <p>add ingredients using the input box</p>
            </div>
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
              <img src="./image/Property 1=no image.png"></img>
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
