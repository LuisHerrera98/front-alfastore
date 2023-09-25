import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./sizeForm.css"
import Success from '../notify/Success'
import Error from '../notify/Error'
import useForm from '../../hooks/useForm'
import createSize from '../../utils/createSIze'

const SizeForm = ({ category_id, category_name }) => {
  const navigate = useNavigate();

  const { name, onInputChange, onResetForm } = useForm({
    name: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createSize(name, setSuccess, onResetForm, setError, category_id)
    navigate(`/admin/categoria/${category_id}/${category_name}`);
  };

  return <div className="box-create-size">
    {
      success ? (
        <Success type="size" />
      ) :
        null
    }
    {
      error ? (
        <Error type="size" />
      ) : null
    }
    <h3>Crear talle en {category_name}</h3>

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
}

export default SizeForm