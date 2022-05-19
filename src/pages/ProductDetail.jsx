import Details from "../components/Details/Details";
import PCarousels from "../components/ProductSlider/PSlider";
import Reviews from "../components/Reviews/Review";

const ProductDetail = () => {
    return ( 
        <div>
            <h1>This is the ProductDetail Section</h1>
            <Details/>
            <Reviews/>
            <PCarousels/>
        </div>
        
     );
}
 
export default ProductDetail;