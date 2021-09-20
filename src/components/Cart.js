import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";
import { TrashIcon } from "./Icons";

import ItemCart from "./ItemCart";

const Cart = () => {
  const [formData, setFormData] = useState(initialState);
  //manejo de los campos del form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const newOrder = {
  //     buyer: formData,
  //     item: cart,
  //     total: total,
  //   };
  // const db = getFirestore();
  // const orders = db.collection("orders");

  //controlar si hay stock de los items que quiero agregar
  // orders
  //     .add(newOrder)
  //     .then((response) => console.log(response))
  //     .finally(() => setFormData(initialState));
  // }

  console.log(formData);

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
      {cartWidgetItems() >= 1 && (
        <form
          // onSubmit={handleSubmit}
          onChange={handleChange}
          className="space-y-3 w-full max-w-lg py-8"
        >
          <div className="flex flex-col items-start rounded-md p-4 shadow-md">
            <h3 className="font-semibold pb-2">Completa tus Datos:</h3>
            <label for="name">Name:</label>
            <input name="name" className="w-full" id="name" />
            <label for="phone">Phone:</label>
            <input name="phone" className="w-full" id="phone" />
            <label for="E-mail">Email:</label>
            <input name="email1" className="w-full" id="email" />
            <label for="E-mail">Confirm Email:</label>
            <input name="email2" className="w-full" id="email" />
            {/* ternario y valida */}
            <button className="flex items-center border-gray-400 px-6 mt-4 bg-gray-300 text-gray-700 max-w-sm h-12 rounded-md mx-auto">
              Enviar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Cart;

const initialState = {
  name: "",
  phone: "",
  email1: "",
  email2: "",
};
