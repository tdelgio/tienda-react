import React from "react";

const ItemDetail = ({ id, title, src, description, category, price }) => {
  return (
    <div key={id}>
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
      <p>{category}</p>
    </div>
  );
};

export default ItemDetail;
