import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AddToCart, FinishButton } from "./Buttons";

const RemoveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H5V11H19V13Z" fill="#5F6368" />
  </svg>
);

const AddIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#5F6368" />
  </svg>
);

export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState("hidden");

  const handleClickAdd = () => {
    count < stock ? setCount(count + 1) : setCount(count);
  };
  const handleClickRemove = () => {
    count === 1 ? setCount(1) : setCount(count - 1);
  };

  return (
    <div className="flex flex-col justify-around max-w-xs h-full w-full">
      <div className="flex flex-shrink items-center  border-2 rounded-md ">
        <button className="border-r-2 p-2" onClick={handleClickRemove}>
          <RemoveIcon />
        </button>
        <div className="font-bold px-4 text-center flex-grow">{count}</div>
        <button className="border-l-2 p-2 flex-shrink" onClick={handleClickAdd}>
          <AddIcon />
        </button>
      </div>
      <div>
        {display === "block" ? (
          <FinishButton />
        ) : (
          <AddToCart setDisplay={setDisplay} />
        )}
      </div>
    </div>
  );
};

export default ItemCount;
