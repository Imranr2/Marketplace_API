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
            <Link to="/chefPage">Chef page</Link>
          </li>
          <li>
            <Link to="/allRecipe">All recipe</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
