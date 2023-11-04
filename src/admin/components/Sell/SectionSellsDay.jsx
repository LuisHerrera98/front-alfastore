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
                        <div className='box-name-size'>
                            <p className='box-name-sell'>{sell.name}</p>
                            <p className='box-size-sell'>ㅤ{"-->"}ㅤ</p>
                            <p>{sell.size_name}</p>
                        </div>
                        <div className='box-category-hour'>
                            <p>CATEGORIAㅤ</p>
                            <p className='box-arrox-red'>{"-->"}ㅤ</p>
                            <p>{sell.category_name}</p>
                            <p className='hour-sell'>Hora {sell.date_hour}</p>
                        </div>
                        <div className='box-method-payment'>
                            <p>METODO DE PAGOㅤ</p>
                            <p className='box-arrox-red'>{"-->"}ㅤ</p>
                            <p className={`box-method-${sell.method_payment}`}>{sell.method_payment}</p>

                        </div>
                        <div className='box-cost-price'>
                            <p>Costoㅤ</p>
                            <p className='box-cost-sell'> ${sell.cost}ㅤ</p>
                            <p>Gananciaㅤ</p>
                            <p className='box-ganancy-sell'>${sell.price - sell.cost}</p>
                            <p className='box-price-sell'>${sell.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SectionSellsDay