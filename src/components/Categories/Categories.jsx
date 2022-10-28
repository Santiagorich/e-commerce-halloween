import React from 'react'

const Categories = () => {
  return (
    <section>
      <h2>
        Susto Favorito
        <br />
        Categorias
      </h2>
      <div className='container grid'>
        <div className=''>
          <img src='../../assets/category1-img.png' className='' />
          <h3>Fantasma</h3>
          <p>Choose the ghosts, the scariest there are.</p>
        </div>
        <div className=''>
          <img src='../../assets/category2-img.png' className='' />
          <h3>Calabazas</h3>
          <p>You look at the scariest pumpkins there is.</p>
        </div>
        <div className=''>
          <img src='../../assets/category3-img.png' className='' />
          <h3>Sombrero de bruja</h3>
          <p>Pick the most stylish witch hats out there.</p>
        </div>
      </div>
    </section>
  )
}

export default Categories
