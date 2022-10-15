import NavBar from "./NavBar";
function AllRecipe(params) {
  return (
    <div>
      <NavBar />

      <div class="mid-section">
        <section class="lhs">
          <h1 class="lhs_obj all_recipe_txt">All recipes</h1>
          <button class="lhs_obj all-recipe-create-recipe-btn">
            Create recipes
          </button>

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
