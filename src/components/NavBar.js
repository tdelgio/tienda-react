import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { CartWidget, MenuIcon, CloseIcon } from "./Icons";
import { Logo } from "./Logo";
import NavItemsMobile from "./NavItemsMobile";

const NavBar = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    //Desktop

    <div className="fixed  block top-0 w-full shadow-md z-50 bg-gray-50">
      <div className="relative flex items-center px-4 py-2">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="flex items-center ml-4 lg:ml-8 space-x-4 text-md tracking-normal font-normal">
          <div className="hidden xl:block space-x-6 ">
            <NavLink
              to="/category/panaderia"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Panadería
            </NavLink>
            <NavLink
              to="/category/antojos"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Antojos
            </NavLink>
            <NavLink
              to="/category/mate"
              activeClassName="border-b-2 border-gray-400 font-bold"
            >
              Mate
            </NavLink>
            <NavLink
              to="/category/pizzas"
              activeClassName="font-bold border-b-2 border-gray-400"
            >
              Pizzas
            </NavLink>
          </div>
          <NavLink to="/cart" className="absolute right-10">
            <CartWidget />
          </NavLink>
          <div className="absolute right-2 xl:hidden">
            <div
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon />
            </div>
          </div>
          <NavItemsMobile display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
