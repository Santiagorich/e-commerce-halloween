import Header from './components/Header/Header'
import MainSwiper from './components/MainSwiper/MainSwiper'
import 'swiper/css/bundle'
import Categories from './components/Categories/Categories'

function App () {
  return (
    <div className=' max-w-screen-lg mx-auto px-4'>
      <Header />
      <div className='mt-20'>
        <MainSwiper />
        <Categories />
      </div>
    </div>
  )
}

export default App
