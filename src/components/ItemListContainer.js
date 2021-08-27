import React from "react";
import Item from "./Item";
// import ImgPic from "../images/item1.jpg";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1455134168668-4066045897c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDYwNzY3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60 ",
    stock: 4,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1595259514668-729f744402d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzg3NDc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    stock: 3,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTA2MDc2N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    stock: 10,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    stock: 10,
  },
];

// const items = [
//   fetch("https://cruce-app.herokuapp.com/products").then((data) =>
//     data
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   ),
// ];

const ItemList = () => (
  <>
    {products.map((i) => (
      <Item key={i.id} stock={i.stock} src={i.image} />
    ))}
  </>
);

// let loadItem = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("resultado");
//   }, 3000);
// });

const ItemListContainer = () => {
  return (
    <div className="py-4 px-2 h-full border-b border-gray-300 mx-auto">
      <ul className="flex flex-col items-center min-w-md justify-center lg:px-4 lg:flex-row lg:flex-wrap w-full">
        <ItemList />
      </ul>
    </div>
  );
};

export default ItemListContainer;
