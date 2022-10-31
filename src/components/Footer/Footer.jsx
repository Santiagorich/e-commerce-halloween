import React from 'react'

const Footer = () => {
  return (

    <div className='flex flex-row justify-evenly gap-20 w-full mt-32'>
      <div>
        <img src='assets/footer2-img.png' alt='ghost' className=' mx-auto h-52 transition-all duration-300 hover:-translate-y-4' />
      </div>
      <div>
        <span>
          <img src='assets/logo.png' className='mx-auto h-5' />
        </span>
        <h3 className='text-xl font-semibold mb-8'>Halloween</h3>
        <p>
          Enjoy the scariest night
          <br />
          of yoy life
        </p>
        <div>
          <a href='#'>Twitter</a>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
      <div>
        <h3 className=' text-xl font-semibold mb-8'>About</h3>
        <ul>
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>Features</p>
          </li>
          <li>
            <p>News</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className=' text-xl font-semibold mb-8'>Our services</h3>
        <ul>
          <li>
            Pricing
          </li>
          <li>
            Discount
          </li>
          <li>
            Shiping mode
          </li>
        </ul>
      </div>
      <div>
        <h3 className=' text-xl font-semibold mb-8'>Our company</h3>
        <ul>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>Our mision</p>
          </li>
        </ul>
      </div>
      <div>
        <img src='assets/footer1-img.png' alt='ghost' className=' mx-auto h-52 transition-all duration-300 hover:-translate-y-4' />
      </div>
    </div>
  )
}

export default Footer
