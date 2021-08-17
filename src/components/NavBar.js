import React from "react";

import { CartIcon } from "./Icons";
import { Logo } from "./Logo";

const NavBar = () => {
  return (
    //Desktop
    <div className="fixed top-0 w-full shadow-md">
      <div className="relative flex items-center mx-6 py-2">
        <Logo />
        <div className="ml-8 space-x-4">
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">Contact</a>
          <a href="/" className="absolute right-0">
            <CartIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
