import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="navbar mcp-navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
      <NavLink className="navbar-brand" to="/"> MCP </NavLink>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/songs">Songs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/albums">Albums</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">Search</NavLink>
          </li>
        </ul>

        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Quick Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            Go
          </button>
        </form>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
