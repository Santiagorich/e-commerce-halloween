import React from 'react'

function CustomSlide ({ img, title, imgdesc }) {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex justify-center relative'>
        <img src={img} alt='' className='updown h-96' />
        <div className='flex flex-row absolute bottom-0 left-20 mx-auto items-end'>
          <div className='flex flex-col pr-2'>
            <span className='font-semibold'>{imgdesc.top}</span>
            <span>{imgdesc.bottom}</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-2 h-2 rounded-full bg-white' />
            <div className='w-px h-16 bg-white' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 w-50'>
        <span className='text-lg font-semibold'>
          {title}
        </span>
        <span className='text-6xl font-extrabold'>
          BUUUUU!<br />
          TRUCO O<br />
          TRATO!!
        </span>
        <span>
          Hola, esta es una web que se refactorizará para
          pasar de JS plano a una aplicación de React con
          muchas funcionalidades extra.
        </span>
        <div className='flex flex-row justify-between mt-4'>
          <button className=' bg-orange-600 py-4 px-6 rounded-lg text-lg font-semibold'>Reservar Ahora</button>
        </div>
      </div>

    </div>
  )
}

export default CustomSlide
