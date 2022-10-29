import React from 'react'
import Category from './Category/Category'

const Categories = () => {
  const categories = [
    {
      id: 0,
      img: 'assets/category1-img.png',
      title: 'Fantasma',
      desc: 'Choose the ghosts, the scariest there are.'
    },
    {
      id: 1,
      img: 'assets/category2-img.png',
      title: 'Calabazas',
      desc: 'You look at the scariest pumpkins there is.'
    },
    {
      id: 2,
      img: 'assets/category3-img.png',
      title: 'Sombrero de bruja',
      desc: 'Pick the most stylish witch hats out there.'
    }
  ]
  return (
    <div className='flex flex-col justify-items-center gap-8'>
      <span className='text-4xl font-semibold text-center'>Susto Favorito</span>
      <span className='text-4xl font-semibold text-center'> Categorias</span>
      <div className='flex flex-row justify-evenly items-center gap-8 text-center'>
        {categories.map((category) => (
          <Category
            key={category.id}
            img={category.img}
            title={category.title}
            desc={category.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
