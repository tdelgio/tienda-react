import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";

import AnimationSpin from "../AnimationSpin";
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    db.collection("items")
      .get()
      .then((response) => {
        if (response.size === 0) {
          console.log("vacio");
        } else {
          if (category === undefined) {
            setProducts(response.docs.map((i) => i.data()));
          } else {
            let data = response.docs.map((i) => i.data());
            setProducts(data.filter((i) => i.category === category));
          }
        }
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => setLoading(false));
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
