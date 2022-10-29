import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Keyboard } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import ProductCard from '../ProductCard'

function JustArrived () {
  const products = [
    {
      img: 'assets/trick-treat1-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat2-img.png',
      price: 10,
      description: 'Description here'
    },
    {
      img: 'assets/trick-treat3-img.png',
      price: 10,
      description: 'Description here'
    }
  ]

  const productsChunks = []
  for (let i = 0; i < products.length; i += 3) {
    productsChunks.push(products.slice(i, i + 3))
  }

  SwiperCore.use([Keyboard, Autoplay])
  return (
    <div className='flex flex-col gap-24'>
      <span className='w-full text-center text-4xl font-semibold'>
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
                        key={product.title}
                        type='big'
                        tag='New'
                        {...product}
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
