import Footer from "../components/footer/Footer";
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
            <Footer/>

        </div>
     );
}
 
export default Home;