import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/service/Landing'
import ServiceCarts from '../components/service/ServiceCarts'
import Ready from '../components/service/Ready'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
      <Navbar />
      <Landing />
      <ServiceCarts />
      <Ready />
      <Footer />
    </div>
  )
}

export default Services