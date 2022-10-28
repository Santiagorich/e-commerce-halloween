import React from "react";
import ProductCard from "../ProductCard";


function ProductGrid() {
  const products = [
    {
      img: "assets/trick-treat1-img.png",
      price: 10,
      description: "Description here",
    },
    {
      img: "assets/trick-treat2-img.png",
      price: 10,
      description: "Description here",
    },
    {
      img: "assets/trick-treat3-img.png",
      price: 10,
      description: "Description here",
    },
    {
      img: "assets/trick-treat4-img.png",
      price: 10,
      description: "Description here",
    },
    {
      img: "assets/trick-treat5-img.png",
      price: 10,
      description: "Description here",
    },
    {
      img: "assets/trick-treat6-img.png",
      price: 10,
      description: "Aguacate",
    },
  ];
  return (
    <div className="flex w-full flex-col justify-center">
      <span className="w-full text-center text-4xl font-semibold">
        Truco o trato
      </span>
      <div className="mx-auto grid w-fit grid-cols-3 justify-center gap-x-16 gap-y-16 p-24">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
