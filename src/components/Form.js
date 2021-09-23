import React, { useState } from "react";
import { getFirestore } from "../services/getFirebase";

const Form = ({ clearCart, total, cart }) => {
  const [formData, setFormData] = useState(initialState);

  const db = getFirestore();
  const orders = db.collection("orders");

  function handleSubmit(e) {
    e.preventDefault();

    const orderDetail = cart.map((i) => `${i.item.title}: ${i.quantity}`);
    const date = new Date();

    const newOrder = {
      date: date,
      buyer: formData,
      item: orderDetail,
      total: total,
    };

    orders
      .add(newOrder)
      .then((response) => alert(`Su ID de compra es: ${response.id} `))
      .then(setFormData(initialState))
      .catch((error) => console.log(error))
      .finally(() => {
        clearCart();
        console.log(newOrder);
      });
  }
  // Manejos campos del form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="space-y-3 w-full max-w-lg py-8"
    >
      <div className="flex flex-col items-start rounded-md p-4 shadow-md">
        <h3 className="font-semibold pb-2">Completa tus Datos:</h3>
        <label htmlFor="name">Nombre:</label>
        <input name="name" className="w-full" id="name" required />
        <label htmlFor="phone">Tel.:</label>
        <input name="phone" type="number" className="w-full" id="phone" />
        <label htmlFor="E-mail">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          id="email1"
          name="email1"
          className="w-full"
          required
        />
        <label htmlFor="E-mail" required>
          Confirmar Email:
        </label>
        <input
          type="email"
          onChange={handleChange}
          id="email2"
          name="email2"
          required
          className={
            formData.email1 === formData.email2
              ? "w-full"
              : "w-full border-2 border-red-400"
          }
        />
        {formData.email1 === formData.email2 ? (
          <button className="flex items-center border-gray-400 px-6 mt-4 bg-gray-300 text-gray-700 max-w-sm h-12 rounded-md mx-auto">
            Terminar Compra
          </button>
        ) : (
          <div className="flex items-center border-gray-400 px-6 mt-4 bg-gray-200 text-gray-400 max-w-sm h-12 rounded-md mx-auto">
            Terminar Compra
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;

const initialState = {
  name: "",
  phone: "",
  email1: "",
  email2: "",
};
