import React, {useState} from 'react'
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';
import decrementAndSell from '../../utils/decrementAndSell'

import "./modalMethodPayment.css"

const ModalMethodPayment = ({product, setModalPayment, setProducts }) => {

  const handleSell = async (type) => {
    console.log(type);
    await decrementAndSell(product.id, product.size_id);
    await fetchProductsByCategorySize(setProducts, product.category_id, product.size_id);
    setModalPayment(false);
  }

  return (
    <div className='box-modal-payment'>
      <div className='box-buttons-payment'>
          <h1 onClick={() => {setModalPayment(false)}}>x</h1>
        <h3>Método de pago</h3>
        <button onClick={()=>{handleSell("cash")}} className='button-cash'>Efectivo</button>
        <button onClick={()=>{handleSell("transfer")}} className='button-transfer'>Transferencia</button>
        <button onClick={()=>{handleSell("card")}} className='button-card'>Tarjeta</button>
      </div>
    </div>
  )
}

export default ModalMethodPayment