import React from "react";
import OrangeButton from "../OrangeButton";

function Discounts() {
  return (
    <div className="productcont flex h-80 w-full flex-row justify-between rounded-3xl py-12 px-20">
      <img src="assets/discount-img.png" alt="" className="h-52" />
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="w-full text-center text-3xl font-semibold">
          50% de descuento
        </span>
        <span className="w-full text-center text-3xl font-semibold">
          Sobre nuevos productos
        </span>
        <OrangeButton text={"Ir a nuevo"}></OrangeButton>
      </div>
    </div>
  );
}

export default Discounts;
