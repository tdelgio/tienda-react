// Aca va la logica, el useEffect que trae el producto del detail
// Detalle de cada producto
// id va en el navbar

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getProducts } from "../../utils/promises";

import ItemDetail from "../ItemDetail";
import AnimationSpin from "../AnimationSpin";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProducts.then((response) => {
      setItem(response.find((i) => parseInt(id) === i.id));
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="h-1/2 w-1/2 mx-auto">
      {loading ? <AnimationSpin /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
