import React from 'react'

const Categories = () => {
  return (
    <section className=' p-24'>
      <h2 className=' text-center text-4xl font-semibold mb-8'>
        Susto Favorito
        <br />
        Categorias
      </h2>
      <div className='container flex gap-8 text-center items-center'>
        <div className=' flex-row'>
          <img src='assets/category1-img.png' className=' h-40 mx-auto transition-all duration-300 hover:translate-y-4' />
          <h3 className=' font-semibold text-lg'>Fantasma</h3>
          <p>Choose the ghosts, the scariest there are.</p>
        </div>
        <div className=' flex-row'>
          <img src='assets/category2-img.png' className=' h-40 mx-auto transition-all duration-300 hover:translate-y-4' />
          <h3 className=' font-semibold text-lg'>Calabazas</h3>
          <p>You look at the scariest pumpkins there is.</p>
        </div>
        <div className=' flex-row'>
          <img src='assets/category3-img.png' className='h-40 mx-auto transition-all duration-300 hover:translate-y-4' />
          <h3 className=' font-semibold text-lg'>Sombrero de bruja</h3>
          <p>Pick the most stylish witch hats out there.</p>
        </div>
      </div>
    </section>
  )
}

export default Categories
