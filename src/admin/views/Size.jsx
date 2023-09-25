import React from 'react'
import Header from '../components/Header/Header'
import SizeForm from '../components/Size/SizeForm'
import { useParams } from 'react-router-dom'

const Size = () => {

    const {category_id, category_name} = useParams();

  return (
    <div>
        <Header />
        <SizeForm category_id={category_id} category_name={category_name} />
    </div>
  )
}

export default Size