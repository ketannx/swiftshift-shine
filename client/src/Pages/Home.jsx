import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/homePage/Landing'
import Welcome from '../components/homePage/Welcome'
import Why from '../components/homePage/Why'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Landing />
        <Welcome />
        <Why />
        <Footer />
    </div>
  )
}

export default Home