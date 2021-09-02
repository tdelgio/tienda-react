import React from "react";

const ItemDetail = ({ id, title, src, description, categoria, price }) => {
  return (
    <div className="w-1/2" key={id}>
      <img
        src={src}
        placeholder="blurred"
        alt="item"
        height={400}
        className="w-full h-80"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{categoria}</p>
    </div>
  );
};

export default ItemDetail;
