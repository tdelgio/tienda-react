import React from "react";

import { NavLink } from "react-router-dom";

const StyledLink = ({ setDisplay, to, text }) => {
  return (
    <NavLink
      onClick={() => setDisplay("hidden")}
      to={to}
      activeClassName="border-b-2 border-gray-400 font-bold"
    >
      {text}
    </NavLink>
  );
};

const NavItemsMobile = ({ display, setDisplay }) => {
  return (
    <div>
      <div className={display}>
        <div className="absolute left-0 top-14 right-0  w-full flex flex-col rounded-sm shadow-md space-y-6 bg-gray-100 p-4 tracking-tight">
          <StyledLink
            setDisplay={setDisplay}
            to="/category/panaderia"
            text="Panadería"
          />
          <StyledLink
            setDisplay={setDisplay}
            to="/category/antojos"
            text="Antojos"
          />
          <StyledLink setDisplay={setDisplay} to="/category/mate" text="Mate" />
          <StyledLink
            setDisplay={setDisplay}
            to="/category/pizzas"
            text="Pizzas"
          />
        </div>
      </div>
    </div>
  );
};

export default NavItemsMobile;
