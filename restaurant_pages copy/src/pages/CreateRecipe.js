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
            <textarea className="preparation-detail"></textarea>
          </div>
        </div>
        <div className="create-recipe-col2"></div>
        <div className="create-recipe-col3"></div>
      </form>
    </div>
  );
}

export default CreateRecipe;
