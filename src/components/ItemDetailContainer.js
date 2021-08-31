// Aca va la logica, el useEffect que trae el producto del detail
// Detalle de cada producto
// Category va en el navbar

import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

const ItemsDescription = () => (
  <ItemDetail
    key={3}
    title="title"
    description="desc"
    src={`https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`}
    price={5}
    category="both"
  />
);

const ItemDetailContainer = () => {
  return (
    <div className="border-2 border-red-500 h-1/2 w-1/2 mx-auto">
      ItemDetailContainer
      <ItemsDescription />
    </div>
  );
};

export default ItemDetailContainer;
