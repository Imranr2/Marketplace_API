import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav>
      <div class="top_bar">
        <a href="#" class="company_logo_container">
          <img class="company_logo" src="image/logo.svg" alt="company_logo" />
        </a>
        <Link className="toHome" to="/">
          <img class="home_logo" src="image/Vector.svg" alt="home_logo" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
