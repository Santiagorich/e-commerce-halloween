import React from "react";

function ProductCard({ img, price, description }) {
  return (
    <div className="productcont flex h-60 w-48 items-center justify-center rounded-3xl bg-black relative overflow-hidden group">
      <div className="flex flex-col justify-center gap-2">
        <img
          src={img}
          alt=""
          className="mx-auto h-24 w-24 transition-all duration-300 group-hover:-translate-y-2"
        />
        <div className="flex flex-col">
          <span className="text-center text-xl font-medium">Toffee</span>
          <span className="text-center text-sm">{description}</span>
        </div>
        <span className="text-center text-xl font-medium">${price}</span>
      </div>
      <div className="rounded-tl-lg bg-orange-600 p-2 absolute bottom-0 group-hover:right-0 -right-10 transition-all ">
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
        </svg>
      </div>
    </div>
  );
}

export default ProductCard;
