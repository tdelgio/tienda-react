import React from "react";

const Item = ({ name }) => (
  <li className="h-12 lg:h-40 lg:w-80 shadow-md rounded-md my-4 mx-2 lg:max-w-md flex items-center justify-center">
    {name}
  </li>
);

const ItemListContainer = () => {
  return (
    <div className="py-4 px-2 h-full border-b border-gray-300">
      <ul className="flex flex-col justify-center lg:px-4 lg:flex-row lg:flex-wrap">
        <Item name="Item 1" />
        <Item name="Item 2" />
        <Item name="Item 3" />
        <Item name="Item 4" />
        <Item name="Item 5" />
        <Item name="Item 6" />
        <Item name="Item 7" />
        <Item name="Item 8" />
      </ul>
    </div>
  );
};

export default ItemListContainer;
