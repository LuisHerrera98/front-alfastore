import React, { useEffect, useState } from 'react'
import check from './images/check.png'
import './sucess.css'

const Success = ({message, type}) => {
  return (
    <div className={ type == 'product' ? 'box-success-product' : 'box-success' }>
      <img src={check} alt="" />
        <p>{message}</p>
    </div>
  )
}

export default Success