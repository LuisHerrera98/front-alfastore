import React from 'react'
import Header from '../components/Header/Header'
import HomeSection from '../components/Home/HomeSection'
import HomeTopSection from '../components/Home/HomeTopSection'

const Home = () => {
  return (
    <div>
        <Header />
        <HomeTopSection />
        <HomeSection />
    </div>
  )
}

export default Home