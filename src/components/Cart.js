import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container-xl border min-h-screen text-center py-12">
      <Link
        to="/"
        className=" border-gray-300 p-4 bg-gray-200 text-gray-700 w-8 h-4 rounded-md mx-auto"
      >
        Home
      </Link>
    </div>
  );
};

export default Cart;
