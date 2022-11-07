import React from 'react'
import OrangeButton from '../OrangeButton'

function Discounts () {
  return (
    <div className='productcont flex h-fit lg:h-80 w-full lg:flex-row flex-col-reverse gap-10 lg:gap-0 items-center lg:justify-between rounded-3xl py-12 px-4 lg:px-20'>
      <img src='assets/discount-img.png' alt='' className='w-32 lg:w-auto lg:h-52' />
      <div className='flex flex-col items-center justify-center gap-2'>
        <span className='w-full text-center text-lg lg:text-3xl font-semibold'>
          50% de descuento
        </span>
        <span className='w-full text-center text-lg lg:text-3xl font-semibold'>
          Sobre nuevos productos
        </span>
        <div className='mt-6 lg:mt-0'>
        <OrangeButton text='Ir a nuevo' />
        </div>
      </div>
    </div>
  )
}

export default Discounts
