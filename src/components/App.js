import React, { useEffect, useState } from "react";

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

import AnimationSpin from "./AnimationSpin";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((resp) => setProducts(resp));
    setLoading(false);
  }, []);

  console.log(products);

  return (
    <>
      <div className="block z-0 h-full bg-gray-100">
        {loading ? (
          <AnimationSpin />
        ) : (
          <>
            <ItemListContainer products={products} />
            <ItemDetailContainer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
