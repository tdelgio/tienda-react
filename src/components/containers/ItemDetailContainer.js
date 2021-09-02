// Aca va la logica, el useEffect que trae el producto del detail
// Detalle de cada producto
// id va en el navbar

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getProducts } from "../../utils/promises";

import ItemDetail from "../ItemDetail";
import AnimationSpin from "../AnimationSpin";

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
  const [item, setItem] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams;

  useEffect(() => {
    if (id === undefined) {
      getProducts.then((response) => {
        setItem(response);
      });
    } else {
      getProducts.then((response) =>
        setItem(response.filter((i) => id === i.id))
      );
    }
  }, [id]);
  console.log(item);

  return (
    <div className="border-2 border-red-500 h-1/2 w-1/2 mx-auto">
      {loading ? <AnimationSpin /> : <ItemsDescription item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
