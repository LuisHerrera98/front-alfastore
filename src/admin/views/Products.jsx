import React from 'react'
import Header from '../components/Header/Header'
import { useParams } from 'react-router-dom'
import ProductsList from '../components/Product/ProductsList'


const Products = () => {
    
    const {category_id, size_id, category_name, size_name} = useParams();
    
  return (
    <div>
        <Header />
        <ProductsList category_id={category_id} size_id={size_id} category_name={category_name} size_name={size_name}/>
    </div>
  )
}

export default Products