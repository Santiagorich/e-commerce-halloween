import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Keyboard } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import ProductCard from '../ProductCard'
import { useMediaQuery } from 'react-responsive'

function JustArrived ({setCartProducts, setCartToggled,cartProducts}) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const products = [
    {
      id:0,
      name:'Toffee',
      img: 'assets/trick-treat1-img.png',
      price: 10.99,
      description: 'Description here'
    },
    {
      id:1,
      name:'Toffee',
      img: 'assets/trick-treat2-img.png',
      price: 10.99,
      description: 'Description here'
    },
    {
      id:2,
      name:'Toffee',
      img: 'assets/trick-treat3-img.png',
      price: 10.99,
      description: 'Description here'
    }
  ]

  const productsChunks = []
  const chunkSize = isTabletOrMobile ? 1 : 3
  for (let i = 0; i < products.length; i += chunkSize) {
    productsChunks.push(products.slice(i, i + chunkSize))
  }

  SwiperCore.use([Keyboard, Autoplay])
  return (
    <div className='flex flex-col gap-24'>
      <span className='w-full text-center lg:text-4xl text-2xl font-semibold'>
        Los recién llegados
      </span>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          keyboard={{
            enabled: true,
            onlyInViewport: true
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop
        >
          {productsChunks.map((chunk, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex flex-row gap-4'>
                  {chunk.map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        type='big'
                        tag='New'
                        discount={true}
                        product={product}
                        setCartProducts={setCartProducts}
                        setCartToggled={setCartToggled}
                        cartProducts={cartProducts}
                      />
                    )
                  })}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default JustArrived
