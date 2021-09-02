import React from "react";
import { Link } from "react-router-dom";

import { CartWidget } from "./Icons";
import { Logo } from "./Logo";

const NavBar = () => {
  return (
    //Desktop
    <div className="fixed block top-0 w-full shadow-md z-50 bg-gray-50">
      <div className="relative flex items-center mx-6 py-2">
        <Link to="/">
          <Logo />
        </Link>

        <div className="ml-4 lg:ml-8 space-x-4 text-md tracking-normal font-normal">
          <Link to="/category/panaderia">Panadería</Link>
          <Link to="/category/antojos">Antojos</Link>
          <Link to="/category/mate">Mate</Link>
          <Link to="/category/pizzas">Pizzas</Link>
          <Link to="/cart" className="absolute right-0">
            <CartWidget />
          </Link>
        </div>
      </div>
    </div>
    //Mobile
  );
};

export default NavBar;
