import Nav from "./components/Nav"

import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Testimonials from "./components/Testimonials"

import BottomBanner from "./components/BottomBanner"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <Nav />

      <Hero />
      <Offers />
      <Testimonials />
      
      <BottomBanner />
      <Footer />

      {/* <picture>
        <source
          media="(min-width: 769px)" srcSet="bg-simplify-section-desktop.svg"
        />
        <img src="bg-simplify-section-mobile.svg" alt="background" />
      </picture> */}
    </div>
  )
}

export default App
