import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  let variable = "desde context";
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart([...cart, { item, quantity }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    const cartFilter = cart.filter((element) => element.item.id !== itemId);
    return setCart(cartFilter);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ variable, cart, setCart, addItem, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
