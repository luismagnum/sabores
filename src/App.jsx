import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Fotos from './components/Fotos'
import Productos from './components/Productos'
import ComboArepa from './components/Combo'
import PopModal from './components/popup/PopModal'

function App() {
  return (
    <div>
        <Navbar />
        <PopModal />

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
          <div id='combo'>
            <ComboArepa />
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
