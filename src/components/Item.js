import React from "react";
import ItemCount from "./ItemCount";
import { AddToCart } from "./Buttons";

const Item = ({ src }) => (
  <div className="flex flex-col items-center justify-between my-4 mx-2 h-full lg:w-80 shadow-md rounded-md max-w-md w-full pb-4">
    <li className="h-full w-full">
      <img
        src={src}
        placeholder="blurred"
        alt="item1"
        height={100}
        className=""
      />
    </li>
    <div className="w-full pt-4 px-1 lg:px-2 space-y-2 flex flex-col items-center">
      <ItemCount />
      <AddToCart />
    </div>
  </div>
);
export default Item;
