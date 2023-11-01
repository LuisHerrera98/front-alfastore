import React from 'react';
import increment from '../../utils/increment';
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';
import "./acceptIncrement.css";

const AcceptIncrement = ({ setModalIncrement, product, setProducts }) => {
    
    const incrementCuantity = async () => {
        await increment(product.id, product.size_id)
        await fetchProductsByCategorySize(setProducts, product.category_id, product.size_id);
        setModalIncrement(false)
    }


    return (
        <div className='box-modal-payment'>
            <div className='box-buttons-payment'>
                <h1 onClick={()=> {setModalIncrement(false)}}>x</h1>
                <h3>Confirmacion aumento</h3>
                <button onClick={incrementCuantity} className='button-cash'>Aumentar 1</button>
            </div>
        </div>
    )
}

export default AcceptIncrement