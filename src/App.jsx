import Header from "./components/Header/Header";
import MainSwiper from "./components/MainSwiper/MainSwiper";
import "swiper/css/bundle";
import Categories from "./components/Categories/Categories";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Discounts from "./components/Discounts/Discounts";
import JustArrived from "./components/JustArrived/JustArrived";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className=" mx-auto mb-24 max-w-screen-lg px-4">
      <Header />
      <div className="mt-24 flex flex-col gap-20">
        <div>
          <Fade
          triggerOnce={true}>
            <MainSwiper />
          </Fade>
        </div>
        <Fade
        triggerOnce={true}>
          <Categories />
        </Fade>
        <Fade
        triggerOnce={true}>
          <ProductGrid></ProductGrid>
        </Fade>
        <Fade
        triggerOnce={true}>
          <Discounts></Discounts>
        </Fade>
        <Fade
        triggerOnce={true}>
          <JustArrived></JustArrived>
        </Fade>
      </div>

      {/* Footer */}
    </div>
  );
}

export default App;
