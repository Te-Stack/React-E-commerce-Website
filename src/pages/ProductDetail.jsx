import Details from "../components/Details/Details";
// import Details from "../components/Details/MenDetails";
import PCarousels from "../components/ProductSlider/PSlider";
import Reviews from "../components/Reviews/Review";

const ProductDetail = () => {
    return ( 
        <div>
            {/* <Details/> */}
            <Details />
            <Reviews/>  
            
            <PCarousels/>
            
        </div>
        
     );
}
 
export default ProductDetail;