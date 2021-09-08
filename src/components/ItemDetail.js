import React, { useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  console.log(count);
  return (
    <div className="flex items-center w-full">
      <div
        className="flex flex-col xl:flex-row items-center justify-around min-h-full w-full py-4 border-2 border-gray-200"
        key={item.id}
      >
        <img
          src={item.url}
          placeholder="blurred"
          alt="item"
          width={300}
          height={400}
          className=" h-80 shadow-md rounded-md"
        />
        <div className="flex flex-col justify-around h-72 ml-2">
          <h2 className="font-bold pt-2 text-xl">{item.title}</h2>
          <p className="h-12">{item.description}</p>
          <h3 className="font-semibold ">
            {`$`}
            {item.price}
          </h3>
          <div className="flex flex-col">
            <ItemCount stock={item.stock} count={count} setCount={setCount} />
            <Link
              to={`/cart`}
              className="py-2 px-4 bg-gray-200 text-gray-600 text-center mt-2 shadow-md w-full max-w-xs"
            >
              Terminar Compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
