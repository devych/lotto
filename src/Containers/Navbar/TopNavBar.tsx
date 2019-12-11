import React from "react";
import { Link } from "react-router-dom";
const TopNavBar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <h2 className="navbar-brand">
        <Link to="/">logo</Link>
      </h2>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Mainpage
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              LottoCollection
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              LottoShooter
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
