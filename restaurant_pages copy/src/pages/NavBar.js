import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav>
      <div class="top_bar">
        <div class="company_logo_container">
          <img class="company_logo" src="image/logo.svg" alt="company_logo" />
        </div>
        <div className="topbar-flex-right">
          <div className="homelogo-link-container">
            <Link className="toHome" to="/">
              <img class="home_logo" src="image/Vector.svg" alt="home_logo" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
