import React from 'react'

function Header () {
  return (
    <div className='flex flex-row justify-between my-4 mx-auto'>
      <div className='flex flex-row gap-1 items-center'>
        <img src='assets/trick-treat5-img.png' alt='' className='w-5 h-5' />
        <span className='text-base font-medium'>Halloween</span>
      </div>
      <div className='flex flex-row items-center gap-10'>
        <span className='cursor-pointer text-lg'>Home</span>
        <span className='cursor-pointer text-lg'>About</span>
        <span className='cursor-pointer text-lg'>Candy</span>
        <span className='cursor-pointer text-lg'>New</span>
        <div className='rounded-full px-6 py-3 border-2 cursor-pointer'><span className='font-bold'>Support</span></div>
      </div>
    </div>
  )
}

export default Header
