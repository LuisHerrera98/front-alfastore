import React, { useState } from 'react';
import { useEffect } from 'react';
import fetchDateSell from '../../utils/fetchDateSells';
import { Link } from 'react-router-dom';
import "./sellDays.css";

const SellDays = () => {

  const [dateSells, setDateSells] = useState([]);

  useEffect(() => {
    fetchDateSell(setDateSells)
  }, [])


  return (
    <div className='section-data-sells'>
      <h2>Ventas</h2>
      {dateSells.map((dateSell) => (
        <Link key={dateSell._id} className="title" to={`/admin/sells/${dateSell.date}`}>
          <div className='box-date-sell'>
            <h4>{dateSell.date}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SellDays