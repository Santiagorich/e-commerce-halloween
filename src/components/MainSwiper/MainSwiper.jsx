import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomSlide from './CustomSlide/CustomSlide'
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'

function MainSwiper () {
  SwiperCore.use([Pagination, Keyboard, Autoplay])
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' bg-white w-1.5 h-1.5"></span>'
    }
  }
  const slides = [
    {
      img: 'assets/footer1-img.png',
      title: '#1 FANTASMA MAS ATERRADOR',
      imgdesc: {
        top: 'Labu Raizu',
        bottom: '$10.99'
      },
      topText:'Lo mejor de lo mejor!',
      description:'Uno de los mejores productos que tenemos en esta tienda! No te decepcionara!'
    },
    {
      img: 'assets/home2-img.png',
      title: '#2 MEJOR DUO',
      imgdesc: {
        top: 'Labu Raizu',
        bottom: '$10.99'
      },
      topText:'Lo mejor de lo mejor!',
      description:'Uno de los mejores productos que tenemos en esta tienda! No te decepcionara!'
    },
    {
      img: 'assets/home3-img.png',
      title: '#3 OTRO FANTASMA MAS ATERRADOR',
      imgdesc: {
        top: 'Labu Raizu',
        bottom: '$10.99'
      },
      topText:'Lo mejor de lo mejor!',
      description:'Uno de los mejores productos que tenemos en esta tienda! No te decepcionara!'
    }
  ]
  return (
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
      pagination={pagination}
      className=' pb-20 pt-10 lg:pb-36 lg:pt-0'
    >
      <SwiperSlide>
        <CustomSlide {...slides[0]} />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSlide {...slides[1]} />
      </SwiperSlide>
      <SwiperSlide>
        <CustomSlide {...slides[2]} />
      </SwiperSlide>
    </Swiper>
  )
}

export default MainSwiper
