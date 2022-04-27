import Product from "../components/Products/Products";
import Carousels from "../components/Slider/FSlider";
import Swiper from "../components/Swipers/Swiper";

const Home = () => {
    return ( 
        <div>
            <Swiper/>
            <Carousels/>
            <Product/>
        </div>
     );
}
 
export default Home;