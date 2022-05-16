import Product from "../components/Products/Products";
import PCarousels from "../components/ProductSlider/PSlider";
import Carousels from "../components/Slider/FSlider";
import Swiper from "../components/Swipers/Swiper";

const Home = () => {
    return ( 
        <div>
            <Swiper/>
            <Carousels/>
            <Product/>
            <PCarousels/>

        </div>
     );
}
 
export default Home;