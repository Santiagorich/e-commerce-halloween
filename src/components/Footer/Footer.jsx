import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-row justify-between gap-20">
      <div>
        <img
          src="assets/footer2-img.png"
          alt="ghost"
          className="h-52 transition-all duration-300 hover:-translate-y-2"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
          <span>
            <img src="assets/logo.png" className="h-5" />
          </span>
          <h3 className="font-semibold">Halloween</h3>
        </div>
        <p>
          Enjoy the scariest night <br></br> of your life.
        </p>
        <div className="flex flex-row gap-2">
          <a href="#" className="flex bg-black w-6 h-6 rounded-lg justify-center items-center hover:bg-orange-500">T</a>
          <a href="#" className="flex bg-black w-6 h-6 rounded-lg justify-center items-center hover:bg-orange-500">F</a>
          <a href="#" className="flex bg-black w-6 h-6 rounded-lg justify-center items-center hover:bg-orange-500">I</a>
        </div>
      </div>
     <div className='hidden lg:block'>
        <h3 className=" mb-4 text-xl font-semibold">About</h3>
        <div className="flex flex-col gap-2">
          <span>About us</span>
          <span>Features</span>
          <span>News</span>
        </div>
      </div>
      <div className='hidden lg:block'>
        <h3 className="mb-4 text-xl font-semibold">Our services</h3>
        <div className="flex flex-col gap-2">
          <span>Pricing</span>
          <span>Discounts</span>
          <span>Shipping mode</span>
        </div>
      </div>
      <div className='hidden lg:block'>
        <h3 className=" mb-4 text-xl font-semibold">Our company</h3>
        <div className="flex flex-col gap-2">
          <span>Blog</span>
          <span>About us</span>
          <span>Our mision</span>
        </div>
      </div>
      <div className='hidden lg:block'>
        <img
          src="assets/footer1-img.png"
          alt="ghost"
          className=" h-52 transition-all duration-300 hover:-translate-y-2"
        />
      </div>
     </div>
  );
};

export default Footer;
