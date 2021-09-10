import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => (
  <>
    {products.map((i) => (
      <Item
        key={i.id}
        id={i.id}
        name={i.title}
        price={i.price}
        image={i.url}
        stock={i.stock}
        description={i.description}
        category={i.category}
      />
    ))}
  </>
);

export default ItemList;
