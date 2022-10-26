import Header from './components/Header/Header'
import MainSwiper from './components/MainSwiper/MainSwiper'
import 'swiper/css/bundle'

function App () {
  return (
    <div className=' max-w-screen-lg mx-auto px-4'>
      <Header />
      <div className='mt-20'>
        <MainSwiper />
      </div>
    </div>
  )
}

export default App
