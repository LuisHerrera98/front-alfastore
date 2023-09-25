import React, { useState } from 'react'
import Header from '../components/Header/Header'
import CategoryForm from "../components/Category/CategoryForm";

const CategoryCreate = () => {

  const [reload, setReload] = useState(false)
  
  return (
    <div>
        <Header reload={reload} setReload={setReload}/>
        <CategoryForm setReload={setReload}/>
    </div>
  )
}

export default CategoryCreate