import Navbar from "./components/navbar"
import Intro from "./components/intro"
import Page from "./components/page"
import Page2 from "./components/page2"
import Page3 from "./components/page3"
import Footer from "./components/footer"
import './App.css'

function App() {

  return (
    <>
      <div className="App">
          <Navbar/>
          <section className="hero">
            <Intro/>
          </section>
          <section className="hero2">
            <Page/>
          </section>
          <section className="hero3">
            <Page2/>
          </section>
          <section className="hero4">
            <Page3/>
            <Footer/>
          </section>
      </div>

    </>
  )
}

export default App
