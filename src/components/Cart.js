import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { TrashIcon } from "./Icons";

import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="flex flex-col items-center min-h-screen text-center py-12 space-y-4">
      {cartWidgetItems > 0 ? (
        cart.map((i) => (
          <ItemCart
            key={i.item.id}
            name={i.item.title}
            price={i.item.price}
            url={i.item.url}
            id={i.item.id}
          />
        ))
      ) : (
        <p>No hay Items en el Carrito</p>
      )}

      <Link
        to="/"
        className=" flex items-center border-gray-300 p-4 bg-gray-200 text-gray-700 max-w-sm h-12 rounded-md mx-auto"
      >
        Seguir Comprando
      </Link>

      <button
        onClick={clearCart}
        className="flex items-center border-gray-300 p-4 bg-gray-200 text-gray-700 max-w-sm h-12 rounded-md mx-auto"
      >
        Vaciar Carro
        <TrashIcon />
      </button>
    </div>
  );
};

export default Cart;
