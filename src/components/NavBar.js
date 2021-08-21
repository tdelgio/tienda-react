import React from "react";

import { CartWidget } from "./Icons";
import { Logo } from "./Logo";

const NavBar = () => {
  return (
    //Desktop
    <div className="fixed block top-0 w-full shadow-md z-50 bg-gray-50">
      <div className="relative flex items-center mx-6 py-2">
        <Logo />
        <div className="ml-4 lg:ml-8 space-x-4 text-sm">
          <a href="/">Shop</a>
          <a href="/">Outlet</a>
          <a href="/">Contact</a>
          <a href="/" className="absolute right-0">
            <CartWidget />
          </a>
        </div>
      </div>
    </div>
    //Mobile
  );
};

export default NavBar;
