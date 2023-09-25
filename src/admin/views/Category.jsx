import React from 'react'
import Header from '../components/Header/Header'
import CategorySection from '../components/Category/CategorySection'
import { useParams } from 'react-router-dom'


const Category = () => {
    
    const {category_id, category_name} = useParams();
    
  return (
    <div>
        <Header />
        <CategorySection category_id={category_id} category_name={category_name}/>
    </div>
  )
}

export default Category