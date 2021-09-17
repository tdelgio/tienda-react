import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { TrashIcon } from "./Icons";

import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
  const total = totalPrice();

  return (
    <div className="flex flex-col items-center min-h-screen text-center py-12 space-y-4">
      {cartWidgetItems() > 0 ? (
        cart.map((i) => (
          <>
            <ItemCart
              key={i.item.id}
              name={i.item.title}
              price={i.item.price}
              url={i.item.url}
              id={i.item.id}
              quantity={i.quantity}
            />
          </>
        ))
      ) : (
        <p>No hay Items en el Carrito</p>
      )}
      {cartWidgetItems() > 0 && (
        <>
          <div className="flex justify-between mx-2  h-full shadow-md rounded-md max-w-lg w-full py-4 px-2 lg:px-4 text-lg font-bold">
            <p>Total</p>
            <hr className="w-full mt-5 mx-3" />
            <p>${total}</p>
          </div>
          <Link
            to="/"
            className=" flex items-center border-gray-300 p-4 
        bg-gray-200 text-gray-700 max-w-sm h-12 rounded-md mx-auto"
          >
            Seguir Comprando
          </Link>
        </>
      )}
      {cartWidgetItems() === 0 && (
        <Link
          to="/"
          className=" flex items-center border-gray-300 p-4 
        bg-gray-200 text-gray-700 max-w-sm h-12 rounded-md mx-auto"
        >
          Ir a la tienda
        </Link>
      )}

      {cartWidgetItems() > 0 && (
        <button
          onClick={clearCart}
          className="flex items-center border-gray-300 p-4 bg-gray-200 text-gray-700 max-w-sm h-12 rounded-md mx-auto"
        >
          Vaciar Carro
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default Cart;
