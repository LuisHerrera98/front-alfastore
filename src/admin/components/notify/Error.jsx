import React, { useEffect, useState } from 'react'
import error from './images/error.png'
import './error.css'

const Error = ({ message }) => {
  return (
    <div className='box-error'>
      <img src={error} alt="" />
      <p>{message}</p>
    </div>
  )
}

export default Error