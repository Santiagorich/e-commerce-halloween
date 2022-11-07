import React from "react";
import OrangeButton from "../../OrangeButton";

function CustomSlide({ img, title, imgdesc,topText,description }) {
  return (
    <div className="flex justify-center lg:grid lg:grid-cols-2 flex-col gap-10">
      <div className="relative flex justify-center">
        <img src={img} alt="" className="updown lg:h-96 h-40 " />
        <div className="absolute bottom-0 left-20 mx-auto flex flex-row items-end">
          <div className="flex flex-col pr-2">
            <span className="font-semibold">{imgdesc.top}</span>
            <span>{imgdesc.bottom}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-2 w-2 rounded-full bg-white" />
            <div className="h-16 w-px bg-white" />
          </div>
        </div>
      </div>
      <div className="w-50 flex flex-col gap-6 sm:justify-center">
        <div className="w-50  flex-col gap-6 flex">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-3xl lg:text-6xl font-extrabold">
            {topText}
          </span>
          <span>
            {description}
          </span>
        </div>
        <div className="mt-8 lg:mt-4 flex flex-col">
          <OrangeButton text="Añadir al carrito" />
        </div>
      </div>
    </div>
  );
}

export default CustomSlide;
