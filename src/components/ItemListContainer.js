import React from "react";
import Item from "./Item";
// import ImgPic from "../images/item1.jpg";

const ItemList = ({ products }) => (
  <>
    {products.map((i) => (
      <Item key={i.id} name={i.title} price={i.price} src={i.image} />
    ))}
  </>
);

const ItemListContainer = ({ products }) => {
  return (
    <div className="py-4 px-2 h-full border-b border-gray-300 mx-auto">
      <ul className="flex flex-col items-center min-w-md justify-center lg:px-4 lg:flex-row lg:flex-wrap w-full">
        <ItemList products={products} />
      </ul>
    </div>
  );
};

export default ItemListContainer;
