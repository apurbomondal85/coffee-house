
import React from 'react'
import Navbars from '../Share/Header/Navbar'
import Banner from '../components/Banner/Banner'
import Services from '../components/Services/Services'
import Coffees from '../components/Coffees/Coffees'

function Main() {
  return (
    <div>
      <Navbars></Navbars>
      <Banner></Banner>
      <Services></Services>
      <Coffees></Coffees>
    </div>
  )
}

export default Main
