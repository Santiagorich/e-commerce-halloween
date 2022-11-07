function ProductCard({
  product,
  type = "small",
  tag,
  discount,
  cartProducts,
  setCartProducts,
  setCartToggled,
}) {
  return (
    <div
      className={`productcont group relative flex ${
        type === "big" ? "h-80 w-full" : "h-52 lg:h-60 w-40 lg:w-48"
      } cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-black`}
      onClick={() => {
        setCartToggled(true);
        //if the product is already in the cart, don't add it again and add 1 to the quantity
        if (cartProducts.some((item) => item.id === product.id)) {
          setCartProducts((prev) => {
            return prev.map((item) => {
              if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          });
        } else {
          setCartProducts((prev) => {
            return [...prev, { ...product, quantity: 1 }];
          });
        }
      }}
    >
      {tag && (
        <div className="absolute top-6 left-6 rounded-md bg-orange-600 px-2 py-1 transition-all ">
          <span className="text-center text-sm">{tag}</span>
        </div>
      )}
      <div className="flex flex-col justify-center gap-2">
        <img
          src={product.img}
          alt=""
          className="mx-auto h-20 lg:h-28 w-20 lg:w-28 transition-all duration-300 group-hover:-translate-y-2"
        />
        <div className="flex flex-col">
          <span className="text-center text-lg lg:text-xl font-medium">
            {product.name}
          </span>
          <span className="text-center text-sm">{product.description}</span>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
        <span className="text-center text-md lg:text-lg font-medium">
          ${product.price}
        </span>
        <span className="text-center text-md text-orange-600 line-through">
          ${product.price*2}
        </span>
        </div>
      </div>

      {type === "big" ? (
        <div className="absolute -bottom-32 flex w-full flex-row items-center justify-center gap-4 bg-orange-600 p-2 transition-all group-hover:bottom-0">
          <span className="text-center text-lg">Agregar al carrito</span>

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
      ) : (
        <div className="absolute bottom-0 -right-10 rounded-tl-lg bg-orange-600 p-2 transition-all group-hover:right-0 ">
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
      )}
    </div>
  );
}

export default ProductCard;
