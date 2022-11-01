import Header from './components/Header/Header'
import MainSwiper from './components/MainSwiper/MainSwiper'
import 'swiper/css/bundle'
import Categories from './components/Categories/Categories'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Discounts from './components/Discounts/Discounts'
import JustArrived from './components/JustArrived/JustArrived'
import Footer from './components/Footer/Footer'
import { Fade } from 'react-awesome-reveal'

function App () {
  return (
    <div>
      <div className=' mx-auto mb-24 max-w-screen-lg px-4'>
      <Header />
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
          <ProductGrid />
        </Fade>
        <Fade
          triggerOnce
        >
          <Discounts />
        </Fade>
        <Fade
          triggerOnce
        >
          <JustArrived />
        </Fade>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
