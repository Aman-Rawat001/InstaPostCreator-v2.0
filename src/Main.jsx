import React from "react";

import LeftBox from "./LeftBox";

import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="navbar">
        <div className="left_links_navbar">
          <NavLink className="left_links" exact to="/">
            DESIGNS
          </NavLink>
          <NavLink className="last_link left_links" exact to="/edit">
            EDIT DESIGN
          </NavLink>
        </div>
        <h3>The Zo-World</h3>
      </div>
      <div className="responsive_links">
        <NavLink className="resp_left_links" exact to="/">
          DESIGNS
        </NavLink>
        <NavLink className="last_link resp_left_links" exact to="/edit">
          EDIT DESIGN
        </NavLink>
      </div>

      {/* <RightBox /> */}
      <div class="split right">
        <div class="centered">
          <h2>name </h2>
        </div>
      </div>
      <LeftBox />
    </>
  );
};

export default Main;
