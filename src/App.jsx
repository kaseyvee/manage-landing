import Nav from "./components/Nav"

import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Testimonials from "./components/Testimonials"

import BottomBanner from "./components/BottomBanner"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Nav />
      <main className="App">

        <Hero />
        <Offers />
        <Testimonials />
        
        <BottomBanner />
      </main>
      <Footer />
    </>
  )
}

export default App
