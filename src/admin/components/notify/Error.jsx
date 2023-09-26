import React, { useEffect, useState } from 'react'
import error from './images/error.png'
import './error.css'

const Error = ({ type }) => {

  const [text, setText] = useState("")

  const verifyType = () => {
    if (type == "category") {
      setText("Hubo un error")
    } else if (type == "size") {
      setText("Error")
    } else {
      setText("Hubo un error")
    }
  }

  useEffect(() => {
    verifyType();
  }, [])


  return (
    <div className='box-error'>
      <img src={error} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default Error