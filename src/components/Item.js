import React from "react";
import ItemCount from "./ItemCount";
import { AddToCart } from "./Buttons";

const Item = ({ src, stock, name, price }) => (
  <div className="flex flex-col items-center justify-between my-4 mx-2 h-full lg:w-80 shadow-md rounded-md max-w-md w-full pb-4">
    <li className="h-full w-full">
      <img
        src={src}
        placeholder="blurred"
        alt="item"
        height={400}
        className="w-full h-80"
      />
    </li>
    <h2> {name}</h2>
    <h3>{price}</h3>
    <div className="w-full pt-4 px-1 lg:px-2 space-y-2 flex flex-col items-center">
      <ItemCount stock={stock} />
      <AddToCart />
    </div>
  </div>
);
export default Item;
