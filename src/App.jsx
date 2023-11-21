import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Slide from './components/Fotos'
import Fotos from './components/Fotos'
import Productos from './components/Productos'

function App() {
  return (
    <div>
        <Navbar />

        <main>
          <div id='home'>
            <Home />
          </div>

          <div id='productos'>
            <Productos />
          </div>

          <div id='about'>
            <About />
          </div>

          <div id='menu'>
            <Menu />
          </div>

          <div id='fotos'>
            <Fotos />
          </div>
          
          <div>
            <Footer />
          </div>
        </main>
    </div>
  )
}

export default App
