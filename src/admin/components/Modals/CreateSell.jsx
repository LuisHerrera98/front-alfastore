import React from "react";
import "./createSell.css";
import useForm from "../../hooks/useForm";
import createSellCustom from "../../utils/createSellCustom";

const CreateSell = ({setReload}) => {
  const { name, price, method_payment, onInputChange, onResetForm } = useForm({
    name: "",
    price: "",
    method_payment: "",
  });

  const handleFormSubmit = async () => {
    createSellCustom(name, price, method_payment);
  };

  return (
    <div>
      <h1 className="title-create-sell">Anotar manual</h1>
      <form className="form-create-sell" onSubmit={handleFormSubmit}>
        <input
          name="name"
          type="Nombre"
          placeholder="Nombre .."
          value={name}
          onChange={onInputChange}
        />
        <input
          name="price"
          type="price"
          placeholder="precio"
          value={price}
          onChange={onInputChange}
        />
        <select
          name="method_payment"
          onChange={onInputChange}
        >
          <option value="EFECTIVO">Efectivo</option>
          <option value="TRANSFERENCIA">Transferencia</option>
          <option value="TARJETA">Tarjeta</option>
        </select>
        <button type="submit">Agregar</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default CreateSell;
