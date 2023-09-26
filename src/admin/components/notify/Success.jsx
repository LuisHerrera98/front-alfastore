import React, { useEffect, useState } from 'react'
import check from './images/check.png'
import './sucess.css'

const Success = ({type}) => {

const [text, setText] = useState("")

const verifyType = () => {
    if(type == "category"){
        setText("Categoria creada")
    } else if(type == "size"){
        setText("Talle creado")
    } else if(type == "product"){
      setText("Producto creado")
    } else {
      console.log("no reconozco el type")
    }

}

useEffect(() => {
  verifyType();
}, [])


  return (
    <div className='box-success'>
      <img src={check} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default Success