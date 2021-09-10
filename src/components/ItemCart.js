import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { RemoveItem } from "./Icons";

const ItemCart = ({ name, price, url, count }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-between my-4 mx-2 h-full shadow-md rounded-md max-w-lg w-full py-4">
      <div className="ml-2 flex items-center">
        <img
          src={url}
          placeholder="blurred"
          alt="item"
          width={50}
          height={50}
          className=" h-12 w-14 shadow-md rounded-md  "
        />
        <div className="flex flex-col items-start justify-center px-4 w-full">
          <h2 className="font-bold text-xl whitespace-nowrap">{name}</h2>
          <p className="tracking-normal ">${price}</p>
        </div>
        <div className="rounded-sm h-12 w-24 mx-2 flex items-center justify-center">
          xxx
        </div>
        <div className="rounded-sm h-12 whitespace-nowrap mx-2 font-bold flex items-center">
          $ Total
        </div>
        <RemoveItem removeItem={removeItem} />
      </div>
    </div>
  );
};
export default ItemCart;
