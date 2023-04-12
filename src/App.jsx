import Hero from "./components/Hero"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />

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
