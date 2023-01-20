import React from 'react'
import Header from '../../components/user/header/Header'
import Navbar from '../../components/user/navbar/Navbar'
import SideSearch from '../../components/user/sideSearch/SideSearch'
import SearchItem from '../../components/user/searchItem/SearchItem'

function List() {
  return (
    <>
      <Navbar />
      <Header type="list" />
      {/* <div className="flex container mx-auto">
        <div className=''>
          <SideSearch />
        </div>
        <div>
          <SearchItem />
        </div>
      </div> */}

          <SideSearch />
    </>
  )
}

export default List