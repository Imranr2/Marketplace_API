import { Outlet, Link } from "react-router-dom";

function Home(params) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ChefPage">Chef page</Link>
          </li>
          <li>
            <Link to="/AllRecipe">All recipe</Link>
          </li>
          <li>
            <Link to="/CreateRecipe">Create recipe</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
