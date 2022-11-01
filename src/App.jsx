import Header from './components/Header/Header'
import MainSwiper from './components/MainSwiper/MainSwiper'
import 'swiper/css/bundle'
import Categories from './components/Categories/Categories'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Discounts from './components/Discounts/Discounts'
import JustArrived from './components/JustArrived/JustArrived'
import Footer from './components/Footer/Footer'
import { Fade } from 'react-awesome-reveal'
import Cart from './components/Cart/Cart';
import { useState } from 'react'

function App () {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartToggled, setCartToggled] = useState(false);
  return (
    <div className='relative'>
      <Cart toggled={cartToggled} setCartProducts={setCartProducts} cartProducts={cartProducts}></Cart>
      <div className=' mx-auto mb-24 max-w-screen-lg px-4'>
      <Header setCartToggled={setCartToggled} cartProducts={cartProducts} />
      <div className='mt-24 flex flex-col gap-20'>
        <div>
          <Fade
            triggerOnce
          >
            <MainSwiper />
          </Fade>
        </div>
        <Fade
          triggerOnce
        >
          <Categories />
        </Fade>
        <Fade
          triggerOnce
        >
          <ProductGrid setCartProducts={setCartProducts} setCartToggled={setCartToggled} cartProducts={cartProducts}/>
        </Fade>
        <Fade
          triggerOnce
        >
          <Discounts />
        </Fade>
        <Fade
          triggerOnce
        >
          <JustArrived setCartProducts={setCartProducts} setCartToggled={setCartToggled} cartProducts={cartProducts}/>
        </Fade>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
