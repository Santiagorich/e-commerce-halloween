import React from "react";

function MobileHeader({ setMobileMenuToggled }) {
  return (
    <div className="productcont fixed top-0 left-0 z-30 h-96 w-full rounded-b-3xl py-4">
      <img src="/assets/nav-img.png" className="absolute top-0 left-0 w-32" />
      <button
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 px-2 font-bold absolute top-4 right-4"
        onClick={() => {
          setMobileMenuToggled(false);
        }}
      >
        X
      </button>
      <div className="flex h-full flex-col items-center justify-center gap-4 text-lg font-extrabold">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Candy</span>
        <span className="cursor-pointer">New</span>
        <div className="cursor-pointer rounded-full border-2 px-6 py-3">
          <span className="font-bold">Support</span>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
