import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Success from "../notify/Success"
import Error from "../notify/Error"
import "./categoryForm.css";
import useForm from "../../hooks/useForm";
import createCategory from "../../utils/createCategory";

const CategoryForm = ({ setReload }) => {
  const navigate = useNavigate();
  const { name, onInputChange, onResetForm } = useForm({
    name: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createCategory(name, setReload, setSuccess, setError, onResetForm)
    setTimeout(() => {
      navigate("/admin/panel");
    }, 2000);
  };

  return (
    <div className="box-create-size">
      {
        success ? (
          <Success type="category" />
        ) :
          null
      }
      {
        error ? (
          <Error type="category" />
        ) : null
      }
      <h3>Crear Categoria</h3>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="nombre.."
          value={name}
          onChange={onInputChange}
          autoComplete="off"
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CategoryForm;
