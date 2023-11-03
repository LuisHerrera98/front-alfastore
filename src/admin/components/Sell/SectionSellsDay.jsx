import React from 'react'
import './sectionSellsDay.css'
import { useState } from 'react'
import { useEffect } from 'react'
import fetchSells from '../../utils/fetchSells'

const SectionSellsDay = ({ date }) => {

    const [sells, setSells] = useState([])

    useEffect(() => {
        fetchSells(setSells, date)
    }, [])

    return (
        <div className='section-sells-day'>
            <h3>Ventas del {date}</h3>
            {sells.map((sell) => (
                <div key={sell._id} className='box-sell'>
                   <div className='box-image'>
                        <img src={`${sell.image}`} alt="" />
                   </div>
                   <div className='box-data'>
                        <p>Nombre: {sell.name}</p>
                        <p>Categoria: {sell.category_name}</p>
                        <p>Hora de venta: {sell.date_complete}</p>
                   </div>
                </div>
            ))}
        </div>
    )
}

export default SectionSellsDay