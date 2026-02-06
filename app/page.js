import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Locations from './components/Locations'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Locations />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
