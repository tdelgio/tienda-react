import React from "react";

import { useCartContext } from "../context/CartContext";
import { ButtonPrimary, ButtonClearCart } from "./Buttons";
import Form from "./Form";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
  const total = totalPrice();

  return (
    <div className="flex flex-col items-center min-h-screen h-full text-center py-12 space-y-4 mt-14">
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
        <>
          <p>No hay Items en el Carrito</p>
          <ButtonPrimary to="/" text="Ir a la tienda" />
        </>
      )}
      {cartWidgetItems() > 0 && (
        <>
          <div className="flex justify-between mx-2  h-full shadow-md rounded-md max-w-lg w-full py-4 px-2 lg:px-4 text-lg font-bold">
            <p>Total</p>
            <hr className="w-full mt-5 mx-3" />
            <p>${total}</p>
          </div>
          <ButtonPrimary to="/" text="Seguir Comprando" />
          <ButtonClearCart clearCart={clearCart} text="Vaciar Carro" />
          <Form cart={cart} total={total} clearCart={clearCart} />
        </>
      )}
    </div>
  );
};

export default Cart;
