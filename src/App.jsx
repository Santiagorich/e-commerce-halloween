import Header from './components/Header/Header'
import MainSwiper from './components/MainSwiper/MainSwiper'
import 'swiper/css/bundle'
import ProductCard from './components/Product/ProductCard'

function App () {
  const products = [
    {
      img: 'assets/trick-treat4-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat4-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat4-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat4-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat4-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat4-img.png',
      price: 10,
      description: 'Description here'
    },
  ]
  return (
    <div className=' max-w-screen-lg mx-auto px-4'>
      <Header />
      <div className='mt-20'>
        <MainSwiper />
      </div>
      {/* Categories */}
      <div className='grid grid-cols-3 gap-x-16 gap-y-16 justify-center mt-40 p-24 w-fit mx-auto'>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      {/* Footer */}
    </div>
  )
}

export default App
