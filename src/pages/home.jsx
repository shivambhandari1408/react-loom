import React from 'react'
import Hero from '../components/hero'
import BrandStripe from '../components/brandstrip'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import Browse from '../browse'

const Home = () => {
    return (
        <div>
            <Hero />
            <BrandStripe />
            <div id="new-arrivals-section"><NewArrivals /></div>
            <div id="top-selling-section"><TopSelling /></div>
            <Browse />
        </div>
    )
}

export default Home
