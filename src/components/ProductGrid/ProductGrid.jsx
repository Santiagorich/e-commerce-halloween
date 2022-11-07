import ProductCard from "../ProductCard";

function ProductGrid({ setCartProducts, setCartToggled,cartProducts }) {
  const products = [
    {
      id: 0,
      name: "Toffee",
      img: "assets/trick-treat1-img.png",
      price: 20,
      description: "Description here",
    },
    {
      id: 1,
      name: "Toffee",
      img: "assets/trick-treat2-img.png",
      price: 10,
      description: "Description here",
    },
    {
      id: 2,
      name: "Toffee",
      img: "assets/trick-treat3-img.png",
      price: 10,
      description: "Description here",
    },
    {
      id: 3,
      name: "Toffee",
      img: "assets/trick-treat4-img.png",
      price: 10,
      description: "Description here",
    },
    {
      id: 4,
      name: "Toffee",
      img: "assets/trick-treat5-img.png",
      price: 10,
      description: "Description here",
    },
    {
      id: 5,
      name: "Toffee",
      img: "assets/trick-treat6-img.png",
      price: 10,
      description: "Aguacate",
    },
  ];
  return (
    <div className="flex w-full flex-col justify-center gap-8 lg:gap-0">
      <span className="w-full text-center text-2xl lg:text-4xl font-semibold">
        Truco o trato
      </span>
      <div className="mx-auto grid w-fit grid-cols-2 lg:grid-cols-3 justify-center gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-16 lg:p-24">
        {products.map((product, index) => {
          console.log(product);
          return (
            <ProductCard
              key={index}
              product={product}
              setCartProducts={setCartProducts}
              setCartToggled={setCartToggled}
              cartProducts={cartProducts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
