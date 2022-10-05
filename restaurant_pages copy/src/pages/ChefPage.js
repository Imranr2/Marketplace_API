function ChefPage(params) {
  return (
    <div>
      <nav>
        <div className="top_bar">
          <a href="#" className="company_logo_container">
            <img
              className="company_logo"
              src="image/logo.svg"
              alt="company_logo"
            />
          </a>

          <img className="home_logo" src="image/Vector.svg" alt="home_logo" />
        </div>
      </nav>

      <section>
        <h1 id="welcome_sentence">Welcome back,</h1>
        <div className="line-1"></div>
        <h2 id="asking_action">What would you like to do today?</h2>
      </section>

      <section className="mid_section">
        <div className="menu_panel">
          <h2 id="recipe_header">Recipes</h2>
          <img
            className="recipe_log"
            src="image/Property 1=recipes.svg"
            alt="Recipe_logo"
          />

          <button className="view-recipe-btn">View Recipes</button>

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
