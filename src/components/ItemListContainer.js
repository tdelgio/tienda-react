import React from "react";
import Item from "./Item";

const items = [
  {
    id: 1,
    stock: 10,
    name: "planta",
    src: "https://images.unsplash.com/photo-1455134168668-4066045897c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDYwNzY3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    stock: 5,
    name: "planta2",
    src: "https://images.unsplash.com/photo-1595259514668-729f744402d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzg3NDc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    stock: 3,
    name: "planta",
    src: "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8MTA2MDc2N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 1,
    stock: 10,
    name: "planta",
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    stock: 5,
    name: "planta2",
    src: "https://images.unsplash.com/photo-1519333796630-4b7d19ad1bb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    stock: 3,
    name: "planta",
    src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const ItemList = () => (
  <>
    {items.map((i) => (
      <Item id={i.id} stock={i.stock} src={i.src} />
    ))}
  </>
);

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
