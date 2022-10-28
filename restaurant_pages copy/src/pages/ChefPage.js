import { Link } from "react-router-dom";
import MyHeader from "./MyHeader";
import NavBar from "./NavBar";

function ChefPage(params) {
  return (
    <div>
      <NavBar />
      <MyHeader headerText={"Welcome Back, Chef"} />
      <h2 className="what-would-you-like-to-do">
        What would you like to do today?
      </h2>
      <section className="mid_section">
        <div className="menu_panel">
          <h2 id="recipe_header">Recipes</h2>
          <img
            className="recipe_log"
            src="image/Property 1=recipes.svg"
            alt="Recipe_logo"
          />

          <Link to="/AllRecipe">
            <button className="view-recipe-btn">View Recipes</button>
          </Link>

          <button className="create-recipe-btn">Create Recipe</button>
        </div>
        <div className="order_panel">
          <h2 id="recipe_header">Orders</h2>
          <img
            className="orders_logo"
            src="image/Property 1=orders.svg"
            alt="Order logo"
          />
          <button className="view-orders-btn">View orders</button>
        </div>
      </section>
    </div>
  );
}

export default ChefPage;
