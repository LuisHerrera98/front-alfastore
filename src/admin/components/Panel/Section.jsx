import React, { useState } from 'react'
import CategoryForm from '../Modals/category/CategoryForm';
import './section.css'


const Section = () => {

  const [openModalCreateCategory, setOpenModalCreateCategory] = useState(false)


  return (
    <div className="section-admin">
      <div className="box-category">
        <h3>Categorias</h3>
        <button className='section-button' onClick={()=>{setOpenModalCreateCategory(true)}}>
          Crear categoria
        </button>
        {
          openModalCreateCategory ? (
            <CategoryForm setOpenModalCreateCategory={setOpenModalCreateCategory}/>
          ):(
            null
          )
        }
      </div>
      <hr />
    </div>
  );
}

export default Section