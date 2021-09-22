import React, { useContext, createContext, useState } from "react";

//creacion del contexto
const CartContext = createContext();

//funcion para ahorrarme dos importaciones
export const useCartContext = () => useContext(CartContext);

//Inyectar los estados y funciones globales, enmascaro provider
export const CartContextProvider = ({ children }) => {
  let variable = "desde context";
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const index = cart.findIndex((i) => i.item.id === item.id);
    if (index > -1) {
      const oldQy = cart[index].quantity;
      cart.splice(index, 1);
      setCart([...cart, { item, quantity: quantity + oldQy }]);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const deleteProduct = cart.filter((prod) => prod.item.id !== id);
    setCart([...deleteProduct]);
  };

  //[1,2,3,4] acum = 0 => 1, 1+2 => 3+3
  const cartWidgetItems = () => {
    return cart.reduce((acum, valor) => acum + valor.quantity, 0);
    // return cart.length;
  };

  const totalPrice = () => {
    return cart.reduce(
      (acum, valor) => acum + valor.quantity * valor.item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        variable,
        cart,
        setCart,
        addItem,
        clearCart,
        removeItem,
        cartWidgetItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
