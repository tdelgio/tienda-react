import React from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";
import { AddToCart } from "./Buttons";

const Item = ({ id, image, stock, name, price, description, category }) => {
  const itemId = { id };
  return (
    <div className="flex flex-col  justify-between my-4 mx-2 h-full lg:w-80 shadow-md rounded-md max-w-md w-full pb-4">
      <li className="h-full w-full">
        <Link to={`/details/${itemId}`}>
          <img
            src={image}
            placeholder="blurred"
            height={400}
            alt="item"
            className="w-full h-80 rounded-t-md"
          />
        </Link>
      </li>
      <div className="ml-2">
        <h2 className="font-bold pt-2 text-xl">{name}</h2>
        <p className="h-12">{description}</p>
        <h3 className="font-semibold ">
          {`$`}
          {price}
        </h3>
        <p>{category}</p>
      </div>

      <div className="w-full pt-4 px-1 lg:px-2 space-y-2 flex flex-col items-center">
        <ItemCount stock={stock} />
        <AddToCart />
      </div>
    </div>
  );
};
export default Item;
