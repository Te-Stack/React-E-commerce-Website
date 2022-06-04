
import Product from "../components/Products/Products";
import PCarousels from "../components/ProductSlider/HSlider";
import Carousels from "../components/Slider/FSlider";
import Swiper from "../components/Swipers/Swiper";
// import PSample from "../components/PSample/psample";

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