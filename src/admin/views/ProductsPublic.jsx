import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderPublic from '../components/Header/HeaderPublic'
import ProductsListPublic from '../components/Product/ProductsListPublic'


const ProductsPublic = () => {
    
    const {category_id, size_id, category_name, size_name} = useParams();
    
  return (
    <div>
        <HeaderPublic />
        <ProductsListPublic category_id={category_id} size_id={size_id} category_name={category_name} size_name={size_name}/>
    </div>
  )
}

export default ProductsPublic