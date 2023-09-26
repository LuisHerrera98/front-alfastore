import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import ProductForm from '../components/Product/ProductForm'


const ProductCreate = () => {
  const {category_id, category_name} = useParams();
  return (
    <div>
        <Header />
        <ProductForm category_id={category_id} category_name={category_name}/>
    </div>
  )
}

export default ProductCreate