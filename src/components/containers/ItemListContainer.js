import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { getProducts } from "../../utils/promises";

import AnimationSpin from "../AnimationSpin";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    if (category === undefined) {
      getProducts.then((response) => {
        setProducts(response);
        setLoading(false);
      });
    } else {
      getProducts.then(
        (response) =>
          setProducts(response.filter((i) => category === i.category)),
        setLoading(false)
      );
    }
  }, [category]);

  return (
    <div className="py-4 px-2 h-full border-b border-gray-300 mx-auto">
      <ul className="flex flex-col items-center min-w-md justify-center lg:px-4 lg:flex-row lg:flex-wrap w-full">
        {loading ? <AnimationSpin /> : <ItemList products={products} />}
      </ul>
    </div>
  );
};

export default ItemListContainer;
