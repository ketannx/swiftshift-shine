import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/About/Landing'
import OurStory from '../components/About/OurStory'
import OurTeam from '../components/About/OurTeam'
import Footer from '../components/Footer'
import Started from '../components/About/Started'
import Achivements from '../components/About/Achivements'

function About() {
  return (
    <div>
        <Navbar />
        <Landing />
        <OurStory />
        <Started />
        <Achivements />
        <OurTeam />
        <Footer />
    </div>
  )
}

export default About