import React from 'react'
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';
import decrementAndSell from '../../utils/decrementAndSell'

import "./modalMethodPayment.css"
import createSell from '../../utils/createSell';

const ModalMethodPayment = ({product, setModalPayment, setProducts, category_name, size_name }) => {

  const handleSell = async (method_payment) => {
    await decrementAndSell(product.id, product.size_id);
    await fetchProductsByCategorySize(setProducts, product.category_id, product.size_id);
    await createSell(product.name, category_name, product.cost, product.price, product.image, size_name, method_payment)

    setModalPayment(false);
  }

  return (
    <div className='box-modal-payment'>
      <div className='box-buttons-payment'>
          <h1 onClick={() => {setModalPayment(false)}}>x</h1>
        <h3>Método de pago</h3>
        <button onClick={()=>{handleSell("EFECTIVO")}} className='button-cash'>Efectivo</button>
        <button onClick={()=>{handleSell("TRANSFERENCIA")}} className='button-transfer'>Transferencia</button>
        <button onClick={()=>{handleSell("TARJETA")}} className='button-card'>Tarjeta</button>
      </div>
    </div>
  )
}

export default ModalMethodPayment