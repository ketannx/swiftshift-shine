import Navbar from '../components/Navbar'
import Landing from '../components/Contact/Landing'
import Details from '../components/Contact/Details'
import Book from '../components/Contact/Book'
import Footer from '../components/Footer'
import { Toaster } from "react-hot-toast";

function Contact() {
  return (
    <div>
      <Toaster position="top-center" />
      <Navbar />
      <Landing />
      <Details />
      <Book />
      <Footer />
    </div>
  )
}

export default Contact