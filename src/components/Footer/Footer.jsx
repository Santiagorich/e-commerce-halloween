import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>
          <img src='assets/logo.png' className=' mx-auto h-10 transition-all duration-300 hover:-translate-y-4' />
          <a href='#'>Halloween</a>
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
        <h3>About</h3>
        <ul>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Features</p>
          </li>
          <li>
            <p>News</p>
          </li>
        </ul>
        <div />
        <div>
          <h3>Our services</h3>
          <ul>
            <li>
              <p>Pricing</p>
            </li>
            <li>
              <p>Discount</p>
            </li>
            <li>
              <p>Shiping mode</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Our company</h3>
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
      </div>
      <img src='assets/footer2-img.png' alt='ghost' className=' mx-auto h-52 transition-all duration-300 hover:-translate-y-4' />
      <img src='assets/footer1-img.png' alt='ghost' className=' mx-auto h-52 transition-all duration-300 hover:-translate-y-4' />
      <span>&copy; 2022 developed by Val & Zego</span>
    </footer>
  )
}

export default Footer
