import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderPublic from '../components/Header/HeaderPublic'
import CategorySectionPublic from '../components/Category/CategorySectionPublic'


const CategoryPublic = () => {
    
    const {category_id, category_name} = useParams();
    
  return (
    <div>
        <HeaderPublic />
        <CategorySectionPublic category_id={category_id} category_name={category_name}/>
    </div>
  )
}

export default CategoryPublic