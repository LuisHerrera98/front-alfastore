import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./modalMethodPayment.css"
import decrementAndSell from '../../utils/decrementAndSell'

const ModalMethodPayment = ({ category_id, size_id, category_name, size_name, product_id }) => {
  const navigate = useNavigate();
  const handleDecrementSell = () => {
    decrementAndSell(product_id, size_id);
    navigate(`/admin/products/${category_id}/${size_id}/${category_name}/${size_name}`)
  }

  return (
    <div className='box-modal-payment'>
      <div className='box-buttons-payment'>
        <Link to={`/admin/products/${category_id}/${size_id}/${category_name}/${size_name}`}>
          <h1>x</h1>
        </Link>
        <h3>Método de pago</h3>
        <button onClick={handleDecrementSell} className='button-cash'>Efectivo</button>
        <button className='button-transfer'>Transferencia</button>
        <button className='button-card'>Tarjeta</button>
      </div>
    </div>
  )
}

export default ModalMethodPayment