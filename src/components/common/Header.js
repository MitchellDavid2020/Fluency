import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const activeStyle = { color: "#f15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/Week1" activeStyle={activeStyle}>
        Week 1
      </NavLink>
      {" | "}
      <NavLink to="/week2" activeStyle={activeStyle}>
        Week 2
      </NavLink>
      {" | "}
      <NavLink to="/week3" activeStyle={activeStyle}>
        Week 3
      </NavLink>
      {" | "}
      <NavLink to="/week4" activeStyle={activeStyle}>
        Week 4
      </NavLink>
      {" | "}
      <NavLink to="/week5" activeStyle={activeStyle}>
        Week 5
      </NavLink>
      {" | "}
      <NavLink to="/week6" activeStyle={activeStyle}>
        Week 6
      </NavLink>
      {" | "}
      <NavLink to="/week7" activeStyle={activeStyle}>
        Week 7
      </NavLink>
      {" | "}
      <NavLink to="/week8" activeStyle={activeStyle}>
        Week 8
      </NavLink>
      {" | "}
      <NavLink to="/week9" activeStyle={activeStyle}>
        Week 9
      </NavLink>
      {" | "}
      <NavLink to="/week10" activeStyle={activeStyle}>
        Week 10
      </NavLink>
      {" | "}
      <NavLink to="/final_app" activeStyle={activeStyle}>
        Final App
      </NavLink>
    </nav>
  );
};

export default Header;
