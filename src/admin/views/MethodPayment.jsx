import React from 'react'
import { useParams } from 'react-router-dom'
import ModalMethodPayment from '../components/Modals/ModalMethodPayment';



const MethodPayment = () => {
    
    const {category_id, size_id, category_name, size_name, product_id} = useParams();
    
  return (
    <div>
        <ModalMethodPayment category_id={category_id} size_id={size_id} category_name={category_name} size_name={size_name} product_id={product_id}/>
    </div>
  )
}

export default MethodPayment