import React from 'react';
import increment from '../../utils/increment';
import "./acceptIncrement.css";

const AcceptIncrement = ({setOpenModalIncrement, closeModalIncrement, product_id, size_id}) => {

    const fetchIncrement = () => {
        increment(product_id, size_id, setOpenModalIncrement)
        closeModalIncrement()
    }

    return (
        <div className='box-modal-payment'>
            <div className='box-buttons-payment'>
                <h1 onClick={()=> {setOpenModalIncrement(false)}}>x</h1>
                <h3>Confirmacion aumento</h3>
                <button onClick={fetchIncrement} className='button-cash'>Aumentar 1</button>
            </div>
        </div>
    )
}

export default AcceptIncrement