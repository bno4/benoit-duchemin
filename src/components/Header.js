import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <h1>Benoît Duchemin</h1>
      </div>
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>ACCUEIL</li>
        </NavLink>

        <li className="nav-portfolio">
          PORTFOLIO
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Kasa (React)</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 2</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 3</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 4</li>
            </NavLink>
            <NavLink
              to="/projet-5"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 5</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>CONTACT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
