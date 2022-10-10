import { Link } from "react-router-dom";
function AllRecipe(params) {
  return (
    <div>
      <nav>
        <div class="top_bar">
          <a href="#" class="company_logo_container">
            <img class="company_logo" src="image/logo.svg" alt="company_logo" />
          </a>
          <Link to="/">
            <img class="home_logo" src="image/Vector.svg" alt="home_logo" />
          </Link>
        </div>
      </nav>

      <div class="mid-section">
        <section class="lhs">
          <h1 class="lhs_obj all_recipe_txt">All recipes</h1>
          <button class="lhs_obj all-recipe-create-recipe-btn">
            Create recipes
          </button>
          <div class="line-1"></div>
          <div class="scrollable-bg">
            <div class="recipe-container">
              <div class="card">
                <a href="#" id="drop-card">
                  <img
                    class="cross-logo"
                    src="image/drop-card-icon.svg"
                    alt="delete card"
                  />
                </a>
                <div class="card-image">
                  <img src="image/noodle.svg" alt="food image" />
                </div>
                <h2 class="title">Title</h2>
                <p class="description">description</p>
              </div>
              <div class="card">
                <a href="#" id="drop-card">
                  <img
                    class="cross-logo"
                    src="image/drop-card-icon.svg"
                    alt="delete card"
                  />
                </a>
                <div class="card-image">
                  <img src="image/noodle.svg" alt="food image" />
                </div>
                <h2 class="title">Title</h2>
                <p class="description">description</p>
              </div>
              <div class="card">
                <a href="#" id="drop-card">
                  <img
                    class="cross-logo"
                    src="image/drop-card-icon.svg"
                    alt="delete card"
                  />
                </a>
                <div class="card-image">
                  <img src="image/noodle.svg" alt="food image" />
                </div>
                <h2 class="title">Title</h2>
                <p class="description">description</p>
              </div>
              <div class="card">
                <a href="#" id="drop-card">
                  <img
                    class="cross-logo"
                    src="image/drop-card-icon.svg"
                    alt="delete card"
                  />
                </a>
                <div class="card-image">
                  <img src="image/noodle.svg" alt="food image" />
                </div>
                <h2 class="title">Title</h2>
                <p class="description">description</p>
              </div>
              <div class="card">
                <a href="#" id="drop-card">
                  <img
                    class="cross-logo"
                    src="image/drop-card-icon.svg"
                    alt="delete card"
                  />
                </a>
                <div class="card-image">
                  <img src="image/noodle.svg" alt="food image" />
                </div>
                <h2 class="title">Title</h2>
                <p class="description">description</p>
              </div>
            </div>
          </div>
        </section>
        <aside class="side-bar">
          <div class="side-bar-content">
            <img
              class="no-recipe-logo"
              src="image/no_recipes.svg"
              alt="No recipes"
            />
            <p>Nothing to see here</p>
            <p>Click on a recipe to see its detail</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AllRecipe;
