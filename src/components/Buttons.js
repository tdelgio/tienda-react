import React from "react";

export const AddToCart = () => {
  return (
    <button className="flex items-center justify-between border-2 rounded-md max-w-xs w-full shadow-sm">
      <span className="p-2 border-r-2 flex-shrink">
        <svg
          width="24"
          height="24"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M10 8H12V5H15V3H12V0H10V3H7V5H10V8ZM6 17C4.9 17 4.01 17.9 4.01 19C4.01 20.1 4.9 21 6 21C7.1 21 8 20.1 8 19C8 17.9 7.1 17 6 17ZM16 17C14.9 17 14.01 17.9 14.01 19C14.01 20.1 14.9 21 16 21C17.1 21 18 20.1 18 19C18 17.9 17.1 17 16 17ZM7.1 12H14.55C15.3 12 15.96 11.59 16.3 10.97L20.16 3.96L18.42 3L14.55 10H7.53L3.27 1H0V3H2L5.6 10.59L4.25 13.03C3.52 14.37 4.48 16 6 16H18V14H6L7.1 12Z"
            fill="#5F6368"
          />
        </svg>
      </span>

      <span className="px-5 mx-auto">Agregar al carrito</span>
    </button>
  );
};
