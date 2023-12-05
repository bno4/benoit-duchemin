import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>
            {" "}
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
