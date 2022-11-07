import Header from "./components/Header/Header";
import MainSwiper from "./components/MainSwiper/MainSwiper";
import "swiper/css/bundle";
import Categories from "./components/Categories/Categories";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Discounts from "./components/Discounts/Discounts";
import JustArrived from "./components/JustArrived/JustArrived";
import Footer from "./components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import Cart from "./components/Cart/Cart";
import { useRef, useState } from "react";
import MobileHeader from "./components/Header/MobileHeader";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartToggled, setCartToggled] = useState(false);
  const [mobileMenuToggled, setMobileMenuToggled] = useState(false);
  const productGridRef = useRef(null);
  const discountsRef = useRef(null);
  const justArrivedRef = useRef(null);
  const mainRef = useRef(null);
  const scrollRefs = {
    productGridRef: productGridRef,
    discountsRef: discountsRef,
    justArrivedRef: justArrivedRef,
    mainRef: mainRef,
  };
  return (
    <div className="relative">
      <Cart
        toggled={cartToggled}
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
      ></Cart>
      <div className=" mx-auto mb-24 max-w-screen-lg px-4">
        {mobileMenuToggled && (
          <MobileHeader
            setMobileMenuToggled={setMobileMenuToggled}
          ></MobileHeader>
        )}
        <Header
          setCartToggled={setCartToggled}
          cartProducts={cartProducts}
          setMobileMenuToggled={setMobileMenuToggled}
          {...scrollRefs}
        />
        <div className="mt-24 flex flex-col gap-20">
          <div>
            <Fade triggerOnce>
              <MainSwiper ref={mainRef} />
            </Fade>
          </div>
          {/* <Fade
          triggerOnce
        >
          <Categories />
        </Fade> */}
          <Fade triggerOnce>
            <ProductGrid
              ref={productGridRef}

              setCartProducts={setCartProducts}
              setCartToggled={setCartToggled}
              cartProducts={cartProducts}
            />
          </Fade>
          <Fade triggerOnce>

            <Discounts ref={discountsRef} />
          </Fade>
          <Fade triggerOnce>
            <JustArrived
              ref={justArrivedRef}

              setCartProducts={setCartProducts}
              setCartToggled={setCartToggled}
              cartProducts={cartProducts}
            />
          </Fade>
        </div>
        <button
          className="lg:hidden flex h-16 w-16 items-center justify-center rounded-lg fixed bottom-4 right-4 bg-orange-600 px-2 font-bold "
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
        </button>
      </div>
      <Footer />
    </div>
  );

}

export default App;
