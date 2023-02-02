import React from 'react'
import Featured from '../../components/user/featured/Featured'
import Header from '../../components/user/header/Header'
import Navbar from '../../components/user/navbar/Navbar'
import PropertyList from '../../components/user/propertyList/PropertyList'
import FeaturedProperts from '../../components/user/featuredProperts/FeaturedProperts'


function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer mt-12 flex flex-col items-center gap-11'>
                <div>
                    <Featured />
                </div>
                <h1 className='homeTitle container text-2xl font-bold '>Browse by property type</h1>
                <PropertyList />
                <h1 className='homeTitle container text-2xl font-bold '>Homes guests love</h1>
                <FeaturedProperts />
            </div>
        </div>
    )
}

export default Home
