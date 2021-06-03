import React from "react";
import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Pro Cart
        </Link>
        <div class="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/mobiles">
                Mobile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watches">
                Watches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/laptops">
                Laptops
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
