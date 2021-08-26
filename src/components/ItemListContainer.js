import React from "react";
import Item from "./Item";
import Item1 from "../images/item1.jpg";

const ItemListContainer = () => {
  return (
    <div className="py-4 px-2 h-full border-b border-gray-300 mx-auto">
      <ul className="flex flex-col items-center min-w-md justify-center lg:px-4 lg:flex-row lg:flex-wrap w-full">
        <Item src={Item1} />
        <Item src={Item1} />
        <Item src={Item1} />
        <Item src={Item1} />
        <Item src={Item1} />
        <Item src={Item1} />
        <Item src={Item1} />
        <Item src={Item1} />
      </ul>
    </div>
  );
};

export default ItemListContainer;
