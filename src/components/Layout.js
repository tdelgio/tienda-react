import React from "react";
import "../styles/global.css";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="block bg-gray-100 pt-14 mb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
