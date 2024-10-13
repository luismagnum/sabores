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
import Papa from './components/Papa'
import TextSlider from './components/slide/TextSlider'
import Delivery from './components/Delivery'
import Pagos from './components/Pagos'
import ShoppingCart from './components/ShoppingCart'
import Frecuente from './components/Frecuente'

function App() {
  return (
    <div>
        <Navbar />
        <main>
          <div id='home'>
            <Papa />
            <TextSlider />
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
          <div id='shoppingcart'>
          <ShoppingCart />
          </div>
          <Pagos />
          <Delivery />
          <Frecuente />
          <Fotos />
          <div>
            <Footer />
          </div>
        </main>
    </div>
  )
}

export default App
