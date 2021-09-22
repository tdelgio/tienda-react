import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFirebase";

import ItemDetail from "../ItemDetail";
import AnimationSpin from "../AnimationSpin";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let idStr = parseInt(id);

  useEffect(() => {
    const db = getFirestore();
    db.collection("items")
      .where("id", "==", idStr)
      .get()

      .then((response) => {
        response.forEach((doc) => {
          setItem(doc.data());
        });
      })
      .catch(() => console.log("error"))
      .finally(() => setLoading(false));
  }, [idStr]);

  return (
    <div className="lg:h-1/2 lg:w-1/2 mx-auto">
      {loading ? <AnimationSpin /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
