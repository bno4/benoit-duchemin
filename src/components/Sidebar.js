import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState("#202020");

  const makeBlur = () => {
    if (toggle === "#232323") {
      setToggle("#202020");
    } else {
      setToggle("#232323");
    }
    document.body.style.background = toggle;
  };
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" onClick={makeBlur} />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>

            <li>
              <nav>
                <label htmlFor="touch">
                  <p>Portfolio</p>
                </label>
                <input type="checkbox" id="touch" />
                <ul className="slide">
                  <NavLink to="/projet-1">
                    <li>Kasa *React</li>
                  </NavLink>
                  <NavLink to="/projet-2">
                    <li>Kanap *Vanilla JS</li>
                  </NavLink>
                  <NavLink to="/projet-3">
                    <li>OhMyFood *Sass</li>
                  </NavLink>
                  <NavLink to="/projet-4">
                    <li>La Panthère *SEO</li>
                  </NavLink>
                </ul>
              </nav>
            </li>

            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
