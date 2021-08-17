import React from "react";

import "../styles/global.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="block bg-gray-100 min-h-screen pt-14">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
