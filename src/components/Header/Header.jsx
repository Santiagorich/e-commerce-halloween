import React from "react";

function Header({
  setCartToggled,
  cartProducts,
  productGridRef,
  discountsRef,
  setMobileMenuToggled,
  justArrivedRef,
  mainRef,
}) {
  return (
    <div className="header fixed top-0 left-0 z-10 flex w-screen flex-row justify-evenly gap-24 py-4">
      <div className="flex flex-row items-center gap-1">
        <img src="assets/trick-treat5-img.png" alt="" className="h-5 w-5" />
        <span className="text-base font-medium">Halloween Store</span>
      </div>
      <div className="hidden flex-row items-center gap-10 lg:flex">
        <span
          className="cursor-pointer text-lg"
          onClick={() => mainRef.current.scrollIntoView()}
        >
          Home
        </span>
        <span className="cursor-pointer text-lg">About</span>
        <span className="cursor-pointer text-lg">Candy</span>
        <span
          className="cursor-pointer text-lg"
          onClick={() => justArrivedRef.current.scrollIntoView()}
        >
          New
        </span>
        <div className="cursor-pointer rounded-full border-2 px-6 py-3">
          <span className="font-bold">Support</span>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setCartToggled((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
            {cartProducts && cartProducts.length > 0 ? (
              <span className="productcont absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                {cartProducts.length}
              </span>
            ) : null}
          </svg>
        </div>
      </div>
      <button
        data-bs-toggle="collapse"
        data-bs-target="#mobileMenu"
        type="button"
        class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => {
          setMobileMenuToggled((prev) => !prev);
        }}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      
    </div>
  );
}

export default Header;
