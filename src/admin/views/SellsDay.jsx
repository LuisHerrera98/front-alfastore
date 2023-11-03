import React from 'react'
import Header from '../components/Header/Header'
import SectionSellsDay from '../components/Sell/SectionSellsDay'
import { useParams } from 'react-router-dom'

const SellsDay = () => {

    const { date } = useParams();

    return (
        <div>
            <Header />
            <SectionSellsDay date={date} />
        </div>
    )
}

export default SellsDay