import React from 'react'
import './createSell.css'

const CreateSell = () => {
  return (
    <div>
        <form action="">
            <input name='name' type="Nombre" />
            <select name="method_payment" id="">
                <option value="cash">Efectivo</option>
                <option value="transfer">Transferencia</option>
                <option value="card">Tarjeta</option>
            </select>
            <input type="price" placeholder='precio'/>   
        </form>
    </div>
  )
}

export default CreateSell