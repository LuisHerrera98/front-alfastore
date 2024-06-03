import React, { useState } from 'react';
import './styles/ButtonCreate.css'; // Suponiendo que el archivo CSS está en la carpeta styles
import Loader from '../loadings/Loader';

const ButtonCreate = ({ message, disabled, size, color, loading, setLoading }) => {
  
    return (
      <button className={`button-create ${size} ${color} disabled-${disabled}`} type="submit" disabled={disabled}>
        {
           loading ? (
             <Loader />
           ):(
             message
           )
        }
        {
        }
      </button>
    );
  };

export default ButtonCreate;